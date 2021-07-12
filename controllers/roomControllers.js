import Room from "../models/rooms";


// Get All Room   =>   GET  =>  /api/room
const allRooms = async (req, res) => {

    try {
        const rooms = await Room.find();
        res.status(200).json({
            success: true,
            count: rooms.length,
            rooms
        })
    } catch(err){
        res.status(400).json({
            success: false,
            error: err.message
        })
    }

    
}


// Create new Room   =>  POST  =>   /api/room
const newRoom = async (req, res) => {
    try{
        const room = await Room.create(req.body);
        res.status(200).json({
            success: true,
            room
        })
    }catch(err){
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}


// Get Room Details   =>  POST  =>   /api/room/:id
const getSingleRoom = async (req, res) => {
    try{
        const room = await Room.findById(req.query.id);
        
        if(!room){
            return res.status(404).json({
                success: false,
                error: "Room not found with this ID."
            })
        }

        res.status(200).json({
            success: true,
            room
        })
    }catch(err){
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}


// Update Room Details   =>  PUT  =>   /api/room/:id
const updateRoomDetails = async (req, res) => {
    try{

        let room = await Room.findById(req.query.id);
        
        if(!room){
            return res.status(404).json({
                success: false,
                error: "Room not found with this ID."
            })
        }

        room = await Room.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            room
        })
    }catch(err){
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}


// Delete Room   =>  DELETE  =>   /api/room/:id
const deleteRoom = async (req, res) => {
    try{

        let room = await Room.findById(req.query.id);
        
        if(!room){
            return res.status(404).json({
                success: false,
                error: "Room not found with this ID."
            })
        }

        room = await Room.findByIdAndDelete(req.query.id );

        res.status(200).json({
            success: true,
            room
        })
    }catch(err){
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}


export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoomDetails,
    deleteRoom
}