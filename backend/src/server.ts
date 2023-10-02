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
    origin(requestOrigin, callback) {
      const whitelist = [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://localhost:3003",        
      ];
      if (whitelist.indexOf(requestOrigin!) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

expressApp.get("/", (req, res) => res.status(200).json({ message: "Welcome" }));

expressApp.listen(4000, () =>
  console.log(`Server running on PORT 4000 with http://localhost:4000`)
);
