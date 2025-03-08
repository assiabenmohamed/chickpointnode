import nodemailer from "nodemailer";
import "dotenv/config";
const transporter = nodemailer.createTransport({
  service: "gmail", // true for port 465, false for other ports
  auth: {
    user: "assiabenmohamed18@gmail.com",
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
const info = await transporter.sendMail({
  from: '"assia ben mohamed 👻" <assiabenmohamed18@gmail.com>', // sender address
  to: "assiabenmohamed18@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
});
