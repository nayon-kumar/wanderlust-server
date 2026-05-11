const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const uri = process.env.MONGODB_URI;

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const db = client.db("wonderlast");
    const destinationCollection = db.collection("destinations");

    app.post("/destination", async (req, res) => {
      const newDestination = req.body;
      const result = await destinationCollection.insertOne(newDestination);
      res.json(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running fine");
});

app.listen(port, () => {
  console.log(`Server is running on: ${port}`);
});
