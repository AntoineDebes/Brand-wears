import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lp4tmds",
        "template_ftqxrvf",
        e.target,
        "user_rtFieJrXWmYBsXziuZjN2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div class="container__contactUs">
      <div class="cont1">
        <h1 class="cont1__header">We'd Love to hear from you</h1>
      </div>
      <div class="cont2">
        <h2 class="cont2__header"> Email Us: </h2>
        <form class="cont2__form" onSubmit={sendEmail}>
          {/* <p>Enter your full name:</p> */} <br />
          <input
            type="text"
            placeholder="Enter your full name "
            class="cont2__form__inputs"
            name="name"
          />
          {/* <p>Enter your email:</p> */} <br />
          <input
            type="text"
            placeholder="Enter your email"
            class="cont2__form__inputs"
            name="email"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            class="cont2__form__inputs"
            name="subject"
          />
          {/* <p>Message</p> */} <br />
          <textarea
            placeholder="Write your message here"
            cols="30"
            rows="10"
            class="cont2__form__textarea"
            name="message"
          ></textarea>
          <br />
          {/* <p>Send Button</p> */}
          <button class="cont2__form__button" type="submit" value="Send">
            Send
          </button>
        </form>
      </div>

      <div class="cont3">
        <h2 class="cont3__header">Locate Us: </h2>

        <h5 class="cont3__header">Directions on Google Maps: </h5>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d53051.004484706646!2d35.4513010660179!3d33.79455995852539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d33.794493599999996!2d35.4864064!4m0!5e0!3m2!1sen!2slb!4v1625565230404!5m2!1sen!2slb"
          width="500"
          height="450"
          allowfullscreen=""
          loading="lazy"
          class="cont3__iframe"
        >
          {" "}
        </iframe>
      </div>
    </div>
  );
}
