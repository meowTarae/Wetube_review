import express from "express";

const PORT = 4000;

const app = express(); //  create express application

const handleHome = (req, res) => {
  return res.end("<h1>Homepage</h1>");
};

app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
// 유저의 request를 받아들임, 받아들일 port와 callback을 받음
// callback은 몇번 포트를 listening해줄지
