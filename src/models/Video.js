import mongoose from "mongoose";


const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxLength: 80 },
    description: { type: String, required: true, trim: true},
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type : String, trim: true }],
    meta: {
        views: { type: Number, require: true, default: 0 },
        rating: { type: Number, require: true, default: 0 },
    },
});

videoSchema.static('formatHashtags', function(hashtags){
    return hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`))
})

const Video = mongoose.model("Video", videoSchema);
export default Video;