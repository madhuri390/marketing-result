import dotenv from "dotenv";
dotenv.config({});

import express from "express";
import { google } from "googleapis";
import { v4 as uuid } from "uuid";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "/public")));

// Add a catch-all route to serve the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://marketingresults.netlify.app/"
  );
  //res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your client's origin URL
  res.header("Access-Control-Allow-Methods", "GET,POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
const PORT = process.env.NODE_ENV || 8000;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

const scopes = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.events",
];

app.post("/api/schedule", async (req, res) => {
  console.log("Request body " + req.body.brandName);
  const calendar = google.calendar({
    version: "v3",
    auth: process.env.API_KEY,
  });
  oauth2Client.setCredentials(req.body.tokenResponse);
  try {
    await calendar.events.insert({
      calendarId: "primary",
      auth: oauth2Client,
      conferenceDataVersion: 1,
      requestBody: {
        summary: `Let's discuss next steps for ${req.body.brandName}`,
        description: ` Marketing Results would like to invite you to a meeting to discuss the marketing services we can offer for your ${req.body.brandName}. This meeting will also provide an opportunity for us to understand your requirements and expectations in detail.\nMessage or Inquiry from ${req.body.brandName} : \n${req.body.message}`,
        start: {
          dateTime: req.body.startTime,
          timeZone: "Asia/Kolkata",
        },
        end: {
          dateTime: req.body.endTime,
          timeZone: "Asia/Kolkata",
        },
        attendees: [
          { email: "marketingresultsbusinesss@gmail.com" },
          { email: req.body.email },
        ],
        conferenceData: {
          createRequest: {
            requestId: uuid(),
          },
        },
      },
    });
    res.send("Done");
  } catch (error) {
    res.send("Fail");
  }
});

app.get("/", (req, res) => {
  res.send("Hi from the server");
});
app.listen(PORT, () => {
  console.log("Server started on Port ", PORT);
  console.log("Redirect uri " + REDIRECT_URL);
  console.log("Reditect uri from env " + process.env.REDIRECT_URL);
});
