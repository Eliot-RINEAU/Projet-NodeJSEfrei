const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js");

// MIDDLEWARE
app.use(express.json());

// USERS ENDPOINT
app.use("/api/users", usersRouter);

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
