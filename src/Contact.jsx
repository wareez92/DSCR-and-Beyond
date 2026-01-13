import { useEffect, useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";
import { Link } from "react-router";
Link;

function Contact({contactForm, lang}) {
  const form = useRef();

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false); // or do something like navigate away, hide the message, etc.
      }, 2000);

      // Clean up the timer if the component unmounts early
      return () => clearTimeout(timer);
    }
  }, [success]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", form.current, {
        publicKey: "z4dEOIH8kbfv97tZ5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setSuccess(true);
  };

  if (success) {
    return (
      <>
        <h6>
          {contactForm[lang].h6}
        </h6>
      </>
    );
  }
  return (
    <>
      <h1 className="contact-heading">{contactForm[lang].h1}</h1>

      <div className="contact">
        <form ref={form} onSubmit={sendEmail}>
          <p>
            <label>{contactForm[lang].name}</label>
            <br />
            <input type="text" name="user_name" placeholder="John Smith" />
          </p>
          <p>
            <label>{contactForm[lang].email}</label>
            <br />
            <input
              type="email"
              name="user_email"
              placeholder="johnsmith@gmail.com"
            />
          </p>
          <p>
            <label>{contactForm[lang].message}</label>
            <br />
            <textarea name="message" />
          </p>
          <button type="submit" class="form-button">
            {contactForm[lang].send}
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
