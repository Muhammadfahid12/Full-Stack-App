import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/quote", (req, res) => {
  const quotes = [
    {
      id: 1,
      quote: "It's choices that decide our future",
      name: "Amir",
    },
    {
      id: 2,
      quote: "It's choices vs reason",
      name: "Ali",
    },
    {
      id: 3,
      quote: "Don't complain, Don't Explain",
      name: "Simon Sinek",
    },
    {
      id: 4,
      quote: "Just Do it",
      name: "Nike",
    },
    {
      id: 5,
      quote: "if you're breathing,you've time to do something",
      name: "Mike",
    },
    
  ];

  res.send(quotes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server is running on port ", port);
});
