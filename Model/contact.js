import  {Schema, model, models} from 'mongoose';

const messageSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },
},
{
    timestamps: true
}
);

const messages = models.messages ||  model('messages', messageSchema);

export default messages;