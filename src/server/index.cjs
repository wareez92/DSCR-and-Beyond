const {
    client,
    createTables,
    createUser,
    fetchUsers
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
        })
    ]);

    
    console.log(await fetchUsers());
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
};

init();

// --------- ROUTES --------- //

app.post("/api/register/users", async (req, res, next) => {
  try {
    res.send(await createUser(req.body));
  } catch (error) {
    next(error);
  }
});
