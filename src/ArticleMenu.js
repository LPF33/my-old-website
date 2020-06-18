import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./ArticleMenu.css";
import axios from "./axios";
import {useDispatch, useSelector} from "react-redux";
import {getArticles} from "./action";

const Introduction = () => {
    return(
        <div id="introduction">
                <h1>All about learning coding</h1>
                <h2>This Website is under construction!</h2>
                <p>With this website I intend not only to introduce myself but also to test, record and repeat what I have learned.</p>
                <p>I treat this website like a notebook and playground.</p>
                <p>The design of this website is not finished yet, but I'd like to start to fill my website with projects, articles, news and whatever I'm up to!</p>
                <h2>So let's do it!</h2>
                <h2>Happy Coding!</h2>
                <Link to="/articles/bash">First article</Link>
        </div>
    )
};

const SearchBar = () => {

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {

        let ignore = false;

        (async () => {
            const result = await axios.get("/articles", {params: search});
            if(!ignore && result.data.success){ 
                dispatch(getArticles(result.data.users));
            }                                 
        })();

        return () => {
            ignore = true;
        };         

    },[search]);

    return (
        <div className="outerSearchFrame flex">
            <div className="innerSearchFrame flex">
                <input 
                    type="text" 
                    id="search" 
                    placeholder="Search my articles"
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
        </div>
    );
};

export default function ArticleMenu(){

    const [showArticles, setShowArticles] = useState(false);

    const foundArticles = useSelector(state => state.articles || "");

    return (
        <div>
            <div className="outerArticleButton flex">
                <div className="innerArticleButton flex">
                    <button type="button" id="showArticles" onClick={() => setShowArticles(showArticles ? false : true)}>Articles</button>
                </div>
            </div>

            {showArticles &&    <SearchBar />}
            
            <div id="articleFrame" className="outerArticleFrame flex">
                <div className="innerArticleFrame">
                    {!showArticles &&    <Introduction />}
                    {showArticles && foundArticles.length>0 && 
                    <ul>
                        {foundArticles.map((item,index) => <li key={index}>{item}</li>)}
                    </ul>}
                    {showArticles && !foundArticles.length && <div>No articles found!</div>}
                </div>
            </div>            
        </div>
    );
}