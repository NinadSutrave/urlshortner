//import model
import Url from '../models/url.js'

const redirect = async (req,res) => {

    if(!req.params.code) {
        res.json({"message": "No code found"})
    }

    const code = req.params.code

    try {
        const url = await Url.findOne({ code })

        if(url.longUrl) {
            return res.redirect(url.longUrl)
        }

        return res.status(404).json({"message": "No url found"})
    }
    catch (err) {
        res.status(500).json({"message": err.message})
    }
}

export default redirect