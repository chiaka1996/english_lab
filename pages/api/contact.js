import ConnectMongo from '../../utilis/MongoDb/connectDb';
import modelMessages from '../../Model/contact';
import {mailOptions, transporter} from "../../Config/nodemailer";

const AddMessage = async (req, res) => {
    try{
        await ConnectMongo()
        const {firstname, lastname, email, phone, message} = req.body;

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

        if(!firstname || !lastname || !phone || !email || !message){
            return res.status(400).json({
                message: "please fill all fields",
                status: false,
                code: 400
            })
        }

        if(firstname.length < 2 || lastname.length < 2){
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
            subject: "Slumtech Contact Message",
            html: `<!DOCTYPE html><html lang="en"><body><div class="">
            <h1>Slumtech Message</h1>
            <p>firstname:<span>${firstname}</span></p>
             <p>lastname:<span>${lastname}</span></p>
            <p>Email:<span>${email}</span></p>
            p>Phone:<span>${phone}</span></p>
            <p>message:<span>${message}</span></p>
            </div></body></html>`
        })

        const saveMessage = new modelMessages({
            firstname,
            lastname,
            email,
            phone,
            message
        })

        const response = await saveMessage.save()

        if(response){
            return res.status(200).json({
                message: "message sent",
                status: true,
                code: 200
            })
        }

    }
    catch(error){
        res.status(500).json({
            message: error.message,
            status: false,
            code: 500
        })
    }
}

export default AddMessage;