import * as data from "./data/data.js";
import * as ui from "./ui/ui.js";

const loadPosts = () => {

    data.getPosts()
        .then((postList) => {
            localStorage.setItem("blog-posts", JSON.stringify(postList));
            ui.displayPosts(postList);
        });
}

const handleHome = (event) => {

    event.preventDefault();
    if (event.target.className == "home") {
        loadPosts();
    }
}

const authorsListHandler = (event) => {

    event.preventDefault();
    if (event.target.className == "authors") {
        data.getAuthors()
            .then((authorsList) => {
                ui.displayAuthors(authorsList)
                const authors = document.querySelectorAll(".author-title");
                authors.forEach(author => {
                    author.addEventListener("click", singleAuthorHandler);
                })
            });
    }
};

const backToAuthorsHandler = (event) => {

    event.preventDefault();
    if (event.target.className == "back-to-authors") {
        data.getAuthors()
            .then((authorsList) => {
                ui.displayAuthors(authorsList)
                const authors = document.querySelectorAll(".author-title");
                authors.forEach(author => {
                    author.addEventListener("click", singleAuthorHandler);
                })
            });
    }
}

const aboutHandler = (event) => {

    if (event.target.className == "about") {
        ui.displayAboutPage();
    }
}

const cancelNewPostHandler = (event) => {

    event.preventDefault();
    if (event.target.className == "cancel-new-post") {
        loadPosts();
    }
}

const createPostHandler = (event) => {

    event.preventDefault();
    const postData = ui.collectData();

    if (event.target.className == "create-post") {
        data.postNewPost(postData)
        loadPosts();
    }
}

const createNewPostHandler = (event) => {

    if (event.target.className == "create-new-post") {
        ui.displayCreateNewPost();
        const cancel = document.querySelector(".cancel-new-post");
        cancel.addEventListener("click", cancelNewPostHandler);
        const createPost = document.querySelector(".create-post");
        createPost.addEventListener("click", createPostHandler);
    }
}

const getMorePostsHandler = (author) => {

    data.getMorePostsFromAuthor(author.id)
        .then((response) => {
            ui.displayMorePosts(response);
            const authorName = document.querySelector(".author-name");
            authorName.addEventListener("click", singleAuthorHandler);
            const morePosts = document.querySelector(".more-posts");
            morePosts.addEventListener("click", singlePostHandler);
        })
}

const getAuthorHandler = (post) => {

    data.getSingleAuthor(post.userId)
        .then((author) => {
            getMorePostsHandler(author);
            ui.displaySinglePost(post, author);
        })
}

const singlePostHandler = (event) => {

    event.preventDefault();
    if (event.target.className == "single-post" || event.target.className == "more-posts") {
        const postId = event.target.getAttribute("data-id");
        data.getSinglePost(postId)
            .then((singlePost) => {
                getAuthorHandler(singlePost);
            });
    }
}

const singleAuthorHandler = (event) => {

    event.preventDefault();
    const authorId = event.target.getAttribute("data-id");
    if (event.target.className == "author-name" || event.target.className == "author-title") {
        data.getSingleAuthor(authorId)
            .then((singleAuthor) => {
                ui.displaySingleAuthor(singleAuthor);
                const allAuthors = document.querySelector(".back-to-authors");
                allAuthors.addEventListener("click", backToAuthorsHandler);
            })
    }
}

export const init = () => {

    ui.createHeader();
    ui.createFooter();
    loadPosts();

    const authors = document.querySelector(".authors");
    authors.addEventListener("click", authorsListHandler);

    const about = document.querySelector(".about");
    about.addEventListener("click", aboutHandler);

    const create = document.querySelector(".create-new-post");
    create.addEventListener("click", createNewPostHandler);

    const body = document.querySelector("body");
    body.addEventListener("click", singlePostHandler);

    const home = document.querySelector(".home");
    home.addEventListener("click", handleHome);
}
