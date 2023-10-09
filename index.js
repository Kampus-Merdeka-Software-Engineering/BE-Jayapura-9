const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const connection = require('./app/model/index')



app.use(cors());
app.use(express.json()); // supaya express bisa response json
app.use(express.urlencoded({ extended: false })); // supaya express bisa menerima body

// Gunakan middleware untuk memberikan akses ke folder "public"
app.use(express.static(path.join(__dirname, "public")));

// Import router dari file "routes.js"
const routes = require("./app/routes");

// Gunakan rute yang telah Anda buat dalam "routes.js"
app.use("/", routes);

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
    connection.authenticate()
    .then(function(){
        console.log("Database terhubung")
    })
    .catch(function(err){
        console.log("Error saat koneksi ke database", err)
        process.exit()
    })
});
