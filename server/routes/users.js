import express from 'express';
import validateInput from '../shared/validations/signup'

let router=express.Router()



router.post('/', (req,res) => {

    const {errors, isValid }= validateInput(req.body)

    //  checks if errors object has any error listed,.i.e if error object is not empty, outputs errors as json
    if (isValid) {
        res.json({success:true});
    } else {
        res.status(400).json(errors)
    }


  
})

export default router;