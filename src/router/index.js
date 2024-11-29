import express from 'express'

import Controller from '../controller'
import Games from '../controller/games'
import Tech from '../controller/tech'
const validator = require('validator')
const router = express.Router()

router.get('/', Controller.getGreet)
router.get('/detail/:year/:month/:day/:key', Controller.getDetail)
router.get('/search', Controller.getSearch)

router.get('/games', Games.getGame)
router.get('/games/console-game', Games.getConsole)
router.get('/games/e-sport/', Games.getESport)
router.get('/games/news', Games.getGameNews)
router.get('/games/lazy-talk', Games.getLazyTalk)
router.get('/games/pc', Games.getPc)
router.get('/games/review', Games.getGameReview)

router.get('/tech', Tech.getTech)
router.get('/tech/cranky-lounge', Tech.getCrankyLounge)
router.get('/tech/news', Tech.getTechNews)
router.get('/tech/setup', Tech.getSetup)
router.get('/tech/recommend', Tech.getRecommend)
router.get('/tech/review', Tech.getReview)
router.get('/tech/tip', Tech.getTechTip)
router.post('/subscribe', (req, res) => {
  const { email } = req.body

  // Validasi email
  if (!email) {
    return res.status(400).json({
      status: 'error',
      message: 'Email is required',
    })
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid email format',
    })
  }

  // Jika valid, kirimkan response sukses
  return res.status(200).json({
    status: 'success',
    message: `Successfully subscribed with email: ${email}`,
    data: {
      email: email,
    //   subscriptionDate: new Date().toISOString(),
    },
  })
})

export default router
