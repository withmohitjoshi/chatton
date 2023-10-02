import admin from "firebase-admin";
import express from "express";
import cors from "cors";
const expressApp = express();

admin.initializeApp({
  credential: admin.credential.cert(require("../firebase-admin-key.json")),
  databaseURL: "https://chatton-4ff77-default-rtdb.firebaseio.com",
});

expressApp.use(express.json());
expressApp.use(
  cors({
    origin: "http://localhost:4000",
  })
);

expressApp.listen(4000, () =>
  console.log(`Server running on PORT 4000 with http://localhost:4000`)
);
