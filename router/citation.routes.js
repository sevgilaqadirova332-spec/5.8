const { Router } = require("express")

const auhtorization = require("../middleware/authorization")
const { addCitation, updateCitation, deleteCitation } = require("../controller/citaition.controller")

const citationRoutes = Router()

citationRoutes.post("/add_citation", addCitation)
citationRoutes.put("/update_book/:id", updateCitation)
citationRoutes.delete("/delete_book/:id", deleteCitation)

module.exports = citationRoutes 