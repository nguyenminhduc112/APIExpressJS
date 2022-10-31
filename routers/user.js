const  express = require("express");
const User = require("../models/User");
const router = express.Router();

// Get all user
router.get('/', async (req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({message:error});
    }
});

// Get one user by userId
router.get('/:userId', async (req,res)=>{
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (error) {
        res.json({message:error});
    }
});
// Create one user
router.post('/', async (req,res)=>{
    console.log(req.body)
   
    const user = new User({
        display:req.body.display,
        username: req.body.username,
        password:req.body.password,
    });
    try {
        const userSaved =  await user.save();
        res.json(userSaved);
    } catch (error) {
        res.json({message:error});
    }   
});
// Update one user by userId
router.patch('/:userId', async (req,res)=>{
    try {
        const updatedUser = await User.updateOne(
            {_id: req.params.userId},
            {$set:{
                display:req.body.display,
                username: req.body.username,
                password:req.body.password,
            }}
        );
        res.json(updatedUser);
    } catch (error) {
        res.json({message:error});
    }
});
// Delete one user by userId
router.delete('/:userId', async (req,res)=>{
    try {
        const removeUser = await User.remove({_id:req.params.userId})
        res.json(removeUser)
    } catch (error) {
        res.json({message:error});
    }
});
module.exports = router;