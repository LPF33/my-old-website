var spicedPg = require("spiced-pg");
var dbUrl = process.env.DATABASE_URL || "postgres:lars:lars@localhost:5432/mywebsite";
var db = spicedPg(dbUrl);

exports.getArticles = () => {
    return db.query('SELECT * FROM articles;');
}

exports.searchArticles = search => {
    return db.query('SELECT * FROM articles WHERE tags ILIKE $1;',
    ['%'+search+'%']);
}