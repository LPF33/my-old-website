import React, {useState, useEffect, useMemo} from "react";
import styled from "styled-components";

const Container = styled.div`
`;

const Container2 = styled.div`
    display: flex;
    margin-top: 10px;
`;

const Textarea = styled.textarea`
    background-color: rgb(255, 255, 255);
    border: 8px solid rgb(111, 218, 203);
    min-width: 200px;
    width: 60%;
    height: 6em;
    border-radius: 10px;
    font-size: 1em;
    font-family: var(--article-font);
    outline:none;
    resize:none;
`;

const Button = styled.button`
    font-size: 1em;
    font-family: var(--article-font);
    background-color: rgb(245, 136, 59);
    padding: 5px;
    border-radius: 10px;
    margin-right: 10px;
`;

const Input = styled.input`
    border: 2px solid yellow;
    border-radius: 0 10px 10px 0;
    font-size: 1em;
    font-family: var(--article-font);
    text-align: center;
`;

const Label = styled.div`
    background-color: yellow;
    border-radius: 10px 0 0 10px;
    padding: 5px;    
`;

const Select = styled.select`
    background-color: yellow;
    border-radius: 0 10px 10px 0;
    padding: 5px;
    font-size: 1em;
    font-family: var(--article-font);
`;

export default function SpeechSynthesis(){

    const utter = useMemo(() => new SpeechSynthesisUtterance(),[]);

    const [speech, setSpeech] = useState({text:"", speed:1});
    const [talking, setTalking] = useState(false);
    const [voice, setVoice] = useState({voices:[], index:0});
    const [char, setChar] = useState(0);  
    
    const end = () => setTalking(false);
    const boundary = e => setChar(e.charIndex);
    const changedVoices = () => {
        const store = speechSynthesis.getVoices();
        setVoice({...voice, voices: store});
    };

    useEffect(() => {
        changedVoices();
        utter.addEventListener("end", end);
        utter.addEventListener("boundary", boundary);       
        window.speechSynthesis.addEventListener("voiceschanged", changedVoices); 

        return () => {
            utter.addEventListener("end", end);
            utter.addEventListener("boundary", boundary);
            window.speechSynthesis.removeEventListener("voiceschanged", changedVoices); 
        }
    },[utter]);

    const speakText = (str,rate) => {
        utter.text = str;
        utter.rate = rate;   
        utter.voice = voice.voices[voice.index];
        setTalking(true);
        speechSynthesis.speak(utter);
    };

    const speedText = e => {
        setSpeech({...speech, speed:parseFloat(e.target.value)});
        if(speechSynthesis.speaking){            
            speechSynthesis.cancel(); 
            speakText(speech.text.substring(char), e.target.value);
        }
    }

    const playText = () => {      
        if(speechSynthesis.paused && speechSynthesis.speaking){
            return speechSynthesis.resume();
        }       
        if(speechSynthesis.speaking || !speech.text){
            return;
        } 
        speakText(speech.text,speech.speed);
    };

    const pauseText = () => {
        if(speechSynthesis.speaking){
            speechSynthesis.pause();
        }
    };

    const stopText = () => {
        speechSynthesis.cancel();
    };

    return(
        <Container>
            <Textarea disabled={talking} placeholder="Type and play" onChange={e => setSpeech({...speech, text:e.target.value})} value={speech.text}></Textarea>
            <Container2>
                <Button type="button" onClick={playText}>Play</Button>
                <Button type="button" onClick={pauseText}>Pause</Button>
                <Button type="button" onClick={stopText}>Stop</Button>
                <Label>Speed</Label>
                <Input type="number" min="0.1" max="3" step="0.1" defaultValue="1" onChange={speedText}></Input>                
            </Container2>  
            <Container2>
                <Label>Voice/Language:</Label>
                <Select onChange={e => setVoice({...voice, index:e.target.value})}>
                    {voice.voices.map((item,index) => <option value={index} key={item.name}>{item.name} {(item.lang)}</option>)}
                </Select>
            </Container2>                 
        </Container>
    );
}