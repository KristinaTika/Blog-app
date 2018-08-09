const body = document.querySelector("body");

export const createHeader = () => {

    const header = document.createElement("header");
    header.innerHTML = `
        <nav>
            <ul id="header-list">
                <li class="blog">
                    BIT BLOG
                </li>
                <li>
                    <a href="#" class="home">Home</a>
                </li>
                <li>
                    <a href="#" class="authors">Authors</a>
                </li>
                <li>
                    <a href="#" class="about">About</a>
                </li>
                <li>
                    <a href="#" class="create-new-post">Create New Post</a>
                </li>
            </ul>
        </nav>
    `;
    body.insertBefore(header, body.firstChild);
}

export const createFooter = () => {

    const footer = document.createElement("footer");
    footer.setAttribute("id", "footer-page");
    footer.innerHTML = `
        <p>
            Copyright &#169; Kristina Butkovic 2018
        </p>
    `;
    body.appendChild(footer);
}