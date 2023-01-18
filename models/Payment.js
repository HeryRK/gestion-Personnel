import mongoose from "mongoose";

const Schema = mongoose.Schema

const paymentSchema = new Schema({
    datePayment : {
        type: String,
        require: true
    },
    personal : {
        type: mongoose.Types.ObjectId,
        ref: "Personal"
    },
    isPayd: {
        type: Boolean,
        default: false
    }
})

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;