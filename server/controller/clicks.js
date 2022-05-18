import validUrl from 'valid-url'
import Url from '../models/url.js'

const getClicks = async (req,res) => {

    if(!req.body) {
        return res.status(404).json({"message": "No url found"})
    }  

    const {shortUrl} = req.body
    console.log(shortUrl)

    if(!validUrl.isUri(shortUrl)) {
        return res.status(400).json({"message": "Invalid url"})
    }

    try {

        const url = await Url.findOne({shortUrl})
        if(url) {
            return res.json({"clicks": url.clicks})
        }
        res.status(404).json({"message": "No url found"})
        
    }
    catch (err) {
        
        res.status(500).json({"message": err.message})
    }
}

export default getClicks