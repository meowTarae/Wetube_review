import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express(); //  create express application
const logger = morgan("dev");

const handleHome = (req, res) => {
  console.log(`Method : ${req.method}, URL : ${req.url}`);
  return res.end("<h1>Homepage</h1>");
};

const protectController = (req, res, next) => {
  const URL = req.url;
  if (URL === "/protect") {
    return res.send("<h1>You can't access this page.</h1>");
  }
  next();
};

app.use(logger);
app.use(protectController);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
// 유저의 request를 받아들임, 받아들일 port와 callback을 받음
// callback은 몇번 포트를 listening해줄지
