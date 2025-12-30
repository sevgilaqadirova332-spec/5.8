const citationSchema = require("../schema/citation.schema")
const customErrorHandlerr = require("../utils/custom-error-handler")

const addCitation= async (req, res, next ) => {
    try{
     const {text,book_id,admin_id} = req.body

     await citationSchema.create({text,book_id,admin_id})

    res.status(201).json({
        message: "Added citation"
    })
    } catch (error) {
       next(error)
    }
}

const updateCitation = async (req, res, next) => {
    try{
        const {id} = req.params
         const {text,book_id,admin_id} = req.body
        const citation = await citationSchema.findById(id)

        if(!citation){
           throw customErrorHandlerr.NotFound("citaiton not found!")
        }

        await citationSchema.findByIdAndUpdate(id, {text,book_id,admin_id} )

        res.status(200).json({
            message: "Succesful update!"
        })

    } catch (error) {
        next(error)
    }
}
const deleteCitation = async (req, res, next ) => {
    try{
        const {id} = req.params
      
        const citaiton = await citationSchema.findById(id)

        if(!citaiton){
           throw customErrorHandler.NotFound("citation not found!")
        }

        await citationSchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "Succesful deleted!"
        })

    } catch (error) {
       next(error)
    }
}

module.exports = {
    addCitation,
    updateCitation,
    deleteCitation
}