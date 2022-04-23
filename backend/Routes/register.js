const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "<html> <head>This page was render direcly from the server</head><body><h1> USER and ADMIN please REGISTER!! <p>Hello there welcome to the landing page</p></h1></body></html>"
  );

  //     pool.query(
  //     "INSERT INTO user (username, email, password) VALUES (?,?,?)",
  //     [
  //       req.body.Email,
  //       req.body.username,
  //       req.body.Password,
  //       // All the user attributes collected on the frontend are sent to this API
  //     ],
  //     (err, result) => {
  //       if (err) {
  //         logger.error(err);
  //         res.send({ message: "Registration unsuccessfule" });
  //       } else {
  //         res.send({ message: "Registration Successful" });
  //       }
  //     }
  //   );
});

module.exports = router;
