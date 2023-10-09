const express = require("express");
const router = express.Router();
const ContactController = require("./controller/contact");
const programController = require('./controller/program')



router.get("/contact-us", ContactController.contactUs)
// Endpoint untuk menyimpan data kontak
router.post("/contact", ContactController.contact);

// Endpoint untuk menyimpan data pendaftaran program
router.post('/register', programController);

module.exports = router;


