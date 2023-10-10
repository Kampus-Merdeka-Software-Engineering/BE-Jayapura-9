// controllers/programController.js
const Program = require("../model/program");

async function programRegister(req, res){
    try {
        const header = await Program.findAll();
        res.json(header);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Fungsi untuk menyimpan data pendaftaran program
async function program(req, res) {
    try {
    const program = await Program.create(req.body);
    res.json({ success: true, program });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    program,
    programRegister
}
