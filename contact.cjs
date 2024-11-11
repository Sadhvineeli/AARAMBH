const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'));

app.get('/', (req, res) => {
  // console.log('Handling GET request for /');
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/index.html', (req, res) => {
  // console.log('Handling GET request for /index.html');
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/styling.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'styling.css'), { 'Content-Type': 'text/css' });
});

app.get('/contact.html', (req, res) => {
  console.log('Handling GET request for /contact.html');
  res.sendFile(path.join(__dirname, 'contact.html'));
});


app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'style.css'), { 'Content-Type': 'text/css' });
});


// /Contact form endpoint
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // /console.log('Form Data:', { name, email, subject, message });

  // /Configure the transporter
  require('dotenv').config();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });


  // Email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    // to: 'msuma3059@gmail.com', 
    to: 'afshanaaz0409@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // /Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send('Internal Server Error');
    // } else {
      // const successMessage = '<html><head><style>p { color: green; font-weight: bold; }</style></head><body><p>Email sent successfully with styles!</p></body></html>';
      // res.status(200).send(successMessage);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
