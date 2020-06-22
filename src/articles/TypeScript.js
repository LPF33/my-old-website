import React, {useState, useEffect} from "react";
import Headline, {HighlightCommand} from "./ArticleComponents";
import {useSelector} from "react-redux";

export default function Bash(){

    const topic = "TypeScript! Learn the basics!";
    const date = "21.06.2020";
    const tags = ["basic", "typescript", "javascript"];

    const [lightMode, setLightMode] = useState("moonMode");
    const [colorLightMode, setColorLightMode] = useState("colorMoonMode");
    const [lightCode, setLightCode] = useState("codeMoon");


    const whichLightMode = useSelector(state => state.lightMode);

    useEffect(() => {
        if(whichLightMode){
            setLightMode(whichLightMode==="sun" ? "sunMode" : "moonMode");
            setColorLightMode(whichLightMode==="sun" ? "colorSunMode" : "colorMoonMode")
            setLightCode(whichLightMode==="sun" ? "codeSun" : "codeMoon");
        }        
    },[whichLightMode]);

    return(
        <div className={`articlePage ${lightMode}`}>
            <Headline topic={topic} date={date} tags={tags}/>
            <div className="paragraph">
                <p className={colorLightMode}>
                    TypeScript is a programming language, which is based upon JavaScript and extends JavaScript with some
                    new Features, as the word says it enables a strong typification. It was developed by Microsoft.
                    First of all, we have to install the TypeScript-Compiler, (npm install -g typescript), 
                    so we can transpile TypeScript to JavaScript and now the file runs in any browser.                    
                    The command for the compiling is: 
                </p> 
                <HighlightCommand value="tsc filename.ts"/>
                <p className={colorLightMode}>
                    TypeScript has the same basic datatypes: boolean, string, number, Object, null, undefined, symbol, bigint.
                    And some more: Tuple, Enum, Any, Void, Never!
                </p>
                <HighlightCommand value="type annotation"/>
                <p className={colorLightMode}>
                    You have the option to assign a datatype like this:<br/>
                    <div className={`${lightCode} code`}>
                        let a: number = 1000;<br/>
                        let a: boolean = true;<br/>
                        let a: string = "okay";<br/>
                    </div>                    
                    For an array:<br/>
                    <div className={`${lightCode} code`}>
                        let a: string[ ] = ["1","2","3"];<br/>
                        let a: Array&lt;number&gt; = ["1","2","3"];<br/>
                    </div>                    
                    With <em>any</em> you can define different types or if you don't know the type:<br/>
                    <div className={`${lightCode} code`}>let a: Array&lt;any&gt; = ["string", 12, true]</div>
                </p>
                <HighlightCommand value="enum"/>
                <p className={colorLightMode}>
                    In JavaScript you would do something like this:<br></br>
                    <div className={`${lightCode} code`}>const numZero = 0;<br></br>
                        const numOne = 1;<br></br>
                        const numTwo = 2;
                    </div>
                    In TypeScript you can just write:<br></br>
                    <div className={`${lightCode} code`}>
                        <em>enum</em> num = &#123;Zero,One,Two&#125;;
                    </div>
                    <em>enum</em> begins numbering the values starting at 0. So you could change it in this way:<br></br>
                    <div className={`${lightCode} code`}>
                        <em>enum</em> num = &#123;Zero=2,One,Two&#125;; or <em>enum</em> num = &#123;Zero=2,One=4,Two=6&#125;;<br></br>
                    </div>
                    Now you can declare the values of enum to variables: const firstNum = num.Zero;<br></br>
                    <strong>Aside:</strong> Just to get a clue, how enum TypeScript for this example is converted to JavaScript:
                    <div className={`${lightCode} code`}>
                        var num;<br></br>
                        <span>(function (num) &#123;</span><br></br>
                        <span className="pre-wrap">      num[num["Zero"] = 0] = "Zero";</span><br></br>
                        <span className="pre-wrap">      num[num["One"] = 1] = "One";</span><br></br>
                        <span className="pre-wrap">      num[num["Two"] = 2] = "Two";</span><br></br>
                            &#125;)(num || (num = &#123; &#125;));<br></br>
                        <br></br>
                        var firstNum = num.Zero;
                    </div>
                </p>
                <HighlightCommand value="functions"/>
                <p className={colorLightMode}>
                    In TypeScript you can specify the datatypes for the parameter, for the return statement and for the function itself.<br></br>
                    Example: <br></br><br></br>
                    <div className={`${lightCode} code`}>
                        <code>
                            <span>const check = (a : number, b : number):number =&gt; return a*b;</span><br></br>
                            <span>check("3",3) will throw the following error:</span><br></br>
                            <span>Argument of type "3" is not assignable to parameter of type 'number'.</span>
                        </code>
                    </div>
                </p>
                <HighlightCommand value="Interface"/>
                <p className={colorLightMode}>
                    With interfaces you can declare the shape or structure of Objects.<br></br>
                    <div className={`${lightCode} code`}>
                        <span>interface Dog &#123;</span><br></br>
                        <span className="pre-wrap">     dogtype: string;</span><br></br>
                        <span className="pre-wrap">     born: number;</span><br></br>
                        <span>&#125;</span>
                    </div>
                    Now, if we want to make a valid Dog Object, we write:<br></br> 
                    <div className={`${lightCode} code`}>
                        <span>const uwe: Dog = &#123;</span><br></br>
                        <span className="pre-wrap">     dogtype: "Dalamatiner";</span><br></br>
                        <span className="pre-wrap">     born: 2018;</span><br></br>
                        <span>&#125;</span>
                    </div>
                    With the word <strong>extends</strong> it is possible to extend the Interface and with <strong>?</strong> to give
                    an optional property:<br></br>
                    <div className={`${lightCode} code`}>
                        <span>interface DogCastrated extends Dog&#123;</span><br></br>
                        <span className="pre-wrap">     castrated?: boolean;</span><br></br>
                        <span>&#125;</span>
                    </div>
                    With Interfaces it is also possible to control the requirements of a function parameter:<br></br> 
                    <div className={`${lightCode} code`}>const petsAge = (pet:Dog) =&gt; 2020-pet.born;</div>
                </p>
                <HighlightCommand value="Classes"/>
                <p className={colorLightMode}>
                    With classes you can generate new instances, which defines a new Object, "instance of this class".<br></br>
                    <div className={`${lightCode} code`}>
                        class Square &#123;<br></br>
                        <span className="pre-wrap">     width: number (declare before the constructor, not with this!</span><br></br>
                        <span className="pre-wrap">     constructor(width)&#123;</span><br></br>
                        <span className="pre-wrap">             this.width = width</span><br></br>
                        <span className="pre-wrap">     &#125;</span><br></br>
                        <span className="pre-wrap">     area()&#123;</span><br></br>
                        <span className="pre-wrap">             return this.width * this.width</span><br></br>
                        <span className="pre-wrap">     &#125;</span><br></br>
                        &#125;
                        <br></br>
                        const square1 = new Square(2);
                    </div>
                    Combine this with Interfaces:
                    <div className={`${lightCode} code`}>
                        interface SquareW &#123;<br></br>
                        <span className="pre-wrap">     width: number </span><br></br>
                        &#125;
                        <br></br>
                        class Square implements SquareW &#123;<br></br>
                        <span className="pre-wrap">     constructor(width)&#123;</span><br></br>
                        <span className="pre-wrap">             this.width = width</span><br></br>
                        <span className="pre-wrap">     &#125;</span><br></br>
                        <span className="pre-wrap">     area()&#123;</span><br></br>
                        <span className="pre-wrap">             return this.width * this.width</span><br></br>
                        <span className="pre-wrap">     &#125;</span><br></br>
                        &#125;
                        <br></br>
                        const square2 = new Square(2);
                    </div>
                    The class has to have all properties like the interface.
                </p>
            </div>            
        </div>
    );
}