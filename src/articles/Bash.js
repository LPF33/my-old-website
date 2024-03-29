import React, { useState, useEffect } from "react";
import Headline, { HighlightCommand } from "./ArticleComponents";
import { useSelector } from "react-redux";

export default function Bash() {
    const topic = "Bash! Recap and still looking for a solution!";
    const date = "18.06.2020";
    const tags = ["basic", "commandline", "bash"];

    const [lightMode, setLightMode] = useState("moonMode");
    const [colorLightMode, setColorLightMode] = useState("colorMoonMode");

    const whichLightMode = useSelector((state) => state.lightMode);

    useEffect(() => {
        if (whichLightMode) {
            setLightMode(whichLightMode === "sun" ? "sunMode" : "moonMode");
            setColorLightMode(
                whichLightMode === "sun" ? "colorSunMode" : "colorMoonMode"
            );
        }
    }, [whichLightMode]);

    return (
        <div className={`articlePage ${lightMode}`}>
            <Headline topic={topic} date={date} tags={tags} />
            <div className="paragraph">
                <p className={colorLightMode}>
                    My first topic is about <strong>Bash scripting</strong>. One
                    of the first things I've learnt in the bootcamp. I have
                    never worked before with the command line, I have never
                    really interacted with the operating system 👀, that's what
                    it is about: a Command-line interface (CLI). Of course, I
                    use it to commit and push code to Github and so I just want
                    to scratch on the surface, for now! Here I introduce the
                    most important shortcuts, how to access and move files and
                    so on.
                </p>
                <HighlightCommand value="pwd" />
                <p className={colorLightMode}>
                    Where am I located? This command shows the current working
                    directory (print working directory)
                </p>
                <HighlightCommand value="ls" />
                <p className={colorLightMode}>
                    List the contents of the directory, files, pictures etc. In
                    combination with <em>-a</em> you see all hidden files and
                    with <em>-l</em> also the details of the files. You can
                    chain it to <em>-la</em>.
                </p>
                <HighlightCommand value="cd" />
                <p className={colorLightMode}>
                    Very important to know is the command to{" "}
                    <em>change directory</em>.<br />
                    <strong>cd ~</strong> is shorthand for going back to your
                    home directory.
                    <br />
                    <strong>cd ..</strong> stands for: "Go up to the parent
                    directory".
                    <br />
                    <strong>cd (absolute path)</strong>, than you go to your
                    preferred directory
                    <br />
                    <strong>cd ./anyfile</strong> "Go from your current
                    directory to a child file etc. (relative path)".
                    <br />
                    <strong>cd ../..</strong> With this you jump 2 levels up.
                    <br />
                </p>
                <HighlightCommand value="clear" />
                <p className={colorLightMode}>clear the terminal screen</p>
                <HighlightCommand value="man" />
                <p className={colorLightMode}>
                    If you want to know, what a command means, than get the{" "}
                    <em>man(ual)</em>. Type man before the unknown command and
                    you get an explanation.
                </p>
                <HighlightCommand value="touch" />
                <p className={colorLightMode}>
                    Okay, we start now to play around with files. With the
                    command <em>touch</em> you create a new file and specify the
                    name and type, like: touch hurra.js
                </p>
                <HighlightCommand value="cat" />
                <p className={colorLightMode}>
                    <strong>cat file </strong>Read a file, the content will be
                    printed to the terminal.
                    <br />
                    <strong>cat file file2</strong> That means:{" "}
                    <em>Concatenate files, here the two files.</em>
                    <br />
                    <strong>cat &gt;&gt; file</strong> : Everything you type now
                    in the terminal, will be saved in the file.
                    <br />
                    <strong>cat &gt; file</strong> : Everything you type now in
                    the terminal, will be saved in the file, but overwrite
                    everything in the file.
                </p>
                <HighlightCommand value="echo" />
                <p className={colorLightMode}>
                    <strong>echo Here I am!</strong> Prints "Here I am" to the
                    terminal.
                    <br />
                    <strong>echo Here I am! &gt; file</strong> Writes the text
                    to a file.
                </p>
                <HighlightCommand value="nano" />
                <p className={colorLightMode}>
                    With the command <em>nano</em> and a file, a minimalistic
                    text editor opens, which helps you to edit the file, if your
                    up to.
                </p>
                <HighlightCommand value="mkdir" />
                <p className={colorLightMode}>
                    With this command you create a new, empty directory. (
                    <em>make directory</em>)
                </p>
                <HighlightCommand value="rmdir" />
                <p className={colorLightMode}>
                    Delete empty directories (<em>remove directory</em>)
                </p>
                <HighlightCommand value="rm" />
                <p className={colorLightMode}>
                    Delete a file or directory (<em>remove</em>)
                </p>
                <HighlightCommand value="mv" />
                <p className={colorLightMode}>
                    <em>Move</em> a file to a different directory{" "}
                    <strong>mv hurra.js /mnt/c/Users/whereever</strong> or
                    rename a file: <strong>mv hurra.js nohurra.js</strong>
                </p>
                <HighlightCommand value="cp" />
                <p className={colorLightMode}>
                    <em>Copy</em> a file: <strong>cp hurra.js hurry.js</strong>
                </p>
                <HighlightCommand value="cp -r" />
                <p className={colorLightMode}>
                    <em>Copy</em> a folder: <strong>cp -r first second</strong>
                </p>
                <HighlightCommand value="code" />
                <p className={colorLightMode}>
                    Open a file in Visual Studio Code
                </p>
                <HighlightCommand value="open" />
                <p className={colorLightMode}>
                    <em>Open</em> a file: <strong>open &lt;filename&gt;</strong>
                    <em>Open</em> a folder:{" "}
                    <strong>open &lt;folder name&gt; or open .</strong>
                </p>
                <HighlightCommand value="gzip" />
                <p className={colorLightMode}>
                    <em>Compress</em> a file:{" "}
                    <strong>gzip -c filename &gt; filename.gz</strong>
                </p>
                <HighlightCommand value="grep" />
                <p className={colorLightMode}>
                    <em>g(lobal)r(egular)e(x)p(ression)</em>. With this you can
                    do a global search for a specified file. I will rise this
                    topic in a next article again, when I recap JavaScript. With
                    a string pattern you can search for a file.
                    <strong>e.g.: * . [p]??</strong>, would return all files
                    that have 3 letters as extension and start with a lowercase
                    p.
                </p>
                <HighlightCommand value="history" />
                <p className={colorLightMode}>
                    Very helpful to see all past commands.
                </p>
                <HighlightCommand value="alias" />
                <p className={colorLightMode}>
                    With this you can make your own abbrevations:{" "}
                    <strong>alias alias_name="command to run"</strong>
                    <em>alias project="cd /mnt/c/Users/currentproject</em>. If
                    you type now project into the terminal, you will be directed
                    to the directory /mnt/c/Users/currentproject.
                </p>
                <HighlightCommand value="open Problem ???" />
                <p className={colorLightMode}>
                    I have still an open problem, I didn't find the solution.
                    All suggestions and solutions in the internet didn't help. I
                    would like to change the home directory, cd ~. I know I can
                    change it in the bashrc file, but this will not really
                    change the home directory. I will make an update when I find
                    the solution. I found also out that you can change it with{" "}
                    <em>sudo usermod</em>, but with that the user must be logged
                    out 🤦‍♂️. My bootcamp-teacher knows it ...
                </p>
                <br />
                <p className={colorLightMode}>
                    Cursor/arrow up shows you your last typed commands. You can
                    do so much more: Loops, conditions, declare variables ...!
                    But later! Maybe!{" "}
                    <strong>That's it for today with BASH!</strong>
                </p>
            </div>
        </div>
    );
}
