require("dotenv").config();
const send = require('gmail-send')({
    user:process.env.GMAIL_USERNAME,
    pass:process.env.GMAIL_PASSWORD
})
export const sendQuestion = async({name,phone,email,content})=>{
    return send({
        subject:"Website Gửi Câu Hỏi",
        to:process.env.GMAIL_TO,
        text:'Website Gửi Câu Hỏi',
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