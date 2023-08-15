const express = require("express")
const router = express.Router()
const projectcontrollers = require("../controllers/project")
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage,

})
router.post("/ajoutcategorie", upload.any('image'), projectcontrollers.createcategorie)
router.post("/ajoutprojet/:id", upload.any('files', 30), projectcontrollers.createProject);
router.get("/getallcategorie",projectcontrollers.getcategorie)
router.get("/getallproject",projectcontrollers.getProject)

module.exports = router