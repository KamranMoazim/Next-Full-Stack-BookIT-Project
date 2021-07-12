import Room from "../models/rooms";


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


// Create new Room   =>   /api/room
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


export {
    allRooms,
    newRoom
}