import ConnectMongo from '../../utilis/MongoDb/connectDb';
import modelRegister from '../../Model/register';

const Register = async (req, res) => {
    try{
        await ConnectMongo()
        const {firstname, lastname, email, phone, address, skills, interest, availability, whyVolunteer} = req.body;

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

        if(!firstname || !lastname || !email || !phone || !address || !skills || !interest || !availability || !whyVolunteer){
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

        const saveVolunteer = new modelRegister({
            firstname,
            lastname,
            email,
            phone,
            address,
            skills,
            interest,
            availability,
            whyVolunteer
        })

        const response = await saveVolunteer.save()

        if(response){
            return res.status(200).json({
                message: "registered successfull",
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

export default Register;