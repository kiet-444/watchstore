var express = require("express");
const watchsController = require("../controllers/watchController");
const { authenticateToken } = require("../config/authWithJWT");
var router = express.Router();

router.route("/").all(authenticateToken).get(watchsController.getwatchsList_Api).post(watchsController.createwatchs_Api);
router
  .route("/:id")
  .all(authenticateToken)
  .get(watchsController.getwatchsById_Api)
  .delete(watchsController.deletewatchsById_Api)
  .put(watchsController.updatewatchsById_Api);

module.exports = router;
