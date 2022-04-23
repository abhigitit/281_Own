const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "<html> <head>This page was render direcly from the server</head><body><h1> USER LOGIN!! <p>Hello there welcome to the landing page</p></h1></body></html>"
  );

  //     pool.query(
  //     "SELECT * from user where p_id = ?",
  //     [req.body.Email],
  //     (err, result) => {
  //       if (err || Object.keys(result).length === 0) {
  //         res.send({ message: "Incorrect Password or Not registered" });
  //       } else if (req.body.Password !== result[0].password) {
  //         res.send({ message: "Incorrect Password or Not registered" });
  //       } else {
  //         res.send({ message: "Logged in successfully" });
  //       }
  //     }
  //   );
});

module.exports = router;
