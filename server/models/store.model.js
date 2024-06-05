const mongoose = require("mongoose");

let html ="";
const storeSchema = new mongoose.Schema({
    host: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }],
    staff:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }],
    name: { type: String, required: true },
    phone: [],
    email: { type: String },
    logo: { type: String },
    address: { type: String },
    nameBank: { type: String },
    numBank: { type: String },
    hostBank: { type: String },
    noteBill: { type: String },
    contract: { type: String, default: html },


},{ timestamps: true });


const Store = mongoose.model("store", storeSchema);

module.exports = Store;