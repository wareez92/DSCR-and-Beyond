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
import SingleLoan from "./SingleLoan";
import SinglePortfolio from "./SinglePortfolio";
import Articles from "./Articles";
import About from "./About";

function App() {
  const testimonials = [
    {
      name: "Jayne Sigman",
      rating: 5,
      review:
        "Sese was amazing! Highly recommend him and Guzzo & Co for any of your purchase needs. Process was smooth and professional and timely. Thank you Sese for helping us get our home!",
      url: "https://www.google.com/maps/contrib/112556600282988954342/reviews?hl=en-US",
    },
    {
      name: "Betcy Elie",
      rating: 5,
      review:
        "I had the pleasure of working with Sese Ntem, Home Lending Advisor, at Guzzo & Co Inc..The saying... third time is a charm... is definitely true for my clients (C & H) who were ready to call it quit until I suggested they take one last chance with Sese. They agree and I am happy to report that my clients closed escrow on February 5, 2025. Yippee! Thanks to Sese and his Senior Processor, Amber Van Assche; my buyers were able to get their loan funded. It was a pleasure working with both of them; I love their professionalism and their great communication (whether by phone, text or email) with both my clients and me. Sese, you assured me that you would deliver.. and yes indeed, you delivered 😊 I look forward to working with both Sese and Amber again, in the near future. Thanks guys; job well done!",
    },
    {
      name: "Emma E. Recher",
      rating: 5,
      review:
        "A powerhouse team for a not-so-easy case... Sese and his loan processor worked tirelessly to make sure everything went as smoothly as possible. Every obstacle raised by the underwriter was swiftly handled by the loan processor, leading to the final result: securing the loan. A company I highly recommend, both for their efficiency and their kindness.",
      url: "https://www.google.com/maps/contrib/100133890453473952536/reviews?hl=en-US",
    },
    {
      name: "Koru Kan",
      rating: 5,
      review:
        "Sese Ntem was a pleasure to work with. He helped us get a good rate, was super responsive (even during evenings and weekends) and helped us through the whole process with time to spare on our rushed closing. I would definitely recommend Sese Ntem and his team.",
      url: "https://www.google.com/maps/contrib/111199029902182787868/reviews?hl=en-US",
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
      url: "https://www.google.com/maps/contrib/114346578128320789852/reviews?hl=en-US",
    },

    {
      name: "Erika Villasana",
      rating: 5,
      review:
        "I had the pleasure of working with SESE NTEM throughout the process of securing a loan for my home. From the start he walked me through every step of the process, answering all my questions and ensuring I understood the terms and requirements. I appreciated how they kept everything on track and ensured that all the necessary paperwork was completed in a timely manner. His commitment to making the process as smooth as possible proactively addressed potential issues, offered solutions, and made sure there were no surprises along the way. The entire process was efficient, and I highly recommend SESE NTEM to anyone looking for a reliable and professional loan processor.",
      url: "https://www.google.com/maps/contrib/116384933902042303964/reviews?hl=en-US",
    },
    {
      name: "Estelle Hughes",
      rating: 5,
      review:
        "Mister sese is very nice he have patience he knows what is doing in recommend every one to work with him is very nice person when you got mister see on your file it's a blessing I'm telling you guys is the bomb I recommend 💯",
      url: "https://www.google.com/maps/contrib/109285741726581595620/reviews?hl=en-US",
    },
    {
      name: "Isiah Autry",
      rating: 5,
      review:
        "SeSe was amazing. There were many hoops to jump through and several issues arose but SeSe was able to navigate the rough waters and get us to the finish line. I would recommend SeSe to anyone.",
      url: "https://www.google.com/maps/contrib/100870612966951521035/reviews?hl=en-US",
    },
    {
      name: "Kwaku Gamadeku",
      rating: 5,
      review:
        "I had a pleasure to work with Sese Ntem with the purchase of my property. Sese was fast, attentive . He went above and beyond to get this loan approved. His dedication for his client is at another level. Day and night , Sese answered my calls if I have questions.. He was very patient and made sure everything falls into places at the right time. He is very knowledgeable at what he does. I will recommend Sese a 5 stars",
      url: "https://www.google.com/maps/contrib/110452362169443550525/reviews?hl=en-US",
    },
  ];

  const loanPrograms = [
    {
      loanId: "1",
      loanName: "DSCR 1-4 Unit",
      icon: "/assets/ALT (3).svg",
      keyFeatures: [
        "No Personal Income Verification",
        "Ideal for Real Estate Investors",
        "Covers 1–4 Unit Properties",
        "Fast & Streamlined Approval",
      ],
      description:
        "A DSCR (Debt Service Coverage Ratio) loan is designed for real estate investors purchasing or refinancing rental properties with 1–4 units. Instead of relying on personal income, these loans focus on the property’s cash flow to qualify. If the rental income covers the property's monthly debt payments, you may qualify—even without traditional income documentation. DSCR loans offer a flexible, streamlined solution for building your investment portfolio.",
    },
    {
      loanId: "2",
      loanName: "DSCR 5-8 Unit",
      icon: "/assets/ALT (4).svg",
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
      loanId: "3",
      loanName: "DSCR Alt Doc",
      icon: "/assets/ALT (5).svg",
      keyFeatures: [
        "Alternative Documentation Accepted",
        "Ideal for Self-Employed Investors",
        "Covers 1–4 Unit Properties",
        "Fast & Flexible Financing",
      ],
      description:
        "DSCR Alt Doc (Alternative Documentation) loans are designed for real estate investors who may not qualify through traditional income documentation. These loans focus on the property's rental income and overall cash flow, not the borrower’s tax returns or employment history. By using alternative forms of documentation, investors can access flexible financing options for both residential and small multifamily properties.",
    },
    {
      loanId: "4",
      loanName: "DSCR ITIN",
      icon: "/assets/ALT (6).svg",
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
      loanId: "5",
      loanName: "DSCR Foreign National",
      icon: "/assets/ALT (2).svg",
      keyFeatures: [
        "No U.S. Credit History Needed",
        "Property Income-Based Qualification",
        "Supports 1–8 Unit Investment Properties",
        "Tailored for Non-U.S. Residents",
      ],
      description:
        "DSCR Foreign National loans are created for international investors who want to purchase or refinance U.S. rental properties but do not have U.S. residency, citizenship, or credit history. These loans evaluate the property's rental income instead of relying on the borrower's income or tax returns. With simplified documentation requirements, Foreign National loans offer a practical solution for global investors entering the U.S. real estate market.",
    },
  ];

  const portfolioItems = [
    {
      portId: "1",
      portName: "1508 De La Vina",
      portAddress: "1508 De La Vina St, Santa Barbara, CA 93101",
      portImage:
        "https://photos.zillowstatic.com/fp/76e2f4aa5994e061e587704288c232a7-cc_ft_960.webp",
      portImage2:
        "https://photos.zillowstatic.com/fp/4e9e6ceab8eebed003b7a39777282cb5-cc_ft_576.webp",
      portImage3:
        "https://photos.zillowstatic.com/fp/76e2f4aa5994e061e587704288c232a7-cc_ft_960.webp",
      portDescription:
        "Charming 2‑bed, 1‑bath cottage in the heart of downtown Santa Barbara, built in 1917 and spanning approximately 800 ft². Located on a ~3,049 ft² lot, this home exudes character—with a cozy front porch, fruit trees, and two detached garages (one oversized). Recently refreshed plumbing (as of November 1, 2024), it’s an AS‑IS probate sale with great renovation potential and proximity to State Street, transit, and the 101 Freeway. ",
    },
    {
      portId: "2",
      portName: "222 W Chestnut Ave",
      portAddress: "222 W Chestnut Ave, Lompoc, CA 93436",
      portImage:
        "https://photos.zillowstatic.com/fp/ca5418d602180f249ed1cbb4ec0ce113-cc_ft_960.webp",
      portImage2:
        "https://photos.zillowstatic.com/fp/1170b5cf138b4bf317e874e852b07b07-uncropped_scaled_within_1536_1152.webp",
      portImage3:
        "https://photos.zillowstatic.com/fp/476ecde45eeb0cd881c38e8c8f434d74-uncropped_scaled_within_1536_1152.webp",
      portDescription:
        "Classic single‑story home built in 1926, offering ~1,404 ft² of living space on a generous ~10,454 ft² lot. With 3 bedrooms and 2 full baths, the home boasts hardwood and tile floors, a raised foundation, brick fireplace, and a detached, finished two‑car garage with storage. Mature fruit trees and lush hedges surround the property—the perfect blend of charm and ADU potential.",
    },
    {
      portId: "3",
      portName: "11004 Comiskey Lane",
      portAddress: "11004 Comiskey Ln, Charlotte, NC 28273",
      portImage:
        "https://photos.zillowstatic.com/fp/9ce1ceba253db6e66b6ee316a672c99e-cc_ft_960.webp",
      portImage2:
        "https://photos.zillowstatic.com/fp/2da8053b0640c60a661fd2c04eacbdea-cc_ft_576.webp",
      portImage3:
        "https://photos.zillowstatic.com/fp/79ab4174cac03e7ac722296c307266b4-cc_ft_576.webp",
      portDescription:
        "Modern 2‑story home built in 2016, with approximately 2,637 ft² of living space. Featuring 4 beds and 2.5 baths, plus a rare 3‑car garage, this Steele Creek gem includes hardwood floors, open‑plan layout, granite countertops, stainless appliances, an office/game room, a loft, and a luxurious primary suite with separate tub and shower. Situated on a cul‑de‑sac with no HOA, it offers elegant comfort and convenience.",
    },
    {
      portId: "4",
      portName: "1881 Millstream Holw, Conyers",
      portAddress: "1881 Millstream Holw, Conyers, GA 30012",
      portImage:
        "https://photos.zillowstatic.com/fp/b0f9d802ddd7e24d53637c93464e0afe-cc_ft_960.webp",
      portImage2:
        "https://photos.zillowstatic.com/fp/97c17523c18ad16f479626fc35a00fc3-cc_ft_576.webp",
      portImage3:
        "https://photos.zillowstatic.com/fp/21a728e3d2acfdaa4ac3712ddce95e5a-cc_ft_960.webp",
      portDescription:
        "Contemporary townhouse constructed in 2018, offering ~1,589 ft² of finished living area with 3 bedrooms and 2.5 bathrooms. Thoughtfully designed with modern features—granite kitchen counters, stainless appliances, durable LVP flooring, walk‑in closets, and an attached 1‑car garage. Located in a sidewalked community, it includes HOA amenities at about $160/year and offers move‑in ready comfort.",
    },
  ];

  const blogs = [
    {
      blogId: "1",
      image:
        "https://designerwoodflooring.com/wp-content/uploads/2022/07/house.jpg",
      caption: "Understanding DSCR Loans for Smarter Home Lending",
      fullPost: `
      Whether you're a seasoned investor or new to real estate, understanding **DSCR (Debt Service Coverage Ratio) loans** is key to expanding your portfolio without the hassle of traditional income documentation. Unlike conventional mortgages that focus on your personal income and credit history, DSCR loans evaluate the income potential of the investment property itself. If the property generates enough rental income to cover the monthly debt payment, you’re well on your way to qualifying.

      This approach is ideal for self-employed borrowers, LLCs, and investors who may not show significant income on paper. DSCR loans are also faster to close, since they rely on property cash flow instead of digging through tax returns and employment history. You can use them to purchase new properties or refinance existing ones to free up cash for future investments.

      Curious about how a DSCR loan can work for you? Schedule a call today to get expert guidance and customized lending solutions tailored to your goals.
    `,
      datePosted: "2025-07-18",
    },
    {
      blogId: "2",
      image:
        "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2022/04/B-05-scaled-1.jpg",
      caption: "What Is a DSCR ITIN Loan and Who Is It For?",
      fullPost: `
      Many people assume that investing in U.S. real estate requires a Social Security Number, but that's no longer the case thanks to **DSCR ITIN loans**. These specialized loans are designed for individuals who file taxes using an **Individual Taxpayer Identification Number (ITIN)** instead of an SSN. This is a game-changer for foreign nationals, immigrants, and non-resident investors looking to purchase income-producing properties in the U.S.

      Just like traditional DSCR loans, ITIN-based DSCR loans evaluate the cash flow of the property rather than your employment or credit profile. That means you can qualify based on how much rental income the property generates — not on whether you have a W-2 job or a U.S.-based credit score. These loans are flexible, scalable, and built to support long-term investing strategies.

      If you're an ITIN holder ready to invest or refinance in U.S. real estate, Schedule a call to find out how we can help you unlock these opportunities.
    `,
      datePosted: "2025-07-18",
    },
    {
      blogId: "3",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
      caption: "Top Benefits of 1–4 Unit DSCR Loans for Investors",
      fullPost: `
      Real estate investors looking to scale efficiently should seriously consider the benefits of **1–4 unit DSCR loans**. These loans are crafted specifically for smaller residential properties like single-family homes, duplexes, triplexes, and fourplexes. The major advantage? They’re based entirely on **property income performance**, not your personal tax returns or income documentation.

      These DSCR loans are a favorite among full-time investors and part-time landlords because they streamline the approval process and provide a pathway to **build or expand a rental portfolio** with minimal red tape. Whether you're refinancing a cash-flowing asset or acquiring a new one, 1–4 unit DSCR loans offer fast funding, low documentation, and long-term financial flexibility.

      Want to see how a 1–4 unit DSCR loan fits into your strategy? Schedule a call to speak with one of our loan specialists who can guide you through the process step-by-step.
    `,
      datePosted: "2025-07-18",
    },
  ];

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              testimonials={testimonials}
              loanPrograms={loanPrograms}
              portfolioItems={portfolioItems}
            />
          }
        />
        <Route path="/loans" element={<Loans loanPrograms={loanPrograms} />} />
        <Route
          path="/Testimonials"
          element={<Testimonials testimonials={testimonials} />}
        />
        <Route
          path="/Portfolio"
          element={<Portfolio portfolioItems={portfolioItems} />}
        />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/loans/:loanId"
          element={<SingleLoan loanPrograms={loanPrograms} />}
        />
        <Route
          path="/portfolio/:portId"
          element={<SinglePortfolio portfolioItems={portfolioItems} />}
        />
        <Route path="/Articles" element={<Articles blogs={blogs} />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
