//importing mongoose to create connection to atlas cloud
const mongoose = require("mongoose");

//connecting to cloud using URL in environment
const url=process.env.DBURL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//listening connection event
const dbcon = mongoose.connection;
dbcon.on("error", ()=>{console.log("Connection Error")});//error handling
dbcon.on("open", () => {
  console.log("DB CONNECTED");
});

//exporting database connection
module.exports = dbcon;
