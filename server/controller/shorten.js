import shortid from 'shortid'
import validUrl from 'valid-url'
import Url from '../models/url.js'

const shorten = async (req,res) => {

    console.log(req.body)

    if(!req.body) {
        return res.status(404).json({"message": "No url found"})
    }  

    const {longUrl} = req.body
    console.log(longUrl)

    if(!validUrl.isUri(longUrl)) {
        return res.status(400).json({"message": "Invalid url"})
    }

    try {

        const url = await Url.findOne({longUrl})

        if(url) {
            return res.json(url)
        }

        const code = shortid.generate()
        const baseUrl = process.env.BASE_URL
        const shortUrl = baseUrl + code
        const clicks = 0

        const urlData = new Url({
            code,
            longUrl,
            shortUrl,
            clicks
        })

        await urlData.save()
        res.json(urlData)
    }
    catch (err) {
        
        res.status(500).json({"message": err.message})
    }
}

export default shorten