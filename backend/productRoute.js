const express = require("express");
const router = express.Router();

router.route("/ads").get(getAllProducts);

module.exports = router;
