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
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  const testimonials = [
    {
      name: "Betcy Elie",
      rating: 5,
      review:
        "I had the pleasure of working with Sese Ntem, Home Lending Advisor, at Guzzo & Co Inc..The saying... third time is a charm... is definitely true for my clients (C & H) who were ready to call it quit until I suggested they take one last chance with Sese. They agree and I am happy to report that my clients closed escrow on February 5, 2025. Yippee! Thanks to Sese and his Senior Processor, Amber Van Assche; my buyers were able to get their loan funded. It was a pleasure working with both of them; I love their professionalism and their great communication (whether by phone, text or email) with both my clients and me. Sese, you assured me that you would deliver.. and yes indeed, you delivered 😊 I look forward to working with both Sese and Amber again, in the near future. Thanks guys; job well done!",
    },
    {
      name: "Jayne Sigman",
      rating: 5,
      review:
        "Sese was amazing! Highly recommend him and Guzzo & Co for any of your purchase needs. Process was smooth and professional and timely. Thank you Sese for helping us get our home!",
    },
    {
      name: "Emma E. Recher",
      rating: 5,
      review:
        "A powerhouse team for a not-so-easy case... Sese and his loan processor worked tirelessly to make sure everything went as smoothly as possible. Every obstacle raised by the underwriter was swiftly handled by the loan processor, leading to the final result: securing the loan. A company I highly recommend, both for their efficiency and their kindness.",
    },
    {
      name: "Koru Kan",
      rating: 5,
      review:
        "Sese Ntem was a pleasure to work with. He helped us get a good rate, was super responsive (even during evenings and weekends) and helped us through the whole process with time to spare on our rushed closing. I would definitely recommend Sese Ntem and his team.",
    },
    {
      name: "Emmanuelle R",
      rating: 5,
      review:
        "A powerhouse team for a not-so-easy case... Sese and his loan processor worked tirelessly to make sure everything went as smoothly as possible. Every obstacle raised by the underwriter was swiftly handled by the loan processor, leading to the final result: securing the loan. A company I highly recommend, both for their efficiency and their kindness",
    },
    {
      name: "Kokouvi Komlanvi",
      rating: 5,
      review:
        "I wanted to take a moment to commend Sese NTEM and Rosa VASQUEZ for their exceptional service during the recent transaction. As a buyer's agent, I found their communication to be clear and timely, making the financing process smooth for my clients. They were responsive to inquiries and provided valuable guidance that eased any concerns. The competitive rates and straightforward terms were also appreciated by my clients. Overall, a great experience that I’d gladly recommend to future buyers!",
    },
  ];

  const loanPrograms = [
    {
      name: "DSCR 1-4 Unit",
      icon: "null",
      keyFeatures: [
        "No Personal Income Verification",
        "Ideal for Real Estate Investors",
        "Covers 1–4 Unit Properties",
        "Fast and Streamlined Approval",
      ],
      description:
        "A DSCR (Debt Service Coverage Ratio) loan is designed for real estate investors purchasing or refinancing rental properties with 1–4 units. Instead of relying on personal income, these loans focus on the property’s cash flow to qualify. If the rental income covers the property's monthly debt payments, you may qualify—even without traditional income documentation. DSCR loans offer a flexible, streamlined solution for building your investment portfolio.",
    },
    {
      name: "DSCR 5-8 Unit",
      icon: "null",
      keyFeatures: [
        "Income-Based Qualification",
        "No Tax Returns or Employment Verification",
        "Supports Mid-Sized Residential Assets",
        "Simplified & Efficient Process",
      ],
      description:
        "DSCR (Debt Service Coverage Ratio) loans for 5–8 unit properties are designed for investors looking to finance mid-sized residential properties. These loans rely on the property's rental income to qualify, rather than personal income or tax returns. Whether you're expanding your portfolio or refinancing existing assets, DSCR loans offer a flexible, cash-flow-based solution with a streamlined approval process.",
    },
    {
      name: "DSCR Alt Doc",
      icon: "null",
      keyFeatures: [
        "Alternative Documentation Accepted",
        "Ideal for Self-Employed Investors",
        "Covers 1–4 Unit Properties",
        "Fast, Flexible Financing",
      ],
      description:
        "DSCR Alt Doc (Alternative Documentation) loans are designed for real estate investors who may not qualify through traditional income documentation. These loans focus on the property's rental income and overall cash flow, not the borrower’s tax returns or employment history. By using alternative forms of documentation, investors can access flexible financing options for both residential and small multifamily properties.",
    },
    {
      name: "DSCR ITIN",
      icon: "null",
      keyFeatures: [
        "No Social Security Number Required",
        "Property Income-Based Qualification",
        "Supports 1–8 Unit Investment Properties",
        "Simplified Loan Process",
      ],
      description:
        "DSCR ITIN loans are tailored for real estate investors who do not have a Social Security Number but hold an ITIN (Individual Taxpayer Identification Number). These loans use the property's rental income—not the borrower's personal income—to determine eligibility. With no need for traditional income documentation, DSCR ITIN loans provide a streamlined path to property ownership for non-U.S. citizens investing in 1–8 unit residential properties.",
    },
    {
      name: "DSCR Foreign National",
      icon: "null",
      keyFeatures: [
        "No Social Security Number Required",
        "Property Income-Based Qualification",
        "Supports 1–8 Unit Investment Properties",
        "Simplified Loan Process",
      ],
      description:
        "DSCR ITIN loans are tailored for real estate investors who do not have a Social Security Number but hold an ITIN (Individual Taxpayer Identification Number). These loans use the property's rental income—not the borrower's personal income—to determine eligibility. With no need for traditional income documentation, DSCR ITIN loans provide a streamlined path to property ownership for non-U.S. citizens investing in 1–8 unit residential properties.",
    },
  ];

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
