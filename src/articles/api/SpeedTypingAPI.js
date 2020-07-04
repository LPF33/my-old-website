import React, {useState, useEffect, useRef} from "react";
import "./SpeedTyping.css";
import axios from "axios";

const compare = (input,quote) => {
    const quoteText = document.querySelector("#show-quote");
    const inputArr = input.split("");
    let match = true;
    quote.forEach((item,index) => {
        if(!inputArr[index]){
            quoteText.children[index].classList.remove("incorrect");
            quoteText.children[index].classList.remove("correct");
            match = false;
        } else if(item === inputArr[index]){
            quoteText.children[index].classList.remove("incorrect");
            quoteText.children[index].classList.add("correct");
        } else{
            quoteText.children[index].classList.remove("correct");
            quoteText.children[index].classList.add("incorrect");
            match = false;
        }

        
    }); 
    if(match){
        for(let i=0; i<quote.length; i++){
            quoteText.children[i].classList.remove("correct");
        }
        return true;
    }
};

export default function SpeedTyping(){

    const [quote, setQuote] = useState({content:"", author:"", averageTime:""});
    const [inputText, setInputText] = useState(""); 
    const [time, setTime] = useState(0);
    const [average, setAverage] = useState("");
    let timeoutId = useRef();

    let startTime;

    const timer = () => {
        timeoutId.current = setTimeout(() => {
            setTime(Math.floor((new Date() - startTime) /1000));
            timer();
        },1000)
    }

    const getQuote = async() => { 
        if(timeoutId){
            clearTimeout(timeoutId.current);
        }    
        const quoteJSON = await axios.get("http://api.quotable.io/random");
        const {content, author, length} = quoteJSON.data;
        setQuote({content: content.split(""), author, averageTime: Math.floor(length/(300/60))});
        setTime(0);
        startTime = new Date();
        timer();
    };    

    const callFunction = (input, quote) => {
        setInputText(input);
        if(compare(input, quote)){
            getQuote();
            setInputText("");
        }
    };

    useEffect(()=> {
        getQuote();

        return()=>{
            clearTimeout(timeoutId.current);
        }
    },[]);

    useEffect(()=>{
        if(time>quote.averageTime){
            setAverage("incorrect");
        }else{
            setAverage("");
        }
    },[time])

    return(
        <div id="speed-typing" className="flex-column">
            <h1>Speed Typing</h1>
            <div className="flex">
                <div id="timer" className={average}>{time}</div>
                <div>&lt;{quote.averageTime}s</div>
            </div>
            
            <h6>{quote.author}:</h6>
            <div id="show-quote">{quote.content && quote.content.map((item, index) => <span key={index}>{item}</span>)}</div>
            <textarea id="text-input" onChange={e => callFunction(e.target.value, quote.content)} placeholder="Type here..." value={inputText}></textarea>
        </div>
    );
}