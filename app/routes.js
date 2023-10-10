const express = require("express");
const router = express.Router();
const ContactController = require("./controller/contact");
const programController = require('./controller/program')



router.get("/contact-us", ContactController.contactUs)
// Endpoint untuk menyimpan data kontak
router.post("/contact", ContactController.contact);

router.get("/program-register", programController.programRegister)
// Endpoint untuk menyimpan data pendaftaran program
router.post('/register', programController.program);

module.exports = router;


