const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.books = require("./book.model.js");
module.exports = db;