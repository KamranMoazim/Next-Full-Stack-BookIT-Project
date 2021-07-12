const Room = require("../models/rooms");

const rooms = require("../data/rooms.json");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bookit",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const seedRooms = async () => {
    try {

        await Room.deleteMany();
        console.log("Rooms are Deleting");
        await Room.insertMany(rooms);
        console.log("Rooms are Inserting into DB.");
        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedRooms();