import { useRef, useState } from "react";
import emailjs, { send } from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [sucess, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "contact_form", form.current, {
        publicKey: "oEbHXx67VLh8Cpf1F",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

      setSuccess()
  };

  return (
    <>
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <p>
          <label>Name</label>
          <br/>
          <input type="text" name="user_name" placeholder="John Smith" />
        </p>
        <p>
          <label>Email</label>
          <br/>
          <input type="email" name="user_email" placeholder="johnsmith@gmail.com" />
        </p>
        <p>
          <label>Message</label>
          <br/>
          <textarea name="message" />
        </p>
        <input type="submit" value="Send" />
      </form>
    </>
  );
}

export default Contact;
