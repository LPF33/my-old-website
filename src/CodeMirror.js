import React, { useState, useEffect, useRef } from "react";
import "./CodeMirror.css";

//Codemirror
//https://www.npmjs.com/package/react-codemirror2
import { Controlled as CodeMirror } from "react-codemirror2";
//https://codemirror.net/doc/manual.html#usage
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

//Socket.io
import * as io from "socket.io-client";

const socket = io.connect("/");

function CodeMirrorComponent() {
    const [state, setState] = useState({ id: "", html: "", css: "", js: "" });

    const iFrameRef = useRef();

    const codeMirrorOptions = {
        theme: "material",
        lineNumbers: true,
        scrollbarStyle: null,
        lineWrapping: true,
    };

    useEffect(() => {
        socket.on("connect", () => {
            setState({ ...state, id: socket.id });
        });

        socket.on("send-data", (message) => {
            setState((prev) => ({
                ...prev,
                html: message.html,
                css: message.css,
                js: message.js,
            }));
        });
    }, []);

    const showCode = () => {
        const iframe = iFrameRef.current;
        const document = iframe.contentDocument;
        const documentContents = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
              ${state.css}
            </style>
          </head>
          <body>
            ${state.html}

            <script type="text/javascript">
              ${state.js}
            </script>
          </body>
          </html>
        `;

        document.open();
        document.write(documentContents);
        document.close();
    };

    useEffect(() => {
        showCode();
    }, [state.html, state.css, state.js]);

    return (
        <div>
            <section className="playground">
                <div className="code-editor html-code">
                    <div className="editor-header">HTML</div>
                    <CodeMirror
                        value={state.html}
                        options={{
                            mode: "htmlmixed",
                            ...codeMirrorOptions,
                        }}
                        onBeforeChange={(editor, data, html) => {
                            setState({ ...state, html });
                            socket.emit("data", { ...state, html });
                        }}
                    />
                </div>
                <div className="code-editor css-code">
                    <div className="editor-header">CSS</div>
                    <CodeMirror
                        value={state.css}
                        options={{
                            mode: "css",
                            ...codeMirrorOptions,
                        }}
                        onBeforeChange={(editor, data, css) => {
                            setState({ ...state, css });
                            socket.emit("data", { ...state, css });
                        }}
                    />
                </div>
                <div className="code-editor js-code">
                    <div className="editor-header">JavaScript</div>
                    <CodeMirror
                        value={state.js}
                        options={{
                            mode: "javascript",
                            ...codeMirrorOptions,
                        }}
                        onBeforeChange={(editor, data, js) => {
                            setState({ ...state, js });
                            socket.emit("data", { ...state, js });
                        }}
                    />
                </div>
            </section>
            <section className="result">
                <iframe title="result" className="iframe" ref={iFrameRef} />
            </section>
        </div>
    );
}

export default CodeMirrorComponent;
