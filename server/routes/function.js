import express from 'express'
import redirect from '../controller/redirect.js'
import shorten from '../controller/shorten.js'
import getClicks from '../controller/clicks.js'

const router = express.Router()

router.get('/clicks', getClicks)
router.post('/shortenUrl', shorten)
router.get('/test', (req,res) => {res.send('Hello')})
router.get('/:code', redirect)

export default router
