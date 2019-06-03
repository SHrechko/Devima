const express = require("express");
const path = require("path");
const fs = require("fs");
const nodeMailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static(path.resolve("./client/build")));
app.get("/", (req, response) => {
  fs.readFile("./client/build/index.html", function(err, html) {
    if (err) {
      throw err;
    }
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
  });
});

// create a GET route
app.post("/send-email", (req, res) => {
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "youremail@gmail.com", //input your email
      pass: "your mail password" //input your password by email
    },
    tls: {
      rejectUnauthorized: true
    }
  });

  let mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`, // sender address
    to: "sorrowww150@gmail.com", // list of receivers
    subject: "Message from Devima servise user", // Subject line
    text: `${req.body.message}` // plain text body
    // html: `<b>${req.body.message}</b>` // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.send({ success: true });
  });
});
