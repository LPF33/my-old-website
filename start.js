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
/*
app.use(csurf());

app.use(function(req, res, next){
    res.cookie('mytoken', req.csrfToken());
    next();
});*/

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

app.post("/sendmail", async(request, response) => {
    const {textArea} = request.body; 
    const mail = textArea.replace(/<\/?[^>]+(>|$)/g, "");
    try{
        ses.contactMail(mail);
        response.json({success:true});
    } catch{
        response.json({success:false});
    }
});

/*
app.get("*", (request, response) => {
    response.sendFile(__dirname + '/build/index.html');    
});*/

app.listen(process.env.PORT || 8080);