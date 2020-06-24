const express = require('express');
const helmet = require('helmet');
const app = express();
const compression = require('compression');
const cookieSession = require('cookie-session');
const bodyParser = require("body-parser");
const csurf = require("csurf");

const ses = require("./ses");
const database = require("./database");

app.use(express.static("build"));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "http://127.0.0.1:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, csrf-token");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(helmet());
app.use(express.json());
app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));

const cookieSessionMiddleware = cookieSession({
    secret: "All about coding",
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: "none",
    secure : false
});
app.use( cookieSessionMiddleware);

app.use(csurf());

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});

app.use((request, response, next) => {
    if(!request.session.time){
        const start = Date.now();
        request.session.time = start;
    }  
    next();
});

app.get("/allarticles", async(request, response) => {
    const articles = await database.getArticles();
    response.json({
        success : true,
        data:articles.rows});
});

app.get("/searcharticles/:search", async(request, response) => {
    const {search} = request.params; 
    const articles = await database.searchArticles(search);
    if(articles.rows && articles.rows.length>0){
        response.json({
            success : true,
            data:articles.rows
        });
    } else {
        response.json({
            success: false
        });
    }    
});

app.get("/lastarticle", async(request, response) => {
    const article = await database.lastArticle();
    response.json({data: article.rows[0]});
});

app.post("/sendmail", async(request, response) => {
    const {textArea, field} = request.body; 
    const mail = textArea.replace(/<\/?[^>]+(>|$)/g, "");
    if(!request.session.mailcount){
        request.session.mailcount = 1;
    } else {
        request.session.mailcount = request.session.mailcount === 1 ? 2 : "stop";
    }
    const difference = Date.now() - request.session.time;
    
    if(!field && difference/1000 > 4){
        if(mail && mail.length>=20 && mail.length<=1000 && request.session.mailcount!=="stop"){
            try{
                ses.contactMail(mail);
                response.json({success:true});
            } catch{
                response.json({
                    success:false,
                    error: "Error",
                    text: "Something went wrong! I'm sorry! Try it again!"
                });
            }
        }else{
            response.json({
                success:false,
                error: "Stop",
                text : "You can only write me twice! Have a nice day!"
            });
        }
    }else{
        response.json({success:true});
    }        
});

app.get("/games", async(request, response) => {
    const games = await database.getGames();
    response.json({data: games.rows});
});


app.get("*", (request, response) => {
    response.sendFile(__dirname + '/build/index.html');    
});

app.listen(process.env.PORT || 8080);