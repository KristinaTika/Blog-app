const container = document.querySelector(".container");

export const renderPosts = (posts) => {

    container.innerHTML="";
    const postTitle = document.createElement("h1");
    postTitle.textContent = "POSTS";
    container.appendChild(postTitle);

    const postsList = document.createElement("ul");
    postsList.setAttribute("class", "post-list");
    container.appendChild(postsList);

    posts.forEach((post) => {
        let postLi = document.createElement("li");
        postLi.innerHTML = `
        <li id="post-li">
            <a href="#" data-id="${post.id}" data-userId="${post.userId}">
                <h3 data-id="${post.id}" class="single-post" >${post.title}</h3>
            </a>
            <p>${post.body}</p>
            <hr class="border-line">
         </li>`;

        postsList.appendChild(postLi);
    });
}

export const renderSinglePost = (post, author) => {

    container.innerHTML = "";
    const singlePostDiv = document.createElement("div");
    singlePostDiv.innerHTML = `
    <h1>${post.title}</h1>
    <h4>Author: 
        <a href="#" data-id="${post.userId}" class="author-name" > ${author.name}
        </a> 
    </h4>
    <p>${post.body}</p>
    <hr class="border-line" />
    <h5> All posts from the same author: </h5> 
    `;

    container.appendChild(singlePostDiv);
}

export const renderMorePostsFromASingleAuthor = (posts) => {

    const list = document.createElement("ul");
    container.appendChild(list);

    for (let i = 0; i < posts.length; i++) {

        let listLi = document.createElement("li");
        listLi.innerHTML = `
        <li>
            <a href="#" data-id="${posts[i].id}" class="more-posts" >
                ${posts[i].title.slice(0, 20)}"
            </a>
        </li>`;

        list.appendChild(listLi);
    }  
}

export const displayCreateNewPost = () => {

    container.innerHTML = "";
    const newPost = document.createElement("div");
    newPost.innerHTML = `
    <h1>NEW POST</h1>
    <div class="row">
        <form  id="form-new-post" class="col s12">
            <div class="row">
                <div class="col s6">
                    <label for="post-title">Post Title</label>
                    <input type="text" id="post-title">
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <label for="post-content">Post Content</label>
                    <textarea id="post-content"></textarea>
                </div>
            </div>
        </form>
    </div>
    <input type="reset" class="cancel-new-post" value="Cancel" />
    <input type="submit" class="create-post" value="Create" />
    `;
    
    container.appendChild(newPost);
}

export const collectNewPostData = () => {

    const postTitleInput = document.querySelector("#post-title");
    const postContentInput = document.querySelector("#post-content");

    const title = postTitleInput.value;
    const content = postContentInput.value;
   
    const postData = {
        title: title,
        body: content
    }
   
    return postData;
}
