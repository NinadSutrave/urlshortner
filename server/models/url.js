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
    }
})

const Url = mongoose.model("url", UrlSchema)

export default Url