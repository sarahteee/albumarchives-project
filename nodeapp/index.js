const express = require("express"); //include express in this app
//const path = require("path"); //module to help with file paths
const { MongoClient } = require("mongodb"); //import MongoClient from mongodb
const cors = require("cors");
const app = express(); //create an Express app
const port = process.env.PORT || "4000";

//DB values
const dbUrl = "mongodb://localhost:27017/albumarchive";
const client = new MongoClient(dbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //need this line to be able to receive/parse JSON from request

//allow requests from all servers
app.use(cors({
  origin: "*"
}));

//API endpoints

/*
 * returns: an array of menu links
 */
app.get("/api/albums", async (request, response) => {
  let links = await getAlbums();
  response.json(links); //send JSON object with appropriate JSON headers
});
//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}⁠`);
});


//MongoDB functions
async function connection() {
  await client.connect();
  db = client.db("albumarchive"); //select testdb database
  return db;
}
/* Async function to retrieve all albums documents from collection. */
async function getAlbums() {
  db = await connection(); //await result of connection() and store the returned db
  var results = db.collection("albums").find({}); //{} as the query means no filter, so select all
  res = await results.toArray();
  return res;
}

