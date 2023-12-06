export const trending = (req, res) => {
    const videos = [
        {
            title: "First Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 59,
            id: 1,
        },
        {
            title: "Second Video",
            rating: 1,
            comments: 45,
            createdAt: "10 minutes ago",
            views: 156,
            id: 8,
        }
    ]
    return res.render("home", { pageTitle: "Home", videos })
};
export const see = (req, res) => res.render("watch", { pageTitle: "Video"});
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit"});
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("Delete Video");
};