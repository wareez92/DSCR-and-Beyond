const {
  client,
  createTables,
  createUser,
  fetchUsers,
  fetchPortfolio,
  createPortItem,
} = require("./db.cjs");

const express = require("express");
const app = express();

app.use(express.json());

const init = async () => {
  await client.connect();
  await createTables();

  const [wareez, sese] = await Promise.all([
    createUser({
      username: "wareez",
      password: "wareez_pw",
      email: "wareez92@gmail.com",
      isAdmin: true,
    }),
    createUser({
      username: "sese",
      password: "sese_pw",
      email: "sesentem@guzzoandco.com",
      isAdmin: true,
    }),
  ]);

  const [] = await Promise.all([
    createPortItem({
      portName: "1508 De La Vina",
      portAddress: "1508 De La Vina St, Santa Barbara, CA 93101",
      portImage:
        "https://photos.zillowstatic.com/fp/76e2f4aa5994e061e587704288c232a7-cc_ft_960.webp",
      portImage2:
        "https://photos.zillowstatic.com/fp/4e9e6ceab8eebed003b7a39777282cb5-cc_ft_576.webp",
      portImage3:
        "https://photos.zillowstatic.com/fp/76e2f4aa5994e061e587704288c232a7-cc_ft_960.webp",
      description_en:
        "Charming 2-bed, 1-bath cottage in the heart of downtown Santa Barbara, built in 1917 and spanning approximately 800 ft². Located on a ~3,049 ft² lot, this home features a cozy front porch, fruit trees, and two detached garages (one oversized). Recently updated plumbing (Nov 2024). AS-IS probate sale with strong renovation potential and excellent proximity to State Street, transit, and Highway 101.",
      description_fr:
        "Charmante maison de 2 chambres et 1 salle de bain située au cœur du centre-ville de Santa Barbara, construite en 1917 et offrant environ 74 m². Implantée sur un terrain d’environ 283 m², elle dispose d’un porche accueillant, d’arbres fruitiers et de deux garages détachés (dont un surdimensionné). Plomberie récemment mise à jour (novembre 2024). Vente en l’état avec fort potentiel de rénovation et excellente proximité de State Street, des transports et de l’autoroute 101.",
      descritpion_es:
        "Encantadora casa de 2 dormitorios y 1 baño en el corazón del centro de Santa Bárbara, construida en 1917 y con aproximadamente 74 m². Ubicada en un lote de unos 283 m², cuenta con un acogedor porche, árboles frutales y dos garajes independientes (uno de gran tamaño). Plomería actualizada en noviembre de 2024. Venta en condición AS-IS con gran potencial de renovación y excelente acceso a State Street, transporte y la autopista 101",
    }),
    createPortItem({
      portName: "222 W Chestnut Ave",
      portAddress: "222 W Chestnut Ave, Lompoc, CA 93436",
      portImage:
        "https://photos.zillowstatic.com/fp/ca5418d602180f249ed1cbb4ec0ce113-cc_ft_960.webp",
      portImage2:
        "https://photos.zillowstatic.com/fp/1170b5cf138b4bf317e874e852b07b07-uncropped_scaled_within_1536_1152.webp",
      portImage3:
        "https://photos.zillowstatic.com/fp/476ecde45eeb0cd881c38e8c8f434d74-uncropped_scaled_within_1536_1152.webp",
      description_en:
        "Classic single-story home built in 1926 with approximately 1,404 ft² of living space on a 10,454 ft² lot. Includes 3 bedrooms, 2 bathrooms, hardwood and tile floors, a brick fireplace, and a detached finished two-car garage with storage. Mature fruit trees and lush hedges surround the property, making it ideal for charm lovers and ADU potential.",
      description_fr:
        "Maison moderne de deux étages construite en 2016 offrant environ 245 mMaison de plain-pied classique construite en 1926 offrant environ 130 m² sur un terrain de 971 m². Elle comprend 3 chambres, 2 salles de bain, des sols en bois et carrelage, une cheminée en brique et un garage détaché pour deux voitures avec espace de rangement. Des arbres fruitiers matures et des haies luxuriantes entourent la propriété, idéale pour le charme et le potentiel d’ADU.",
      descritpion_es:
        "Casa clásica de una sola planta construida en 1926 con aproximadamente 130 m² de superficie en un lote de 971 m². Cuenta con 3 dormitorios, 2 baños, pisos de madera y baldosas, chimenea de ladrillo y garaje independiente para dos autos con espacio de almacenamiento. Rodeada de árboles frutales y setos, es ideal por su encanto y potencial para una ADU.",
    }),
    createPortItem({
      portName: "11004 Comiskey Lane",
      portAddress: "11004 Comiskey Ln, Charlotte, NC 28273",
      portImage:
        "https://photos.zillowstatic.com/fp/9ce1ceba253db6e66b6ee316a672c99e-cc_ft_960.webp",
      portImage2:
        "https://photos.zillowstatic.com/fp/2da8053b0640c60a661fd2c04eacbdea-cc_ft_576.webp",
      portImage3:
        "https://photos.zillowstatic.com/fp/79ab4174cac03e7ac722296c307266b4-cc_ft_576.webp",
      description_en:
        "Modern two-story home built in 2016 with approximately 2,637 ft² of living space. Featuring 4 bedrooms, 2.5 bathrooms, and a rare 3-car garage, this Steele Creek property includes hardwood floors, open layout, granite countertops, stainless appliances, office/game room, loft, and a luxury primary suite. Located on a cul-de-sac with no HOA.",
      description_fr:
        "Maison moderne de deux étages construite en 2016 offrant environ 245 m². Elle comprend 4 chambres, 2,5 salles de bain et un rare garage pour 3 voitures. Elle dispose de sols en bois, d’un plan ouvert, de comptoirs en granit, d’appareils en acier inoxydable, d’un bureau/salle de jeux, d’un loft et d’une suite principale luxueuse. Située dans un cul-de-sac sans HOA.",
      descritpion_es:
        "Casa moderna de dos pisos construida en 2016 con aproximadamente 245 m². Incluye 4 dormitorios, 2.5 baños y un raro garaje para 3 autos. Cuenta con pisos de madera, diseño abierto, encimeras de granito, electrodomésticos de acero inoxidable, oficina/sala de juegos, loft y una suite principal de lujo. Ubicada en un cul-de-sac sin HOA.",
    }),
    createPortItem({
      portName: "1881 Millstream Holw, Conyers",
      portAddress: "1881 Millstream Holw, Conyers, GA 30012",
      portImage:
        "https://photos.zillowstatic.com/fp/b0f9d802ddd7e24d53637c93464e0afe-cc_ft_960.webp",
      portImage2:
        "https://photos.zillowstatic.com/fp/97c17523c18ad16f479626fc35a00fc3-cc_ft_576.webp",
      portImage3:
        "https://photos.zillowstatic.com/fp/21a728e3d2acfdaa4ac3712ddce95e5a-cc_ft_960.webp",
      description_en:
        "Contemporary townhouse built in 2018 offering 1,589 ft² of living space with 3 bedrooms and 2.5 bathrooms. Features include granite countertops, stainless appliances, LVP flooring, walk-in closets, and an attached garage. Located in a sidewalk community with HOA amenities around $160/year.",
      description_fr:
        "Maison de ville contemporaine construite en 2018 offrant environ 148 m² avec 3 chambres et 2,5 salles de bain. Elle comprend des comptoirs en granit, des appareils en acier inoxydable, des sols LVP, des dressings et un garage attenant. Située dans une communauté avec trottoirs et services HOA d’environ 160 $/an.",
      descritpion_es:
        "Casa adosada contemporánea construida en 2018 con aproximadamente 148 m², 3 dormitorios y 2.5 baños. Incluye encimeras de granito, electrodomésticos de acero inoxidable, pisos LVP, vestidores y garaje adjunto. Ubicada en una comunidad con aceras y HOA de aproximadamente $160 al año.",
    }),
  ]);

  const [] = await Promise.all([]);

  console.log(await fetchUsers());
  console.log(await fetchPortfolio());
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
};

init();

// console.log(await fetchUsers());
// console.log(await fetchPortfolio());

// --------- ROUTES --------- //

app.post("/api/register/users", async (req, res, next) => {
  try {
    res.send(await createUser(req.body));
  } catch (error) {
    next(error);
  }
});
