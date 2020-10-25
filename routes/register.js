const express = require("express");
const router = express.Router();


const Registration = require("../functions/postFunctions/Registration");
const getRegister = require("../functions/postFunctions/getRegister");

router.post("/", Registration);

router.get("/", getRegister);



module.exports = router;
