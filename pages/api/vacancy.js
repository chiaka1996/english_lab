import ConnectMongo from '../../utilis/MongoDb/connectDb';
import Resume from '../../Model/vacancy';
const cloudinary = require('cloudinary').v2
const formidable = require('formidable')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARYY_API_SECRET
})

export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };


const AddCv = async (req, res) => {
    try{
        await ConnectMongo();
        const form = new formidable.IncomingForm({ keepExtensions: true });

        form.parse(req, async function (err, fields, files) {
            if(err){
                return res.status(400).json({
                    message: err.message,
                    status: false,
                    code: 400
                })
            }
           
          const cv = files.cv[0].filepath;

          let {firstname, lastname, email, phone, address, position, yearsOfExperience, coverLetter} = fields;
        
            firstname = firstname[0]
            lastname = lastname[0]
            email = email[0]
            phone = phone[0]
            address = address[0]
            position = position[0]
            yearsOfExperience = yearsOfExperience[0]
            coverLetter = coverLetter[0]
           

            if(!firstname || !lastname || !email || !phone || !address || !position || !yearsOfExperience || !coverLetter){
            return res.status(400).json({
                message: "please fill all required fields",
                code: 400,
                status: false
            })
          }

          const result =  await cloudinary.uploader.upload(cv,{width: 2500, height: 3500, crop: "fill"})
          if(result){
                const newResume = new Resume({
                cv: result.secure_url,
                cloudinaryIdCV: result.public_id,
                firstname,
                lastname,
                email,
                phone,
                address,
                position,
                yearsOfExperience,
                coverLetter                 
          })
           

          const saveCV = await newResume.save();
          if(saveCV){
            return res.status(200).json({
                message: "saved successfully",
                code: 200,
                status: true
            })
          }
        }
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

export default AddCv;