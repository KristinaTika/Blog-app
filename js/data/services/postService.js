import { postsEndpoint, singlePostEndpoint, postsFromASingleAuthorEndpoint } from '../shared/constants.js';
import { get, post } from './APIService.js';


class PostService {

    fetchPosts() {
        return get(postsEndpoint)
    }

    fetchSinglePost(id) {
        return get(`${singlePostEndpoint}${id}`)
    }

    fetchPostsFromASingleAuthor(userId) {
        return get(`${postsFromASingleAuthorEndpoint}${userId}`)
    }

    createNewPost( data) {
        return post(postsEndpoint, data)
    }
}

export const postService = new PostService;