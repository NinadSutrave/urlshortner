import mongoose from "mongoose"

const Schema = mongoose.Schema

const UrlSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

const Url = mongoose.model("url", UrlSchema)

export default Url