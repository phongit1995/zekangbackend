require("dotenv").config();
const nodemailer = require("nodemailer");
const send = require('gmail-send')({
    user:process.env.GMAIL_USERNAME,
    pass:process.env.GMAIL_PASSWORD
})
let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "phong5202368@st.utc.edu.vn", // generated ethereal user
      pass: "Phongit1995", // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
  });
export const sendQuestion = async({name,phone,email,content})=>{
    return transporter.sendMail({
        from: '"zekang 👻" <phong5202368@st.utc.edu.vnYU>',
        subject:"Zekang  Gửi Ý Kiến Chuyên Gia",
        to:process.env.GMAIL_TO,
        //to:"phongit1995@gmail.com",
        text:'Zekang  Gửi Ý Kiến Chuyên Gia',
        html:`
            <div>
                <p> Tên Người Gửi : ${name}</p>
                <p> Số Điện Thoại : ${phone}</p>
                <p> Email : ${email}</p>
                <p> Nội Dung : ${content}</p>
            </div>
        `
    })
}
export const sendEmail = async({title,name,address,email,message})=>{
    return  transporter.sendMail({
        from: '"zekang 👻" <phong5202368@st.utc.edu.vnYU>',
        subject:"Zekang  Gửi Liên Hệ",
        to:process.env.GMAIL_TO,
        text:'Zekang  Gửi Liên Hệ',
        html:`
            <div>
                <p> Tiêu Đề : ${title}</p>
                <p> Tên Người Gửi : ${name}</p>
                <p> Địa Chỉ : ${address}</p>
                <p> Email : ${email}</p>
                <p> Tin Nhắn : ${message}</p>
            </div>
        `
    })
}