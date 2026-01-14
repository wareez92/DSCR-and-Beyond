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
  const [lang, setLang] = useState("en");
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
      content: {
        en: {
          description:
            "Charming 2-bed, 1-bath cottage in the heart of downtown Santa Barbara, built in 1917 and spanning approximately 800 ft². Located on a ~3,049 ft² lot, this home features a cozy front porch, fruit trees, and two detached garages (one oversized). Recently updated plumbing (Nov 2024). AS-IS probate sale with strong renovation potential and excellent proximity to State Street, transit, and Highway 101.",
        },
        fr: {
          description:
            "Charmante maison de 2 chambres et 1 salle de bain située au cœur du centre-ville de Santa Barbara, construite en 1917 et offrant environ 74 m². Implantée sur un terrain d’environ 283 m², elle dispose d’un porche accueillant, d’arbres fruitiers et de deux garages détachés (dont un surdimensionné). Plomberie récemment mise à jour (novembre 2024). Vente en l’état avec fort potentiel de rénovation et excellente proximité de State Street, des transports et de l’autoroute 101.",
        },
        es: {
          description:
            "Encantadora casa de 2 dormitorios y 1 baño en el corazón del centro de Santa Bárbara, construida en 1917 y con aproximadamente 74 m². Ubicada en un lote de unos 283 m², cuenta con un acogedor porche, árboles frutales y dos garajes independientes (uno de gran tamaño). Plomería actualizada en noviembre de 2024. Venta en condición AS-IS con gran potencial de renovación y excelente acceso a State Street, transporte y la autopista 101.",
        },
      },
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
      content: {
        en: {
          description:
            "Classic single-story home built in 1926 with approximately 1,404 ft² of living space on a 10,454 ft² lot. Includes 3 bedrooms, 2 bathrooms, hardwood and tile floors, a brick fireplace, and a detached finished two-car garage with storage. Mature fruit trees and lush hedges surround the property, making it ideal for charm lovers and ADU potential.",
        },
        fr: {
          description:
            "Maison de plain-pied classique construite en 1926 offrant environ 130 m² sur un terrain de 971 m². Elle comprend 3 chambres, 2 salles de bain, des sols en bois et carrelage, une cheminée en brique et un garage détaché pour deux voitures avec espace de rangement. Des arbres fruitiers matures et des haies luxuriantes entourent la propriété, idéale pour le charme et le potentiel d’ADU.",
        },
        es: {
          description:
            "Casa clásica de una sola planta construida en 1926 con aproximadamente 130 m² de superficie en un lote de 971 m². Cuenta con 3 dormitorios, 2 baños, pisos de madera y baldosas, chimenea de ladrillo y garaje independiente para dos autos con espacio de almacenamiento. Rodeada de árboles frutales y setos, es ideal por su encanto y potencial para una ADU.",
        },
      },
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
      content: {
        en: {
          description:
            "Modern two-story home built in 2016 with approximately 2,637 ft² of living space. Featuring 4 bedrooms, 2.5 bathrooms, and a rare 3-car garage, this Steele Creek property includes hardwood floors, open layout, granite countertops, stainless appliances, office/game room, loft, and a luxury primary suite. Located on a cul-de-sac with no HOA.",
        },
        fr: {
          description:
            "Maison moderne de deux étages construite en 2016 offrant environ 245 m². Elle comprend 4 chambres, 2,5 salles de bain et un rare garage pour 3 voitures. Elle dispose de sols en bois, d’un plan ouvert, de comptoirs en granit, d’appareils en acier inoxydable, d’un bureau/salle de jeux, d’un loft et d’une suite principale luxueuse. Située dans un cul-de-sac sans HOA.",
        },
        es: {
          description:
            "Casa moderna de dos pisos construida en 2016 con aproximadamente 245 m². Incluye 4 dormitorios, 2.5 baños y un raro garaje para 3 autos. Cuenta con pisos de madera, diseño abierto, encimeras de granito, electrodomésticos de acero inoxidable, oficina/sala de juegos, loft y una suite principal de lujo. Ubicada en un cul-de-sac sin HOA.",
        },
      },
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
      content: {
        en: {
          description:
            "Contemporary townhouse built in 2018 offering 1,589 ft² of living space with 3 bedrooms and 2.5 bathrooms. Features include granite countertops, stainless appliances, LVP flooring, walk-in closets, and an attached garage. Located in a sidewalk community with HOA amenities around $160/year.",
        },
        fr: {
          description:
            "Maison de ville contemporaine construite en 2018 offrant environ 148 m² avec 3 chambres et 2,5 salles de bain. Elle comprend des comptoirs en granit, des appareils en acier inoxydable, des sols LVP, des dressings et un garage attenant. Située dans une communauté avec trottoirs et services HOA d’environ 160 $/an.",
        },
        es: {
          description:
            "Casa adosada contemporánea construida en 2018 con aproximadamente 148 m², 3 dormitorios y 2.5 baños. Incluye encimeras de granito, electrodomésticos de acero inoxidable, pisos LVP, vestidores y garaje adjunto. Ubicada en una comunidad con aceras y HOA de aproximadamente $160 al año.",
        },
      },
    },
  ];

  const blogs = [
    {
      blogId: "1",
      image:
        "https://designerwoodflooring.com/wp-content/uploads/2022/07/house.jpg",
      datePosted: "2025-07-18",
      content: {
        en: {
          caption: "Understanding DSCR Loans for Smarter Home Lending",
          fullPost: `
Whether you're a seasoned investor or new to real estate, understanding **DSCR (Debt Service Coverage Ratio) loans** is key to expanding your portfolio without the hassle of traditional income documentation. Unlike conventional mortgages that focus on your personal income and credit history, DSCR loans evaluate the income potential of the investment property itself. If the property generates enough rental income to cover the monthly debt payment, you’re well on your way to qualifying.

This approach is ideal for self-employed borrowers, LLCs, and investors who may not show significant income on paper. DSCR loans are also faster to close, since they rely on property cash flow instead of digging through tax returns and employment history. You can use them to purchase new properties or refinance existing ones to free up cash for future investments.

Curious about how a DSCR loan can work for you? Schedule a call today to get expert guidance and customized lending solutions tailored to your goals.
        `,
        },
        fr: {
          caption:
            "Comprendre les prêts DSCR pour un financement immobilier plus intelligent",
          fullPost: `
Que vous soyez un investisseur expérimenté ou nouveau dans l’immobilier, comprendre les **prêts DSCR (Debt Service Coverage Ratio)** est essentiel pour développer votre portefeuille sans les contraintes de la documentation de revenus traditionnelle. Contrairement aux prêts hypothécaires classiques, les prêts DSCR évaluent la capacité du bien à générer des revenus locatifs suffisants pour couvrir les paiements mensuels.

Cette approche est idéale pour les travailleurs indépendants, les sociétés (LLC) et les investisseurs qui ne présentent pas toujours des revenus élevés sur le papier. Les prêts DSCR sont également plus rapides à clôturer, car ils reposent sur la trésorerie du bien plutôt que sur les déclarations fiscales et l’historique d’emploi. Ils peuvent être utilisés pour acheter de nouvelles propriétés ou refinancer des biens existants afin de libérer des liquidités pour de futurs investissements.

Vous souhaitez savoir comment un prêt DSCR peut fonctionner pour vous ? Planifiez un appel dès aujourd’hui pour recevoir des conseils personnalisés.
        `,
        },
        es: {
          caption:
            "Comprender los préstamos DSCR para una financiación inmobiliaria más inteligente",
          fullPost: `
Ya seas un inversionista experimentado o nuevo en bienes raíces, comprender los **préstamos DSCR (Debt Service Coverage Ratio)** es clave para expandir tu portafolio sin la molestia de la documentación tradicional de ingresos. A diferencia de las hipotecas convencionales, los préstamos DSCR evalúan el potencial de ingresos de la propiedad en lugar de tu historial laboral o crediticio.

Este enfoque es ideal para trabajadores independientes, empresas (LLC) e inversionistas que no muestran ingresos altos en papel. Los préstamos DSCR también se cierran más rápido, ya que se basan en el flujo de caja de la propiedad en lugar de declaraciones de impuestos o comprobantes de empleo. Puedes usarlos para comprar nuevas propiedades o refinanciar las existentes y así liberar capital para futuras inversiones.

¿Te interesa saber cómo un préstamo DSCR puede ayudarte? Agenda una llamada hoy mismo para recibir asesoría personalizada.
        `,
        },
      },
    },

    {
      blogId: "2",
      image:
        "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2022/04/B-05-scaled-1.jpg",
      datePosted: "2025-07-18",
      content: {
        en: {
          caption: "What Is a DSCR ITIN Loan and Who Is It For?",
          fullPost: `
Many people assume that investing in U.S. real estate requires a Social Security Number, but that's no longer the case thanks to **DSCR ITIN loans**. These specialized loans are designed for individuals who file taxes using an **Individual Taxpayer Identification Number (ITIN)** instead of an SSN.

Just like traditional DSCR loans, ITIN-based DSCR loans evaluate the cash flow of the property rather than your employment or credit profile. That means you qualify based on rental income, not on having a W-2 job or U.S. credit score.

If you're an ITIN holder ready to invest or refinance in U.S. real estate, schedule a call to learn how we can help.
        `,
        },
        fr: {
          caption:
            "Qu’est-ce qu’un prêt DSCR avec ITIN et à qui s’adresse-t-il ?",
          fullPost: `
Beaucoup de personnes pensent qu’il faut un numéro de sécurité sociale pour investir dans l’immobilier aux États-Unis, mais ce n’est plus vrai grâce aux **prêts DSCR avec ITIN**. Ces prêts sont conçus pour les personnes déclarant leurs impôts avec un **ITIN**.

Comme les prêts DSCR classiques, les prêts DSCR ITIN se basent sur les revenus locatifs du bien et non sur votre emploi ou votre crédit. Cela vous permet de vous qualifier en fonction du cash-flow généré par la propriété.

Si vous êtes titulaire d’un ITIN et souhaitez investir ou refinancer, planifiez un appel pour en savoir plus.
        `,
        },
        es: {
          caption: "¿Qué es un préstamo DSCR con ITIN y para quién es?",
          fullPost: `
Muchas personas creen que se necesita un número de Seguro Social para invertir en bienes raíces en EE. UU., pero eso ya no es cierto gracias a los **préstamos DSCR con ITIN**. Estos préstamos están diseñados para personas que declaran impuestos con un **ITIN**.

Al igual que los préstamos DSCR tradicionales, estos préstamos se basan en los ingresos de la propiedad y no en tu empleo o historial crediticio. Eso significa que calificas según el alquiler que genera la propiedad.

Si tienes ITIN y quieres invertir o refinanciar, agenda una llamada para conocer tus opciones.
        `,
        },
      },
    },

    {
      blogId: "3",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80",
      datePosted: "2025-07-18",
      content: {
        en: {
          caption: "Top Benefits of 1–4 Unit DSCR Loans for Investors",
          fullPost: `
Real estate investors looking to scale efficiently should consider **1–4 unit DSCR loans**. These loans are designed for properties like single-family homes, duplexes, triplexes, and fourplexes.

They are based entirely on the property’s income rather than personal tax returns, allowing investors to grow portfolios with minimal paperwork and faster approvals.

Want to see how a 1–4 unit DSCR loan fits into your strategy? Schedule a call today.
        `,
        },
        fr: {
          caption:
            "Les avantages des prêts DSCR pour les propriétés de 1 à 4 unités",
          fullPost: `
Les investisseurs immobiliers qui souhaitent se développer efficacement devraient considérer les **prêts DSCR pour 1 à 4 unités**. Ces prêts couvrent les maisons unifamiliales, duplex, triplex et immeubles de quatre logements.

Ils reposent sur les revenus locatifs du bien plutôt que sur vos revenus personnels, ce qui permet une approbation plus rapide et moins de paperasse.

Planifiez un appel pour découvrir comment cela peut s’intégrer à votre stratégie.
        `,
        },
        es: {
          caption:
            "Beneficios principales de los préstamos DSCR para propiedades de 1 a 4 unidades",
          fullPost: `
Los inversionistas que buscan crecer de manera eficiente deben considerar los **préstamos DSCR para propiedades de 1 a 4 unidades**. Estos préstamos cubren casas unifamiliares, dúplex, tríplex y cuádruplex.

Se basan en los ingresos de la propiedad y no en tus impuestos personales, lo que permite aprobaciones más rápidas y menos papeleo.

Agenda una llamada para saber cómo estos préstamos pueden ayudarte a crecer.
        `,
        },
      },
    },
  ];

  const connect = {
    en: {
      cta: "Let’s Connect",
    },
    fr: {
      cta: "Connectons-nous",
    },
    es: {
      cta: "Conectemos",
    },
  };

  const viewDetails = {
    en: {
      viewDetails: "View Details",
    },
    fr: {
      viewDetails: "Voir les détails",
    },
    es: {
      viewDetails: "Ver detalles",
    },
  };

  const contactForm = {
    en: {
      h1: "Contact",
      h6: "Your message has been received! We will get back to you quickly!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    },
    fr: {
      h1: "Contact",
      h6: "Votre message a été reçu ! Nous vous répondrons rapidement !",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
    },
    es: {
      h1: "Contacto",
      h6: "¡Su mensaje ha sido recibido! ¡Nos pondremos en contacto con usted pronto!",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar",
    },
  };

  const translations = {
    nav: {
      en: {
        home: "Home",
        loanPrograms: "Loan Programs",
        testimonials: "Testimonials",
        contact: "Contact",
        portfolio: "Portfolio",
        articles: "Articles",
        about: "About",
        getStarted: "Get Started",
      },
      fr: {
        home: "Accueil",
        loanPrograms: "Programmes de prêts",
        testimonials: "Témoignages",
        contact: "Contact",
        portfolio: "Portfolio",
        articles: "Articles",
        about: "À propos",
        getStarted: "Commencer",
      },
      es: {
        home: "Inicio",
        loanPrograms: "Programas de préstamos",
        testimonials: "Testimonios",
        contact: "Contacto",
        portfolio: "Portafolio",
        articles: "Artículos",
        about: "Sobre nosotros",
        getStarted: "Empezar",
      },
    },

    about: {
      en: {
        h1: "About",
        h3: {
          meet: "Meet",
          specialist: "Your DSCR Loan Specialist",
        },
        p: {
          intro:
            "Sese helps real estate investors secure the financing they need—quickly and confidently. Specializing in",
          dscr: "DSCR (Debt-Service Coverage Ratio) loans",
          qualify: "he works with clients who qualify based on",
          rental: "rental property income",
          not: "not traditional employment documentation.",
          known: "Known for consistent,",
          closings: "successful closings,",
          delivers: "delivers creative solutions for both",
          investors: "first-time and experienced investors",
          responsive: "responsiveness, attention to detail",
          ability: "and ability to",
          simplify: "simplify the loan process from start to finish",
          polyglot:
            "A skilled polyglot, Sese connects easily with clients across cultures and speaks multiple languages, including",

          languages: "French and English",
          closing:
            ",ensuring clear, effective communication every step of the way. Ready to invest with confidence?",

          cta: "Let’s talk DSCR loans today.",
        },
        back: "Back",
      },

      fr: {
        h1: "À propos",
        h3: {
          meet: "Rencontrez",
          specialist: "Votre spécialiste en prêts DSCR",
        },
        p: {
          intro:
            "Sese aide les investisseurs immobiliers à obtenir le financement dont ils ont besoin — rapidement et en toute confiance. Spécialisé dans",
          dscr: "les prêts DSCR (Debt-Service Coverage Ratio)",
          qualify: "il travaille avec des clients qualifiés selon",
          rental: "les revenus locatifs",
          not: "et non les documents d’emploi traditionnels.",
          known: "Reconnu pour sa constance,",
          closings: "transactions réussies,",
          delivers: "propose des solutions créatives pour les",
          investors: "investisseurs débutants et expérimentés",
          responsive: "réactivité et souci du détail",
          ability: "et la capacité de",
          simplify: "simplifier le processus de prêt du début à la fin",
          polyglot:
            "Polyglotte expérimenté, Sese communique facilement avec des clients de différentes cultures et parle plusieurs langues, dont",

          languages: "le français et l’anglais",
          closing:
            ",garantissant une communication claire et efficace à chaque étape. Prêt à investir en toute confiance ?",

          cta: "Parlons de prêts DSCR dès aujourd’hui.",
        },
        back: "Retour",
      },

      es: {
        h1: "Acerca de",
        h3: {
          meet: "Conoce a",
          specialist: "Tu especialista en préstamos DSCR",
        },
        p: {
          intro:
            "Sese ayuda a los inversionistas inmobiliarios a obtener el financiamiento que necesitan de manera rápida y segura. Especializado en",
          dscr: "préstamos DSCR (Debt-Service Coverage Ratio)",
          qualify: "trabaja con clientes que califican según",
          rental: "los ingresos de alquiler",
          not: "y no la documentación laboral tradicional.",
          known: "Conocido por su constancia,",
          closings: "cierres exitosos,",
          delivers: "ofrece soluciones creativas tanto para",
          investors: "inversionistas nuevos y experimentados",
          responsive: "capacidad de respuesta y atención al detalle",
          ability: "y la capacidad de",
          simplify: "simplificar el proceso de préstamo de principio a fin",
          polyglot:
            "Como políglota experimentado, Sese se conecta fácilmente con clientes de diferentes culturas y habla varios idiomas, incluyendo",
          closing:
            ",garantizando una comunicación clara y eficaz en cada paso del proceso. ¿Listo para invertir con confianza?",

          languages: "francés e inglés",
          cta: "Hablemos de préstamos DSCR hoy.",
        },
        back: "Volver",
      },
    },
  };

  return (
    <>
      <Nav translations={translations} lang={lang} setLang={setLang} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              testimonials={testimonials}
              loanPrograms={loanPrograms}
              portfolioItems={portfolioItems}
              translations={translations}
              lang={lang}
              contactForm={contactForm}
            />
          }
        />
        <Route
          path="/loans"
          element={
            <Loans loanPrograms={loanPrograms} translations={translations} />
          }
        />
        <Route
          path="/Testimonials"
          element={
            <Testimonials
              testimonials={testimonials}
              translations={translations}
            />
          }
        />
        <Route
          path="/Portfolio"
          element={
            <Portfolio
              portfolioItems={portfolioItems}
              translations={translations}
              viewDetails={viewDetails}
              lang={lang}
            />
          }
        />
        <Route
          path="/Contact"
          element={
            <Contact
              contactForm={contactForm}
              lang={lang}
              translations={translations}
            />
          }
        />
        <Route
          path="/loans/:loanId"
          element={
            <SingleLoan
              loanPrograms={loanPrograms}
              translations={translations}
              lang={lang}
            />
          }
        />
        <Route
          path="/portfolio/:portId"
          element={
            <SinglePortfolio
              lang={lang}
              portfolioItems={portfolioItems}
              translations={translations}
              viewDetails={viewDetails}
            />
          }
        />
        <Route
          path="/Articles"
          element={
            <Articles
              translations={translations}
              blogs={blogs}
              lang={lang}
              connect={connect}
            />
          }
        />
        <Route
          path="/About"
          element={<About translations={translations} lang={lang} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
