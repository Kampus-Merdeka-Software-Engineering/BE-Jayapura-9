const Contact = require("../model/contact");


async function contactUs(req, res){
    try {
        const header = await Contact.findAll();
        res.json(header);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function contact(req, res) {
    try {
        const contact = await Contact.create(req.body);
        res.json({ success: true, contact });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }

}

module.exports = {
    contactUs,
    contact
}