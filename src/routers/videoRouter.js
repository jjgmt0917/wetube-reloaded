import express from "express";
import { watch, getEdit, postEdit, upload, deleteVideo } from "../controllers/videoController"

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

export default videoRouter;
