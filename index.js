const express = require('express');
const allRoutes = require('./controllers');
const cors = require("cors")
const sequelize = require('./config/connection');
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const { Invoice, Job, Receipt, User, JobCategory } = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// app.use('/', allRoutes);

sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });

});
// ------------------------------------------------------------------------------

// const express = require('express');
const nodemailer = require("nodemailer");
// const cors = require("cors");
// const app = express();
// const port = 5001;

// app.use(cors());
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow_Origin", "*");
//     next();
// });

function sendEmail({ recipient_email , subject , message }) {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "boisefosters@gmail.com",
                pass: "ppjnqkpgckvlgbpp",
            }
        });

        const mailConfig = {
            from: "YO! <boisefosters@gmail.com>",
            to: recipient_email,
            subject: subject,
            text: message,
        };
        
        transporter.sendMail(mailConfig, function(error, info) {
            if(error) {
                console.log(error);
                return reject({ message: `An error has occurred`});
            } 
            return resolve({ message: "Email sent successfully!" });
        });
    });
}



app.post("/send_email", (req, res) => {
    const { recipient_email , subject , message } = req.body;
    sendEmail({ recipient_email , subject , message })
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// app.listen(port, () => {
//     console.log(`Practice server for mail tests listening st http://localhost:${port}`);
// });
