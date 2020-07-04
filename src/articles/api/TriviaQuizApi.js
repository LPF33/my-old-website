import React, {useState, useEffect} from "react";
import "./TriviaQuizApi.css";
import axios from "axios";
import querystring from "querystring";

export default function TriviaQuizApi(){

    const [preGame, setPreGame] = useState(true);
    const [trivia, setTrivia] = useState({token:"", category:"",counter:"", questions:""});
    const [user, setUser] = useState({category:"",type:"",difficulty:"", status:"Start Quiz", loading:""});
    const [error, setError] = useState("");

    useEffect(() => {
        (async function(){
            try{
                const getToken = await axios.get("https://opentdb.com/api_token.php?command=request");
                const getCategory = await axios.get("https://opentdb.com/api_category.php");
                setUser({...user, category: getCategory.data.trivia_categories[0].id});
                const newCounter = await countQuestion(getCategory.data.trivia_categories[0].id,0);
                setTrivia({...trivia, token:getToken.data.token, category:getCategory.data.trivia_categories, counter: newCounter});
            }catch(err){
                setError(err);
            }            
        })();        
    },[]); 


    const countQuestion = async(selectedCategory,z=1) => {
        setUser({...user, category:selectedCategory});
        let counter = {};
        counter = await axios.get(`https://opentdb.com/api_count.php?category=${selectedCategory}`);
        counter.data.category_question_count.total_question_count = counter.data.category_question_count.total_question_count ? counter.data.category_question_count.total_question_count : ""; 
        counter.data.category_question_count.total_easy_question_count = counter.data.category_question_count.total_easy_question_count ? counter.data.category_question_count.total_easy_question_count : "";
        counter.data.category_question_count.total_medium_question_count = counter.data.category_question_count.total_medium_question_count ? counter.data.category_question_count.total_medium_question_count : "";
        counter.data.category_question_count.total_hard_question_count = counter.data.category_question_count.total_hard_question_count ? counter.data.category_question_count.total_hard_question_count : "";
        const newCounter = [{id: "any", num: counter.data.category_question_count.total_question_count}, {id:"easy",num: counter.data.category_question_count.total_easy_question_count},{id:"medium", num: counter.data.category_question_count.total_medium_question_count} , {id:"hard",num: counter.data.category_question_count.total_hard_question_count}];
        if(!z){
            return newCounter;
        }else{
            setTrivia({...trivia, counter: newCounter});
        }        
    }     
    
    const startQuiz = async() => {   
        setUser({...user, status:"Wait...", loading:"quiz-loading"});
        const query = querystring.stringify({amount:10, token:trivia.token ,difficulty:user.difficulty, type:user.type, category:user.category, encode:"base64"});
        const getQuestions = await axios.get(`https://opentdb.com/api.php?${query}`);
        if(!getQuestions.data.response_code){
            setError("");  
            setTrivia({...trivia, questions:getQuestions.data.results});            
            setPreGame(false);
            setUser({...user, status:"Start Quiz", loading:""});
        } else if(getQuestions.data.response_code===4){
            setError("All possible questions for the specified query have been returned.");
            setUser({...user, status:"Start Quiz", loading:""});
        }else{
            setError(getQuestions.data.response_code);
            setUser({...user, status:"Start Quiz", loading:""});
        }        
    }    

    return(
        <div id="trivia-quiz">
            <h1>QUIZ</h1>
            {preGame &&
            <div>
                <h4>Category:</h4>
                <select onChange={(e) => countQuestion(e.target.value)}>
                    {trivia.category && trivia.category.map((item,index) => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
            </div>
            }
            {preGame &&
            <div>
                <h4>Difficulty:</h4>
                <select onChange={e => {if(e.target.value==="any"){
                                            setUser({...user, difficulty:""});
                                        } else{
                                            setUser({...user, difficulty:e.target.value});
                                        }}}>
                    {trivia.counter && trivia.counter.filter(item => item.num!==0).map((item, index) => <option key={index} value={item.id}>{item.id}:{item.num} questions</option>)}
                </select>
            </div>
            }
            {preGame &&
            <div>
                <h4>Question-type:</h4>
                <select onChange={e => setUser({...user, type:e.target.value})}>
                    <option value="">any</option>
                    <option value="multiple">multiple choice</option>
                    <option value="boolean">true/false</option>
                </select>
            </div>
            }
            {preGame && trivia.category &&
                <button type="button" onClick={startQuiz} className={user.loading}>{user.status}</button>
            }
            {preGame && error && <h5>{error}: Try something different.</h5>}
            {!preGame && <MainQuiz  questions={trivia.questions} setPreGame={setPreGame} /> }
        </div>
    )
}

function MainQuiz(props){

    const {questions, setPreGame} = props;    

    const mixAnswers = (num=0) => {
        const answers = [];
        questions[num].incorrect_answers.forEach(item => answers.push(item));
        const randomNum = Math.floor(Math.random()*answers.length);
        answers.splice(randomNum,0,questions[num].correct_answer);
        return [answers,randomNum];
    };

    const decode = stringBase64 => {
        let buff = new Buffer(stringBase64, "base64")
        return buff.toString("utf-8");
    };

    const [currentAnswers, setCurrentAnswers] = useState(mixAnswers());
    const [user, setUser] = useState({correct:0,question:0, showCorrect:"", end:false});
    
    const checkAnswer = userAnswer => {
        setUser({...user, showCorrect:"correct"});

        const next = (userAnswer) => {
            if(user.question < questions.length-1){
                if(userAnswer === questions[user.question].correct_answer){
                    setUser({question:user.question +1, correct: user.correct +1});
                    setCurrentAnswers(mixAnswers(user.question +1)) ;
                }else {
                    setUser({...user, question:user.question +1});
                    setCurrentAnswers(mixAnswers(user.question +1)) ;
                }
            }else{
                setUser({...user, end:true});
            } 
        }  
        setTimeout(() => next(userAnswer), 1500);
    }

    return(
        <div>
            {questions && !user.end && 
                <div className="quizflex">
                    <h2>{decode(questions[user.question].question)}</h2>  
                    {currentAnswers[0] && currentAnswers[0].map((item, index) => {
                        if(index === currentAnswers[1]){
                            return <button onClick={() => checkAnswer(item)}  className={user.showCorrect} key={index} type="button">{decode(item)}</button>
                        }else{
                            return <button onClick={() => checkAnswer(item)}  key={index} type="button">{decode(item)}</button>
                        }                    
                    })}
                </div>
            }
            {user.end &&
            <div className="quizflex">                
                <h4 className="quiz-end">You answered {user.correct} questions correctly!</h4>
                <button type="button" onClick={() => setPreGame(true)}>Restart</button>
            </div>
            }
        </div>
    )
}