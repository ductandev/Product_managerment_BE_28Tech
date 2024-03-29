const express = require("express")
const multer = require('multer')
const router = express.Router();

// =========== UPLOAD ẢNH DƯỚI LOCAL ================
// const storageMulter = require("../../helpers/storageMulter.js")
// const upload = multer({ storage: storageMulter() });
// ==================================================
const upload = multer()


const controller = require("../../controllers/admin/product.controller.js")
const validate = require("../../validates/admin/product.validate.js")

const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware.js")

router.get("/", controller.index)

router.patch("/change-status/:status/:id", controller.changeStatus)

router.patch("/change-multi", controller.changeMulti);

router.delete("/delete/:id", controller.deleteItem);

// Dùng phương thức GET để vẽ ra giao diện, sau đó người dùng nhập vào input và gửi dữ liệu lên thì dùng phương thức POST
router.get("/create", controller.create);
router.post(
    "/create",
    upload.single('thumbnail'),
    // ============== CLOUDINARY ============
    uploadCloud.upload,
    // ======================================
    validate.createPost,
    controller.createPost
);

router.get("/edit/:id", controller.edit)
router.patch(
    "/edit/:id",
    upload.single('thumbnail'),
    validate.createPost,
    controller.editPatch
)

router.get("/detail/:id", controller.detail)

module.exports = router;