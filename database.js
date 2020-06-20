var spicedPg = require("spiced-pg");
var dbUrl = process.env.DATABASE_URL || "postgres:lars:lars@localhost:5432/mywebsite";
var db = spicedPg(dbUrl);

exports.getArticles = () => {
    return db.query('SELECT * FROM articles;');
};

exports.searchArticles = search => {
    return db.query('SELECT * FROM articles WHERE tags ILIKE $1 OR topic ILIKE $1;',
    ['%'+search+'%']);
};

exports.lastArticle = () => {
    return db.query('SELECT url, topic FROM articles ORDER BY created_at DESC LIMIT 1;')
}

exports.getGames = () => {
    return db.query('SELECT * FROM games;');
};