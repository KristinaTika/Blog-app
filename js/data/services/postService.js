import { postsEndpoint, singlePostEndpoint, postsFromASingleAuthorEndpoint } from '../shared/constants.js';
import { get, post } from './APIService.js';
import { Post } from '../entities/Post.js';

class PostService {

    fetchPosts() {
        return get(postsEndpoint)
            .then((postList) => {
                return postList.map(post => {
                    const userId = post.userId;
                    const id = post.id;
                    const title = post.title;
                    const body = post.body;

                    const myPost = new Post(userId, id, title, body);
                    return myPost;
                })
            })
    }

    fetchSinglePost(id) {
        return get(`${singlePostEndpoint}${id}`)
    }

    fetchPostsFromASingleAuthor(userId) {
        return get(`${postsFromASingleAuthorEndpoint}${userId}`)
    }

    createNewPost(data) {
        return post(postsEndpoint, data);
    }
}

export const postService = new PostService;