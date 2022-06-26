import express from "express";

const PORT = 3000;

const app = express(); //  create express application

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(3000, handleListening);
// 유저의 request를 받아들임, 받아들일 port와 callback을 받음
// callback은 몇번 포트를 listening해줄지
