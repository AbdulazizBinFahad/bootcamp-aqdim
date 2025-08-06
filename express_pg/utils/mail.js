import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_SMTP,
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  }
});

export const sendMail = async (activation_code, email) => {
    await transporter.sendMail({
    from: '"Abdulaziz Store" <no-reply@azizcodes.com>',
    to: `${email}, ${email}`,
    subject: "Active your account now",
    text: "This is your activation code ...", // plain‑text body
    html: `<b>This is your activation code ${activation_code}</b>`, // HTML body
  });
}