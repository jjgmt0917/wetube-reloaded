import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {return res.end()};
const handleLogin = (req, res) => {return res.end("Login here.")};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log('Server listening on port http://localhost:4000 🚀');

app.listen(PORT, handleListening);

