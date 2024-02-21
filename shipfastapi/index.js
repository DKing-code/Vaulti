const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { required } = require('nodemon/lib/config')

// connect to mongoose
mongoose.connect("mongodb+srv://d_hacker:dekin11@cluster0.dvr8nwc.mongodb.net/?retryWrites=true&w=majority/test").then(resp=>{
    console.log("Connected to MongoDB")

}).catch(err=>{
    console.log(err)
})

//*****************************************!SECTION  */ creating newShipping Schema
const newShippingSchema = new mongoose.Schema({
    shippingNo : {type:String,require:true},
    stepNo: {type:Number,maxLength:4},
    receiverName : {type:String, require:true},
    receiverAddress : {type:String, require:true},
    receiverPhone : {type:String, require:true},
    receiverCountry : {type:String, require:true},
    senderName : {type:String, require:true},
    senderAddress : {type:String, require:true},
    senderPhone : {type:String, require:true},
    senderCountry : {type:String, require:true},
    itemName : {type:String, require:true}
  })
// creating model for the newSHipping
const newShippingModel = mongoose.model('newshipping',newShippingSchema)

//*********************************************!SECTION  adding new update schema ********************************************* */ 
const newUpdate = new mongoose.Schema({
    shippingNo : {type:String,require:true},
    title : {type:String, require:true},
    note : {type:String, require:true},
    color : {type:String, require:true},
    date : {type:String, require:true},
})
// creating model for the newSHipping
const newUpdateModel = mongoose.model('newUpdate',newUpdate)


// *******************************************************!SECTION CREATING A NEW VAULT ACCONT
const newVaultUser = new mongoose.Schema({
    email:{type:String,require : true},
    firstname:{type:String,require : true},
    lastname:{type:String,require: true},
    username: {type:String,require:true},
    dob: {type:String,require:true},
    sex: {type:String,require:true},
    password : {type:String,require:true}
})
const newVaultModel = mongoose.model('user',newVaultUser)


// ***********************************************************!SECTION VAULT DETAILS ****
const vaultDetail = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
      },
    ourref : {type:String,require:true},
    securitycode : {type:String,require:true},
    nationality : {type:String,require:true},
    occupation : {type:String,require:true},
    country : {type:String,require:true},
    vaultId: {type:String,require:true},
    depositeDate : {type:String,require:true},
    address : {type:String,require:true},
    itemname : {type:String,require:true},
    purpose_of_deposit : {type:String,require:true},
    weight : {type:String},
    purity : {type:String},
    carat : {type:String},
    charge : {type:String,require:true},
    next_of_kin : {type:String,require:true},
    
})
const vaultDetailModel = mongoose.model('vault',vaultDetail)


const app = express()
app.use(express.json())
app.use(cors())


// ************************************!SECTION ADDING A NEW SHIPPING ***************************************
app.post('/newShipping',async(req,res)=>{
    const data = req.body
    try{
        const addNewShipping = await newShippingModel.create(data)
        if(!addNewShipping) return res.status(401).json({msg:'Failed, Can add shipping'})
        return res.json(addNewShipping)
    }catch(err){
        console.log(err)
    }
})

//******************************!SECTION GETTING SHIPPING BY TRACKING NUMBER ***************************** */
app.get('/getShipping/:trackNo', async(req,res)=>{
    const {trackNo} = req.params
    try{
        const getEntry = await newUpdateModel.find().where('shippingNo').equals(trackNo).sort({'title':-1})
        const getShipping = await newShippingModel.find().where('shippingNo').equals(trackNo)

        if(!getEntry || !getShipping ) {
            return res.status(401).json('Fetching data failed incorrect Number')
        }
        return res.json({getEntry,getShipping})
    }catch(err){
        console.error(err)
    }
})

// **********************************!SECTION ENTERING A NEW SHIPPING UPDATE *********************************************************
app.post('/newEntry',async(req,res)=>{
    const data = req.body
    try{
        const addNewUpdate = await newUpdateModel.create(data)
        if(!addNewUpdate) return res.status(401).json({msg:'Failed, Can add shipping'})
        return res.json(addNewUpdate)
    }catch(err){
        console.log(err)
    }
})




// *******************************************!SECTION ADDING NEW USER IN VAULT USER
app.post('/addUser', async (req, res) => {
    const data = req.body;
    try {
        const newUser = await newVaultModel.create(data);
        if (!newUser) return res.status(401).json({ msg: 'User cannot be created' });
        res.status(200).json(newUser); // Return the created user object
    } catch (err) {
        
        res.status(500).json({ msg: 'Server Error' });
    }
});


// **************************************************!SECTION ADDING NEW ITEM IN VAULT *******************************************************
app.post('/addVault',async(req,res)=>{
    const data = req.body
    try{
        const newVault = await vaultDetailModel.create(data);
        if(!newVault) return res.status(401).json({msg:'User cannot be created'})
        res.status(200).json(newVault)
    }catch(err){
        res.status(500).json({ msg: 'Server Error' });
    }
})



// ******************************************!SECTION GET VAULT ***************************************************************************
app.post('/login',async(req,res)=>{
    const data = req.body
    console.log(data)
    try{
        const login = await newVaultModel.findOne(data)
        if(!login) return res.status(401).json({msg:"Invalid Credentials"})
        const userVault = await vaultDetailModel.find({user:login._id}).populate('user')
        res.json(userVault)
    }catch(err){
        console.log(err)
    }
})



app.listen(4000,()=>{
    console.log('connected')
})