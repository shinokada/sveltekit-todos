import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const user = process.env['MAILTRAP_USER']
const pass = process.env['MAILTRAP_PASS']

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user,
    pass
  }
});

export const sendConfirmationEmail = (name, email, confirmationCode) => {
  
  transport.sendMail({
    from: '"Grade Chart" <hello@grade-chart.com>',
    to: email,
    subject: "Please confirm your account",
    html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=http://localhost:3000/confirm/${confirmationCode}> Click here</a>
        </div>`,
  }).catch(err => console.log(err));
};