import mongoose from "mongoose";

const Schema = mongoose.Schema

const paymentSchema = new Schema({
    datePayment : {

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