import React, {useState, useEffect} from "react";
import "./TriviaQuizApi.css";
import axios from "axios";
import querystring from "querystring";

export default function TriviaQuizApi(){

    const [preGame, setPreGame] = useState(true);
    const [trivia, setTrivia] = useState({token:"", category:"",counter:"", questions:""});
    const [user, setUser] = useState({category:"",type:"",difficulty:""});
    const [error, setError] = useState("");

    useEffect(() => {
        (async function(){
            try{
                //const getToken = await axios.get("https://opentdb.com/api_token.php?command=request");
                const getCategory = await axios.get("https://opentdb.com/api_category.php");
                setUser({...user, category: getCategory.data.trivia_categories[0].id});
                const newCounter = await countQuestion(getCategory.data.trivia_categories[0].id,0);
                setTrivia({...trivia, token:/*getToken.data.token*/"", category:getCategory.data.trivia_categories, counter: newCounter});
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
        const query = querystring.stringify({amount:10, difficulty:user.difficulty, type:user.type, category:user.category, encode:"base64"});
        const getQuestions = await axios.get(`https://opentdb.com/api.php?${query}`);
        if(!getQuestions.data.response_code){
            setTrivia({...trivia, questions:getQuestions.data.results});            
            setPreGame(false);
        }else{
            setError("SHit");
        }        
    }

    const decode = stringBase64 => {
        let buff = new Buffer(stringBase64, "base64")
        return buff.toString("ascii");
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
                    {trivia.counter && trivia.counter.map((item, index) => <option key={index} value={item.id}>{item.id}:{item.num} questions</option>)}
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
            {preGame &&
                <button type="button" onClick={startQuiz}>Start Quiz</button>
            }
            {!preGame &&
                <div>
                    {trivia.questions && 
                        <div>
                            <h2>{decode(trivia.questions[0].question)}</h2>                      
                            {decode(trivia.questions[0].type)==="multiple" &&
                                <div className="quizflex">
                                    <button type="button">{decode(trivia.questions[0].correct_answer)}</button>
                                    <button type="button">{decode(trivia.questions[0].incorrect_answers[0])}</button>
                                    <button type="button">{decode(trivia.questions[0].incorrect_answers[1])}</button>
                                    <button type="button">{decode(trivia.questions[0].incorrect_answers[2])}</button>
                                </div>
                            }
                            {decode(trivia.questions[0].type)==="boolean" &&
                                <div className="quizflex">
                                    <button type="button">True</button>
                                    <button type="button">False</button>
                                </div>
                            }
                        </div>
                    }
                </div>
            }
        </div>
    )
}