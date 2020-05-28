require("dotenv").config();
const send = require('gmail-send')({
    user:process.env.GMAIL_USERNAME,
    pass:process.env.GMAIL_PASSWORD
})
export const sendQuestion = async({name,phone,email,content})=>{
    return send({
        subject:"Zekang  Gửi Ý Kiến Chuyên Gia",
        to:process.env.GMAIL_TO,
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
    return send({
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