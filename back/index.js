import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import { db } from "./util/FirebaseInit.js";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const app = express();
const port = 8080;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(bodyParser.urlencoded({ extended: false }));

// Get all media
app.get("/media", async (req, res) => {
  const collectionRef = collection(db, "media");
  const collectionSnap = await getDocs(collectionRef);
  const docs = [];
  collectionSnap.forEach((doc) => {
    docs.push({ id: doc.id, ...doc.data() });
  });
  res.send(docs);
});

// Add a new entry
// req.body includes entry name, author, and type
app.post("/media", async (req, res) => {
  const mediaRef = collection(db, "media");
  const mediaBody = req.body;
  try {
    await addDoc(mediaRef, mediaBody);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
  res.status(200).send("Created entry");
});

// Delete an entry
// req.body is empty
app.delete("/media/:entryID", async (req, res) => {
  const entryID = req.params.entryID;
  try {
    const entryRef = doc(db, "media", entryID);
    await deleteDoc(entryRef);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
  res.status(200).send("Deleted entry");
});

// Edit an entry
// req.body includes all 3 of name, author, and type
app.put("/media/:entryID", async (req, res) => {
  const entryID = req.params.entryID;
  try {
    const entryRef = doc(db, "media", entryID);
    const entryBody = req.body;
    await setDoc(entryRef, entryBody);
  } catch (e) {
    console.error(e);
    res.status(500);
  }
  res.status(200).send("Updated entry");
});

function start() {
  app.listen(port, () => {
    console.log(`Started listening on http://localhost:${port}`);
  });
}

start();
