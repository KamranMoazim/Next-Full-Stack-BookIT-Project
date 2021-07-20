import Room from "../models/rooms";

import ErrorHandler from "../utils/errorHandler";
import catchAsyncErrors from "../middlewares/catchAsyncErrors";
import APIFeatures from "../utils/apiFeatures";

// Get All Room   =>   GET  =>  /api/room
const allRooms = catchAsyncErrors( async (req, res) => {

    const resPerPage = 4;
    const roomsCount = await Room.countDocuments();

    const apiFeatures = new APIFeatures(Room.find(), req.query)
    .search()
    .filter();
    // apiFeatures.search();    // can be like this in above line

    let rooms = await apiFeatures.query;
    let filteredRoomsCount = rooms.length;

    apiFeatures.pagination(resPerPage);
    rooms = await apiFeatures.query()

    res.status(200).json({
        success: true,
        roomsCount,
        resPerPage,
        filteredRoomsCount,
        rooms
    }) 
})


// Create new Room   =>  POST  =>   /api/room
const newRoom = catchAsyncErrors(async (req, res) => {

    const room = await Room.create(req.body);
    res.status(200).json({
        success: true,
        room
    })

})


// Get Room Details   =>  POST  =>   /api/room/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {

    const room = await Room.findById(req.query.id);
    
    if(!room){
        // return res.status(404).json({
        //     success: false,
        //     error: "Room not found with this ID."
        // })
        return next(new ErrorHandler("Room not found with this ID.", 404));
    }

    res.status(200).json({
        success: true,
        room
    })

})


// Update Room Details   =>  PUT  =>   /api/room/:id
const updateRoomDetails = catchAsyncErrors(async (req, res) => {

    let room = await Room.findById(req.query.id);
    
    if(!room){
        return next(new ErrorHandler("Room not found with this ID.", 404));
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
})


// Delete Room   =>  DELETE  =>   /api/room/:id
const deleteRoom = catchAsyncErrors(async (req, res) => {

    let room = await Room.findById(req.query.id);
    
    if(!room){
        return next(new ErrorHandler("Room not found with this ID.", 404));
    }

    room = await Room.findByIdAndDelete(req.query.id );

    res.status(200).json({
        success: true,
        room
    })
})


export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoomDetails,
    deleteRoom
}