import nc from "next-connect";

import { getSingleRoom, updateRoomDetails, deleteRoom } from "../../../controllers/roomControllers";
import dbConnect from "../../../config/dbConnect";

const handler = nc();

dbConnect();

handler.get(getSingleRoom);

handler.put(updateRoomDetails);

handler.delete(deleteRoom);

export default handler;