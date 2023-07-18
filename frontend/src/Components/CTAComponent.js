import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { checkmarkCircle } from "ionicons/icons";
import { useGoogleLogin } from "@react-oauth/google";
import { ReactDialogBox } from "react-js-dialog-box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import profile from "../img/Profile.jpeg";

import "./CTAComponent.css";
import axios from "axios";

export default function CTAComponent() {
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(true);
  const [responsetext, setResponseText] = useState("");

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "marketingresultsbusinesss@gmail.com",
  //     pass: "MarketingResults@13",
  //   },
  // });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrandName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const renderData = () => {
    // Calculate end time by adding 15 minutes to the start time
    const startDateTime = new Date(`${date}T${time}`);
    const endDateTime = new Date(startDateTime.getTime() + 15 * 60000); // 15 minutes in milliseconds

    // Format start and end time as strings in ISO 8601 format
    const startTime = startDateTime.toISOString();
    const endTime = endDateTime.toISOString();

    const formData = { brandName, email, startTime, endTime, message };

    return formData;
  };

  const logIn = useGoogleLogin({
    // Calculate end time by adding 15 minutes to the start time
    onSuccess: async (tokenResponse) => {
      const formData = renderData();
      console.log(formData);
      console.log(tokenResponse.access_token);
      const requestBody = { tokenResponse, ...formData };
      setLoad(true);
      const response = await axios.post(
        "http://localhost:8000/api/schedule",
        requestBody
      );
      setLoad(false);
      setResponseText(
        "Meeting with us has been scheduled Successfully. Please check your calender."
      );
      if (load) {
        setOpen(true);
      }
      console.log(open);
      if (response.data == "Fail") {
        setOpen(true);
        setResponseText("Failed to Schedule Call.Please try again");
      }
    },
    onError: () => {
      setResponseText("Failed to Schedule Call.Please try again");
    },
  });

  return (
    <section className="section-cta" id="section-cta">
      <div className="cta-container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="cta-secondary">Get in touch with Us</h2>
            <p className="cta-text">
              Ready to take your digital marketing to the next level? Submit
              your details below. Don't miss out on the opportunity to unleash
              your brand's true potential. Submit your details now!
            </p>
            <form className="cta-form" action="#" onSubmit={logIn}>
              <div>
                <label htmlFor="brand-name">Brand Name</label>
                <input
                  id="brand-name"
                  type="text"
                  placeholder="Growth Hub"
                  onChange={handleBrandChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  onChange={handleEmailChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="date">Schedule</label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="time">Schedule</label>
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={handleTimeChange}
                  required
                />
              </div>

              <label htmlFor="message">Enter you message or inquiry</label>
              <textarea
                id="message"
                type="te"
                placeholder="Your message holds the key to unlocking your digital success.."
                onChange={handleMessageChange}
                required
              ></textarea>

              <button className="btn btn--form">
                {load ? "Schedule a Call" : " Call Scheduled"}
              </button>
            </form>
          </div>
          <div className="cta-details-box">
            <div className="cta-img">
              <img
                src={profile}
                className="cta-profile-img"
                alt="Profile Image of Marketing Head"
              />
            </div>
            <p className="pink-text schedule">
              SCHEDULE YOUR CALL WITH LORENZO
            </p>
            <h2 className="cta-secondary">Free 15-Minute Demo Call</h2>
            <p className="cta-description one">
              By the end of this Audit call, you will have a clear understanding
              of the next steps you can take for your business to start
              generating consistent and reliable results online with Funnels &
              Paid Advertising.{" "}
            </p>
            <p className="cta-description two">
              Find a time on Lorenzo's calendar to schedule your call today and
              we look forward to speaking to you soon!
            </p>
            <p className="pink-text this-cta-section">
              THIS AUDIT CALL IS PERFECT FOR:
            </p>
            <ul className="audit-list">
              <li className="audit-list-item">
                <div className="icon">
                  <IonIcon icon={checkmarkCircle} className="check-mark-icon" />
                </div>
                <p className="audit-list-description">
                  Businesses looking to convert their current website into a
                  <strong> high quality & streamlined funnel format.</strong>
                </p>
              </li>
              <li className="audit-list-item">
                <div className="icon">
                  <IonIcon icon={checkmarkCircle} className="check-mark-icon" />
                </div>
                <p className="audit-list-description">
                  ​Businesses looking to take their offline business{" "}
                  <strong>online.</strong>
                </p>
              </li>
              <li className="audit-list-item">
                <div className="icon">
                  <IonIcon icon={checkmarkCircle} className="check-mark-icon" />
                </div>
                <p className="audit-list-description">
                  ​Businesses looking to understand their increased
                  <strong> revenue potential</strong> with funnels & conversion
                  rate optimization.
                </p>
              </li>
              <li className="audit-list-item">
                <div className="icon">
                  <IonIcon icon={checkmarkCircle} className="check-mark-icon" />
                </div>
                <p className="audit-list-description">
                  ​Businesses looking to{" "}
                  <strong>
                    maximize their conversion rates & average order value.
                  </strong>
                </p>
              </li>
              <li className="audit-list-item">
                <div className="icon">
                  <IonIcon icon={checkmarkCircle} className="check-mark-icon" />
                </div>
                <p className="audit-list-description">
                  ​Businesses looking for a reliable agency that can
                  <strong> make their company a priority.</strong>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Dialog maxWidth="80%" open={open} onClose={handleClose}>
          <DialogTitle id="responsive-dialog-title">
            {"Calender Invitation Status"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>{responsetext}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </section>
  );
}
