import { postService } from "./services/postService.js";
import { authorService } from "./services/authorService.js";

export const getPosts = () => {
    return postService.fetchPosts();
}

export const getSinglePost = (id) => {
    return postService.fetchSinglePost(id);
}

export const postNewPost = (data) => {
    return postService.createNewPost(data);
}

export const getMorePostsFromAuthor = (authorId) => {
    return postService.fetchPostsFromASingleAuthor(authorId);
}

export const getAuthors = () => {
    return authorService.fetchAuthors();
}

export const getSingleAuthor = (authorId) => {
    return authorService.fetchSingleAuthor(authorId);
}
