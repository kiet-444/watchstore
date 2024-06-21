const router = require('express').Router()

router.get("/", HomeController.getWatch)
router.get("/detail-watch/:id", HomeController.getWatchDetail)

module.exports = router;