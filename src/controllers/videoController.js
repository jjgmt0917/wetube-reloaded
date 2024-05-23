import Video from "../models/Video";

export const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle : "Home", videos });
        
};//최신버전
/* export const home = (req, res) => {
    console.log("Start");
    Video.find().
    then(function (videos){
    console.log("Finished", videos);
    return res.render("home", { pageTitle: "Home", videos });
    })
    .catch(function (err) {
    console.log("errors", err);
    });
    console.log("I finish first");
    }; //callback함수 에러 해결. mongoose업데이트 문제 */
/* export const home = (req, res) => {
    console.log("Start");
    Video.find({}, (error, videos) => {
        return res.render("home", { pageTitle: "Home", videos });
    });
}; // 콜백방식 */
export const watch = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    console.log(video);
    return res.render("watch", { pageTitle: video.title, video });
};
export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", { pageTitle: `Editing` });
};  //form 화면을 보여줌
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};  //변경사항을 저장

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
};

export const postUpload = async(req, res) => {
    const { title, description, hashtags } = req.body;
    try{
        await Video.create({
            title,
            description,
            hashtags: hashtags.split(",").map((word) => `#${word}`),
        });
        return res.redirect("/");
    } catch(error){
        console.log(error);
        return res.render("upload", { pageTitle: "Upload Video", errorMessage: error._message});
    }
};
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("Delete Video");
};