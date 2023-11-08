const Restaurant = require('../models/restaurant');

const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const updatedImageCloudinary =async (req=request,res=response)=>{
    const {id,collection} = req.params;
        let model;
        switch (collection) {
            case 'restaurant':
                model= await Restaurant.findByPk(id);
                    if(!model){
                        return res.status(400).json({
                            msg:'does not exist store with id'
                        })
                    }
                break;
            default:
                return res.status(500).json({msg:'You forgot validate this'})
        }
        if(model.photo){
            const nameArr = model.photo.split('/');
            const name = nameArr[nameArr.length-1];
            const [public_id] = name.split('.');
            cloudinary.uploader.destroy(public_id);
          
        }
        const {tempFilePath}= req.files.photo;
        const {secure_url} = await cloudinary.uploader.upload(tempFilePath)
        model.photo = secure_url
        await model.save();
        
        res.json(model);
    }

    module.exports = {
        updatedImageCloudinary
    }