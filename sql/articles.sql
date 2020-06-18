DROP TABLE IF EXISTS articles;

CREATE TABLE articles(
    id SERIAL PRIMARY KEY,
    url VARCHAR NOT NULL,
    topic VARCHAR NOT NULL,
    tags VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Insert INTO articles (url,topic,tags) VALUES ('/articles/bash','Bash! Recap and still looking for a solution!','basic, commandline, bash');
Insert INTO articles (url,topic,tags) VALUES ('/articles/git','Git! Every day use! Big benefit for handling projects!','basic, git');
Insert INTO articles (url,topic,tags) VALUES ('/articles/git','JavaScript!','basic, javascript');
Insert INTO articles (url,topic,tags) VALUES ('/articles/git','JavaScript! Update','basic, javascript');
Insert INTO articles (url,topic,tags) VALUES ('/articles/git','JavaScript and Typescript','basic, javascript, typescript');