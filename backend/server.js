import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("SERVER IS CONNECTED AND STARTED SUCCESSFULLY");
// });

//get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      title: "Parallel lines have so much in common.",
      content: "It’s a shame they’ll never meet.",
    },
    {
      id: 3,
      title: "Why don't programmers like nature?",
      content: "It has too many bugs.",
    },
    {
      id: 4,
      title: "Why do cows have hooves instead of feet?",
      content: "Because they lactose.",
    },
    {
      id: 5,
      title: "Why was the math book sad?",
      content: "Because it had too many problems.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${port}`);
});
