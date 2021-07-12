import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Room Name"],
        trim: true,
        maxLength: [100, "Room Name cannot exceed 100 chars."]
    },
    pricePerNight: {
        type: Number,
        required: [true, "Please Enter Room Price"],
        maxLength: [4, "Room Price cannot exceed 4 Digits."],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Please Enter Room Description"],
    },
    address: {
        type: String,
        required: [true, "Please Enter Hotel Address"],
    },
    guestCapacity: {
        type: Number,
        required: [true, "Please Enter Room Guest Capacity"],
    },
    numOfBeds: {
        type: Number,
        required: [true, "Please Enter Number of Beds in Room"],
    },
    internet: {
        type: Boolean,
        default: false
    },
    breakfast: {
        type: Boolean,
        default: false
    },
    airConditioned: {
        type: Boolean,
        default: false
    },
    petsAllowed: {
        type: Boolean,
        default: false
    },
    roomCleaning: {
        type: Boolean,
        default: false
    },
    ratings: {
        type: Number,
        default: 0
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,    
        required: [true, "Please Enter Room Category"],
        enum: {
            values: [
                "King",
                "Single",
                "Twins"
            ],
            message: "Please select Correct Category for Room. "
        },
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.models.Room || mongoose.model("Room", roomSchema);