import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArticleMenu.css";
import axios from "./axios";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, tagSearch } from "./action";

const Introduction = () => {
    const serverUrl =
        process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8080"
            : "https://larspefe.herokuapp.com";

    const [lastArticle, setLastArticle] = useState("");

    useEffect(() => {
        (async () => {
            const getLastArticle = await axios.get(`${serverUrl}/lastArticle`);
            setLastArticle(getLastArticle.data.data);
        })();
    }, []);

    return (
        <div id="introduction">
            <h1>Welcome to my old Website!</h1>
            <p>This website needs a major update!</p>
            <p>
                This website was treated by me like a playground, where I can
                test, record and repeat what I have learnt.
            </p>
            <h1>Happy Coding!</h1>
            <h2>Enjoy your day!</h2>
        </div>
    );
};

const SearchBar = () => {
    const serverUrl =
        process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:8080"
            : "https://larspefe.herokuapp.com";

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const tagSearch = useSelector((state) => state.tagSearch);

    useEffect(() => {
        let ignore = false;

        (async () => {
            let result;
            if (!search) {
                result = await axios.get(`${serverUrl}/allarticles`);
            } else {
                result = await axios.get(
                    `${serverUrl}/searcharticles/${search}`
                );
            }

            if (!ignore && result.data.success) {
                dispatch(getArticles(result.data.data));
            } else {
                dispatch(getArticles(""));
            }
        })();

        return () => {
            ignore = true;
        };
    }, [search]);

    useEffect(() => {
        if (tagSearch) {
            setSearch(tagSearch);
        }
    }, [tagSearch]);

    return (
        <div className="outerSearchFrame flex">
            <div className="innerSearchFrame flex">
                <input
                    type="text"
                    id="search"
                    placeholder="Search my articles"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
            </div>
        </div>
    );
};

export default function ArticleMenu() {
    const dispatch = useDispatch();

    const [showArticles, setShowArticles] = useState(false);

    const foundArticles = useSelector((state) => state.articles || "");

    const startTagSearch = (tag) => {
        dispatch(tagSearch(tag));
    };

    const getDate = (date) => {
        const newDate = new Date(date);
        const year = newDate.getFullYear();
        const month = newDate.getMonth();
        const day = newDate.getDate();
        return `${day}.${month + 1}.${year}`;
    };

    return (
        <div>
            <div className="outerArticleButton flex">
                <div className="innerArticleButton flex">
                    <button
                        type="button"
                        id="showArticles"
                        onClick={() =>
                            setShowArticles(showArticles ? false : true)
                        }
                    >
                        Articles
                    </button>
                </div>
            </div>

            {showArticles && <SearchBar />}

            <div id="articleFrame" className="outerArticleFrame flex">
                <div className="innerArticleFrame">
                    {!showArticles && <Introduction />}
                    {showArticles && foundArticles.length > 0 && (
                        <ul>
                            {foundArticles
                                .sort((a, b) => {
                                    return (
                                        Date.parse(b.created_at) -
                                        Date.parse(a.created_at)
                                    );
                                })
                                .map((item, index) => (
                                    <li key={index} className="searchArticle">
                                        <Link
                                            to={item.url}
                                            className="linkArticles"
                                        >
                                            <h6>{getDate(item.created_at)}</h6>
                                            <h2>{item.topic}</h2>
                                        </Link>
                                        <div>
                                            {item.tags
                                                .split(",")
                                                .map((item, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() =>
                                                            startTagSearch(item)
                                                        }
                                                        className="tagButton"
                                                    >
                                                        {item}
                                                    </div>
                                                ))}
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    )}
                    {showArticles && !foundArticles.length && (
                        <div>No articles found!</div>
                    )}
                </div>
            </div>
        </div>
    );
}
