import express from 'express'
import redirect from '../controller/redirect.js'
import shorten from '../controller/shorten.js'

const router = express.Router()

router.get('/test', (req,res) => {res.send('Hello')})
router.get('/:code', redirect)
router.post('/shortenUrl', shorten)

export default router
