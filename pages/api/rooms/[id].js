import nc from "next-connect";

import { getSingleRoom, updateRoomDetails, deleteRoom } from "../../../controllers/roomControllers";
import dbConnect from "../../../config/dbConnect";

import onError from "../../../middlewares/errors";

const handler = nc({ onError });

dbConnect();

handler.get(getSingleRoom);

handler.put(updateRoomDetails);

handler.delete(deleteRoom);

export default handler;