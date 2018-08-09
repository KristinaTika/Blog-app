const container = document.querySelector(".container");

export const renderAuthors = (authors) => {

    container.innerHTML= "";

    const authorTitle = document.createElement("h1");
    authorTitle.textContent = `Authors (${authors.length})`;
    container.appendChild(authorTitle);

    const authorList = document.createElement("ul");
    container.appendChild(authorList);

    authors.forEach((author) => {
        let authorLi = document.createElement("li");
        authorLi.innerHTML = `
            <li>
                <a href="single-author.html" data-id="${author.id}">
                    <h3 class="author-title" data-id="${author.id}">${author.name}</h3>
                </a>
                <hr>
            </li>`;
        authorList.appendChild(authorLi);
    });
}

export const renderSingleAuthor = (author) => {

    container.innerHTML = "";

    const singleAuthor = document.createElement("div");
    singleAuthor.innerHTML = `
    <span id="all-authors"><a href="#" class="back-to-authors"> &#8592; All authors </a></span>
    <h1>${author.name}</h1>
    <div class="row">
        <div class="col s6">
        <img src="http://via.placeholder.com/200x200" alt="">
        </div>
            <div class="col s6">
                <p><b>username:</b> ${author.username}</p>
                <p><b>email:</b> ${author.email}</p>
                <p><b>phone:</b> ${author.phone}</p>
            </div>
        </div>
        <hr class="border-line"/>
        <div class="row">
            <div class="col s6">
                <h3>Address</h3>
                <p><b>street:</b> ${author.address.street}</p>
                <p><b>city:</b> ${author.address.city}</p>
                <p><b>zipcode:</b> ${author.address.zipcode}</p>
            </div>
            <div class="col s6">
                <iframe width="500" height="300" layout="responsive"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.744977118772!2d20.455167015956487!3d44.806385679098696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa9c08b61e5%3A0x3ee3e8a176a39372!2sNemanjina+4%2C+Beograd!5e0!3m2!1sen!2srs!4v1530877048117" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
        <hr class="border-line" />
        <div class="row">
            <div class="col s6">
                <h3>Company</h3>
                <p><b>name:</b> ${author.company.name}</p>
                <p><b>slogan:</b> ${author.company.catchPhrase}</p>
        </div>
    </div>
    `;
    container.appendChild(singleAuthor);
}
