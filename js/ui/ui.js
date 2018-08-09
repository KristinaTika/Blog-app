import { renderAboutPage } from "./About.js";
import * as authorPage from "./Author.js";
import * as postPage from "./Post.js";
import * as partials from "./partials.js";

export const createHeader = () => {
    return partials.createHeader();
}

export const createFooter = () => {
    return partials.createFooter();
}

export const displayAboutPage = () => {
    return renderAboutPage();
}

export const displayAuthors = (authors) => {
    return authorPage.renderAuthors(authors);
}

export const displaySingleAuthor = (author) => {
    return authorPage.renderSingleAuthor(author);
}

export const displayPosts = (posts) => {
    return postPage.renderPosts(posts);
}

export const displaySinglePost = (post, author) => {
    return postPage.renderSinglePost(post, author);
}

export const displayMorePosts = (posts) => {
    return postPage.renderMorePostsFromASingleAuthor(posts);
}

export const displayCreateNewPost = () => {
    return postPage.displayCreateNewPost();
}

export const collectData = () => {
    return postPage.collectNewPostData();
}
