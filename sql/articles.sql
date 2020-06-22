DROP TABLE IF EXISTS articles;

CREATE TABLE articles(
    id SERIAL PRIMARY KEY,
    url VARCHAR NOT NULL,
    topic VARCHAR NOT NULL,
    tags VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Insert INTO articles (url,topic,tags,created_at) VALUES ('/articles/bash','Bash! Recap and still looking for a solution!','basic, commandline, bash','2020-06-18 10:00:00');
Insert INTO articles (url,topic,tags,created_at) VALUES ('/articles/typescript','TypeScript! Learn the basics!','basic, typescript, javascript','2020-06-21 10:00:00');