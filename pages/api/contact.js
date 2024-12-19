import {mailOptions, transporter} from "../../Config/nodemailer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addmessage = async (req, res) => {
    try{
        const {name, email, message} = req.body;

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

        if(!name || !email || !message){
            return res.status(400).json({
                message: "please fill all fields",
                status: false,
                code: 400
            })
        }

        if(name.length < 2){
            return res.status(400).json({
                message: "name should be a minnimum of 2 characters",
                status: false,
                code: 400
            })
        }

        if(!emailRegex.test(email)){
            return res.status(400).json({
                message: "invalid email",
                status: false,
                code: 400
            })
        }

        await transporter.sendMail({
            ...mailOptions,
            subject: "English Lab Consultancy contact message",
            html: `<!DOCTYPE html><html lang="en"><body><div class=""><h1>English Lab Consultancy website Message</h1><p>Sender Email:<span> <a href="mailto:chikajunior19@gmail.com">${email}</a></span></p><p>Name:<span> ${name}</span></p><p>message:<span> ${message}</span></p></div></body></html>`
        })

        return res.status(200).json({
            message: "message sent successfull",
            status: true,
            code: 200
        })


    }
    catch(error){
        res.status(500).json({
            message: error.message,
            status: false,
            code: 500
        })
    }
}

export default Addmessage;