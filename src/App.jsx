import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Loans from "./Loans";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router";

function App() {
  let testimonials = {
    client1: {
      name: "Betcy Elie",
      rating: 5,
      review:
        "I had the pleasure of working with Sese Ntem, Home Lending Advisor, at Guzzo & Co Inc..The saying... third time is a charm... is definitely true for my clients (C & H) who were ready to call it quit until I suggested they take one last chance with Sese. They agree and I am happy to report that my clients closed escrow on February 5, 2025. Yippee! Thanks to Sese and his Senior Processor, Amber Van Assche; my buyers were able to get their loan funded. It was a pleasure working with both of them; I love their professionalism and their great communication (whether by phone, text or email) with both my clients and me. Sese, you assured me that you would deliver.. and yes indeed, you delivered 😊 I look forward to working with both Sese and Amber again, in the near future. Thanks guys; job well done!",
    },
    client2: {
      name: "Jayne Sigman",
      rating: 5,
      review:
        "Sese was amazing! Highly recommend him and Guzzo & Co for any of your purchase needs. Process was smooth and professional and timely. Thank you Sese for helping us get our home!",
    },
    client3: {
      name: "Emma E. Recher",
      rating: 5,
      review:
        "A powerhouse team for a not-so-easy case... Sese and his loan processor worked tirelessly to make sure everything went as smoothly as possible. Every obstacle raised by the underwriter was swiftly handled by the loan processor, leading to the final result: securing the loan. A company I highly recommend, both for their efficiency and their kindness.",
    },
    client4: {
      name: "Koru Kan",
      rating: 5,
      review:
        "Sese Ntem was a pleasure to work with. He helped us get a good rate, was super responsive (even during evenings and weekends) and helped us through the whole process with time to spare on our rushed closing. I would definitely recommend Sese Ntem and his team.",
    },
    client5: {
      name: "Emmanuelle R",
      rating: 5,
      review:
        "A powerhouse team for a not-so-easy case... Sese and his loan processor worked tirelessly to make sure everything went as smoothly as possible. Every obstacle raised by the underwriter was swiftly handled by the loan processor, leading to the final result: securing the loan. A company I highly recommend, both for their efficiency and their kindness",
    },
    client6: {
      name: "Kokouvi Komlanvi",
      rating: 5,
      review:
        "I wanted to take a moment to commend Sese NTEM and Rosa VASQUEZ for their exceptional service during the recent transaction. As a buyer's agent, I found their communication to be clear and timely, making the financing process smooth for my clients. They were responsive to inquiries and provided valuable guidance that eased any concerns. The competitive rates and straightforward terms were also appreciated by my clients. Overall, a great experience that I’d gladly recommend to future buyers!",
    },
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home testimonials={testimonials} />} />
        <Route path="/Loans" element={<Loans />} />
        <Route
          path="/Testimonials"
          element={<Testimonials testimonials={testimonials} />}
        />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
