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
      review: {
        en: "Sese was amazing! Highly recommend him and Guzzo & Co for any of your purchase needs. Process was smooth, professional, and timely. Thank you Sese for helping us get our home!",
        fr: "Sese a été formidable ! Je le recommande vivement, ainsi que Guzzo & Co, pour tous vos projets d’achat. Le processus a été fluide, professionnel et rapide. Merci Sese de nous avoir aidés à obtenir notre maison !",
        es: "¡Sese fue increíble! Lo recomiendo ampliamente, al igual que a Guzzo & Co, para cualquier necesidad de compra. El proceso fue fluido, profesional y puntual. ¡Gracias Sese por ayudarnos a conseguir nuestro hogar!",
      },
      url: "https://www.google.com/maps/contrib/112556600282988954342/reviews?hl=en-US",
    },
    {
      name: "Betcy Elie",
      rating: 5,
      review: {
        en: "I had the pleasure of working with Sese Ntem at Guzzo & Co Inc. After several attempts, my clients finally closed escrow thanks to Sese and his senior processor. Their professionalism, communication, and dedication were outstanding. Job well done!",
        fr: "J’ai eu le plaisir de travailler avec Sese Ntem chez Guzzo & Co Inc. Après plusieurs tentatives, mes clients ont enfin pu conclure la transaction grâce à Sese et à sa responsable de traitement. Leur professionnalisme, leur communication et leur engagement étaient exceptionnels. Excellent travail !",
        es: "Tuve el placer de trabajar con Sese Ntem en Guzzo & Co Inc. Después de varios intentos, mis clientes finalmente cerraron la operación gracias a Sese y a su procesadora senior. Su profesionalismo, comunicación y dedicación fueron excepcionales. ¡Excelente trabajo!",
      },
    },
    {
      name: "Emma E. Recher",
      rating: 5,
      review: {
        en: "A powerhouse team for a challenging case. Sese and his loan processor worked tirelessly to overcome every obstacle and successfully secure the loan. Highly recommended for both efficiency and kindness.",
        fr: "Une équipe exceptionnelle pour un dossier complexe. Sese et son équipe ont travaillé sans relâche pour surmonter chaque obstacle et obtenir le financement. Je recommande vivement pour leur efficacité et leur gentillesse.",
        es: "Un equipo poderoso para un caso complejo. Sese y su procesador de préstamos trabajaron incansablemente para superar cada obstáculo y asegurar el préstamo. Muy recomendados por su eficiencia y amabilidad.",
      },
      url: "https://www.google.com/maps/contrib/100133890453473952536/reviews?hl=en-US",
    },
    {
      name: "Koru Kan",
      rating: 5,
      review: {
        en: "Sese Ntem was a pleasure to work with. He secured us a great rate, was extremely responsive, and guided us through a fast-paced closing with ease.",
        fr: "Ce fut un réel plaisir de travailler avec Sese Ntem. Il nous a obtenu un excellent taux, a été très réactif et nous a accompagnés efficacement tout au long d’une clôture rapide.",
        es: "Fue un placer trabajar con Sese Ntem. Nos consiguió una excelente tasa, fue muy receptivo y nos guió durante todo el proceso de cierre acelerado.",
      },
      url: "https://www.google.com/maps/contrib/111199029902182787868/reviews?hl=en-US",
    },
    {
      name: "Emmanuelle R",
      rating: 5,
      review: {
        en: "A powerhouse team for a challenging case. Every obstacle was handled efficiently, leading to a successful loan approval. Highly recommended.",
        fr: "Une équipe remarquable pour un dossier difficile. Chaque obstacle a été géré efficacement, menant à l’approbation du prêt. Je recommande vivement.",
        es: "Un equipo excepcional para un caso complicado. Cada obstáculo fue manejado eficientemente hasta lograr la aprobación del préstamo. Muy recomendable.",
      },
    },
    {
      name: "Kokouvi Komlanvi",
      rating: 5,
      review: {
        en: "Exceptional service from Sese Ntem and Rosa Vasquez. Clear communication, responsiveness, and competitive rates made the financing process smooth for my clients.",
        fr: "Service exceptionnel de la part de Sese Ntem et Rosa Vasquez. Communication claire, grande réactivité et excellents taux — une expérience fluide pour mes clients.",
        es: "Servicio excepcional de Sese Ntem y Rosa Vasquez. Comunicación clara, gran capacidad de respuesta y tasas competitivas hicieron que el proceso fuera muy fluido.",
      },
      url: "https://www.google.com/maps/contrib/114346578128320789852/reviews?hl=en-US",
    },
    {
      name: "Erika Villasana",
      rating: 5,
      review: {
        en: "Sese guided me through every step of the loan process with clarity and professionalism. He proactively addressed issues and ensured a smooth, efficient experience.",
        fr: "Sese m’a accompagnée à chaque étape du processus avec clarté et professionnalisme. Il a anticipé les problèmes et assuré une expérience fluide et efficace.",
        es: "Sese me guió en cada paso del proceso con claridad y profesionalismo. Abordó los problemas de manera proactiva y aseguró una experiencia eficiente y sin sorpresas.",
      },
      url: "https://www.google.com/maps/contrib/116384933902042303964/reviews?hl=en-US",
    },
    {
      name: "Estelle Hughes",
      rating: 5,
      review: {
        en: "Mr. Sese is patient, knowledgeable, and truly a blessing to work with. I highly recommend him.",
        fr: "Monsieur Sese est patient, compétent et un véritable plaisir à côtoyer. Je le recommande vivement.",
        es: "El señor Sese es paciente, conocedor y una verdadera bendición para trabajar. Lo recomiendo al 100 %.",
      },
      url: "https://www.google.com/maps/contrib/109285741726581595620/reviews?hl=en-US",
    },
    {
      name: "Isiah Autry",
      rating: 5,
      review: {
        en: "There were many challenges, but Sese navigated every issue and got us across the finish line. Highly recommended.",
        fr: "Malgré de nombreux défis, Sese a su gérer chaque situation et mener le dossier à terme. Je recommande sans hésiter.",
        es: "Hubo muchos desafíos, pero Sese supo manejarlos todos y llevarnos hasta el final. Muy recomendable.",
      },
      url: "https://www.google.com/maps/contrib/100870612966951521035/reviews?hl=en-US",
    },
    {
      name: "Kwaku Gamadeku",
      rating: 5,
      review: {
        en: "Sese went above and beyond to get my loan approved. He was attentive, patient, and extremely knowledgeable. Five stars without hesitation.",
        fr: "Sese est allé bien au-delà de mes attentes pour faire approuver mon prêt. Attentif, patient et très compétent. Cinq étoiles sans hésitation.",
        es: "Sese hizo mucho más de lo esperado para aprobar mi préstamo. Atento, paciente y muy conocedor. Cinco estrellas sin dudarlo.",
      },
      url: "https://www.google.com/maps/contrib/110452362169443550525/reviews?hl=en-US",
    },
  ];

  const viewAll = {
    en: "View All",
    fr: "Voir tout",
    es: "Ver todo",
  };

  const dscrText = {
    en: `A DSCR (Debt Service Coverage Ratio) loan is a type of real estate loan commonly used by real estate investors, where approval is based on the property's income—not the borrower’s personal income. Instead of tax returns or W-2s, lenders look at the property's cash flow to ensure it can cover the loan payments. Why It's Helpful for Homebuyers or Investors: DSCR loans are especially useful for people who may not qualify for traditional loans due to self-employment, inconsistent income, or a high debt-to-income ratio. They’re ideal for purchasing rental properties, as the focus is on the property's ability to generate income, not your personal finances. This makes DSCR loans a flexible option for growing a real estate portfolio.`,
    fr: `Un prêt DSCR (Debt Service Coverage Ratio) est un type de prêt immobilier couramment utilisé par les investisseurs immobiliers, dont l’approbation est basée sur les revenus générés par le bien — et non sur les revenus personnels de l’emprunteur. Au lieu des déclarations fiscales ou des formulaires W-2, les prêteurs examinent la trésorerie du bien afin de s’assurer qu’elle peut couvrir les paiements du prêt. Pourquoi c’est utile pour les acheteurs ou investisseurs : les prêts DSCR sont particulièrement adaptés aux personnes qui ne peuvent pas obtenir de prêts traditionnels en raison du travail indépendant, de revenus irréguliers ou d’un ratio d’endettement élevé. Ils sont idéaux pour l’achat de biens locatifs, car l’accent est mis sur la capacité du bien à générer des revenus, et non sur les finances personnelles. Cela fait des prêts DSCR une option flexible pour développer un portefeuille immobilier.`,
    es: `Un préstamo DSCR (Debt Service Coverage Ratio) es un tipo de préstamo inmobiliario comúnmente utilizado por inversionistas inmobiliarios, en el cual la aprobación se basa en los ingresos generados por la propiedad, y no en los ingresos personales del prestatario. En lugar de declaraciones de impuestos o formularios W-2, los prestamistas evalúan el flujo de efectivo de la propiedad para asegurarse de que pueda cubrir los pagos del préstamo. Por qué es útil para compradores o inversionistas: los préstamos DSCR son especialmente beneficiosos para personas que no califican para préstamos tradicionales debido al trabajo independiente, ingresos irregulares o una alta relación deuda-ingresos. Son ideales para la compra de propiedades de alquiler, ya que el enfoque está en la capacidad de la propiedad para generar ingresos, no en las finanzas personales. Esto convierte a los préstamos DSCR en una opción flexible para hacer crecer un portafolio inmobiliario.`,
  };

  const loanPrograms = [
    {
      loanId: "1",
      loanName: "DSCR 1-4 Unit",
      icon: "/assets/ALT (3).svg",

      keyFeatures: {
        en: [
          "No Personal Income Verification",
          "Ideal for Real Estate Investors",
          "Covers 1–4 Unit Properties",
          "Fast & Streamlined Approval",
        ],
        fr: [
          "Aucune vérification de revenu personnel",
          "Idéal pour les investisseurs immobiliers",
          "Couvre les propriétés de 1 à 4 logements",
          "Approbation rapide et simplifiée",
        ],
        es: [
          "No se requiere verificación de ingresos personales",
          "Ideal para inversionistas inmobiliarios",
          "Cubre propiedades de 1 a 4 unidades",
          "Aprobación rápida y simplificada",
        ],
      },

      description: {
        en: "A DSCR (Debt Service Coverage Ratio) loan is designed for real estate investors purchasing or refinancing rental properties with 1–4 units. Instead of relying on personal income, these loans focus on the property’s cash flow to qualify. If the rental income covers the property's monthly debt payments, you may qualify—even without traditional income documentation. DSCR loans offer a flexible, streamlined solution for building your investment portfolio.",

        fr: "Un prêt DSCR (Debt Service Coverage Ratio) est conçu pour les investisseurs immobiliers qui achètent ou refinancent des biens locatifs de 1 à 4 logements. Au lieu de se baser sur les revenus personnels, ces prêts évaluent la trésorerie générée par le bien. Si les revenus locatifs couvrent les paiements mensuels, vous pouvez être admissible, même sans documentation traditionnelle. Les prêts DSCR offrent une solution flexible et simplifiée pour développer un portefeuille immobilier.",

        es: "Un préstamo DSCR (Debt Service Coverage Ratio) está diseñado para inversionistas inmobiliarios que compran o refinancian propiedades de alquiler de 1 a 4 unidades. En lugar de basarse en los ingresos personales, estos préstamos evalúan el flujo de efectivo de la propiedad. Si los ingresos de alquiler cubren los pagos mensuales, puede calificar incluso sin documentación tradicional. Los préstamos DSCR ofrecen una solución flexible y simplificada para hacer crecer su portafolio inmobiliario.",
      },
    },

    {
      loanId: "2",
      loanName: "DSCR 5-8 Unit",
      icon: "/assets/ALT (4).svg",

      keyFeatures: {
        en: [
          "Income-Based Qualification",
          "No Tax Returns or Employment Verification",
          "Supports Mid-Sized Residential Assets",
          "Simplified & Efficient Process",
        ],
        fr: [
          "Qualification basé sur les revenus du bien",
          "Aucune déclaration fiscale ni vérification d’emploi",
          "Idéal pour les immeubles résidentiels intermédiaires",
          "Processus simplifié et efficace",
        ],
        es: [
          "Calificación basada en los ingresos de la propiedad",
          "No se requieren declaraciones de impuestos ni verificación laboral",
          "Compatible con propiedades residenciales medianas",
          "Proceso simplificado y eficiente",
        ],
      },

      description: {
        en: "DSCR loans for 5–8 unit properties are designed for investors financing mid-sized residential properties. Qualification is based on rental income rather than personal income or tax returns. These loans offer a flexible, cash-flow-based solution with a streamlined approval process.",

        fr: "Les prêts DSCR pour les propriétés de 5 à 8 logements sont conçus pour les investisseurs souhaitant financer des immeubles résidentiels de taille moyenne. L’admissibilité repose sur les revenus locatifs plutôt que sur les revenus personnels ou les déclarations fiscales. Ces prêts offrent une solution flexible fondée sur la trésorerie du bien.",

        es: "Los préstamos DSCR para propiedades de 5 a 8 unidades están diseñados para inversionistas que financian activos residenciales de tamaño mediano. La calificación se basa en los ingresos de alquiler y no en los ingresos personales ni declaraciones fiscales. Ofrecen una solución flexible basada en el flujo de efectivo.",
      },
    },

    {
      loanId: "3",
      loanName: "DSCR Alt Doc",
      icon: "/assets/ALT (5).svg",

      keyFeatures: {
        en: [
          "Alternative Documentation Accepted",
          "Ideal for Self-Employed Investors",
          "Covers 1–4 Unit Properties",
          "Fast & Flexible Financing",
        ],
        fr: [
          "Documentation alternative acceptée",
          "Idéal pour les investisseurs indépendants",
          "Couvre les propriétés de 1 à 4 logements",
          "Financement rapide et flexible",
        ],
        es: [
          "Se acepta documentación alternativa",
          "Ideal para inversionistas independientes",
          "Cubre propiedades de 1 a 4 unidades",
          "Financiamiento rápido y flexible",
        ],
      },

      description: {
        en: "DSCR Alt Doc loans are designed for investors who may not qualify through traditional income documentation. These loans focus on rental income and overall property cash flow, offering flexible financing options.",

        fr: "Les prêts DSCR Alt Doc sont destinés aux investisseurs qui ne peuvent pas se qualifier avec une documentation traditionnelle. Ces prêts se basent sur les revenus locatifs et la trésorerie globale du bien, offrant des options de financement flexibles.",

        es: "Los préstamos DSCR Alt Doc están diseñados para inversionistas que no califican mediante documentación tradicional. Se basan en los ingresos de alquiler y el flujo de efectivo de la propiedad, ofreciendo opciones de financiamiento flexibles.",
      },
    },

    {
      loanId: "4",
      loanName: "DSCR ITIN",
      icon: "/assets/ALT (6).svg",

      keyFeatures: {
        en: [
          "No Social Security Number Required",
          "Property Income-Based Qualification",
          "Supports 1–8 Unit Investment Properties",
          "Simplified Loan Process",
        ],
        fr: [
          "Aucun numéro de sécurité sociale requis",
          "Qualification basé sur les revenus du bien",
          "Couvre les propriétés d’investissement de 1 à 8 logements",
          "Processus de prêt simplifié",
        ],
        es: [
          "No se requiere número de Seguro Social",
          "Calificación basada en ingresos de la propiedad",
          "Admite propiedades de inversión de 1 a 8 unidades",
          "Proceso de préstamo simplificado",
        ],
      },

      description: {
        en: "DSCR ITIN loans are designed for investors without a Social Security Number who hold an ITIN. Eligibility is based on rental income rather than personal income, offering a streamlined path to U.S. real estate investing.",

        fr: "Les prêts DSCR ITIN sont conçus pour les investisseurs sans numéro de sécurité sociale disposant d’un ITIN. L’admissibilité repose sur les revenus locatifs plutôt que sur les revenus personnels, offrant un accès simplifié à l’investissement immobilier aux États-Unis.",

        es: "Los préstamos DSCR ITIN están diseñados para inversionistas que no tienen Seguro Social pero cuentan con un ITIN. La elegibilidad se basa en los ingresos de alquiler, ofreciendo un acceso simplificado a la inversión inmobiliaria en EE. UU.",
      },
    },

    {
      loanId: "5",
      loanName: "DSCR Foreign National",
      icon: "/assets/ALT (2).svg",

      keyFeatures: {
        en: [
          "No U.S. Credit History Needed",
          "Property Income-Based Qualification",
          "Supports 1–8 Unit Investment Properties",
          "Tailored for Non-U.S. Residents",
        ],
        fr: [
          "Aucun historique de crédit américain requis",
          "Qualification basé sur les revenus du bien",
          "Couvre les propriétés d’investissement de 1 à 8 logements",
          "Conçu pour les non-résidents américains",
        ],
        es: [
          "No se requiere historial crediticio en EE. UU.",
          "Calificación basada en ingresos de la propiedad",
          "Admite propiedades de inversión de 1 a 8 unidades",
          "Diseñado para inversionistas extranjeros",
        ],
      },

      en: {
        description:  "DSCR Foreign National loans are built for international investors purchasing or refinancing U.S. rental properties. Qualification is based on property income rather than personal income, offering simplified documentation for global investors."
        },

        fr: {
        description: "Les prêts DSCR Foreign National sont destinés aux investisseurs internationaux souhaitant acheter ou refinancer des biens locatifs aux États-Unis. L’admissibilité repose sur les revenus du bien, avec une documentation simplifiée."
        },

        es: {
        description:  "Los préstamos DSCR para extranjeros están diseñados para inversionistas internacionales que desean comprar o refinanciar propiedades de alquiler en EE. UU. La calificación se basa en los ingresos de la propiedad, con requisitos de documentación simplificados."}
        ,
      },
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
              viewDetails={viewDetails}
              viewAll={viewAll}
              dscrText={dscrText}
            />
          }
        />
        <Route
          path="/loans"
          element={
            <Loans loanPrograms={loanPrograms} translations={translations} lang={lang}
            viewDetails={viewDetails}
             />
          }
        />
        <Route
          path="/Testimonials"
          element={
            <Testimonials
              testimonials={testimonials}
              translations={translations}
              lang={lang}
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
