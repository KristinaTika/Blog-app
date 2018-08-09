import { authorsEndpoint, singleAuthorEndpoint } from "../shared/constants.js";
import { get } from "./apiService.js";
import {Author} from "../entities/Author.js";

class AuthorService {

    fetchAuthors() {
        return get(authorsEndpoint)
            .then((authors) => {
                return authors.map(author => {
                    const id = author.id;
                    const name = author.name;
                    const username = author.username;
                    const email = author.email;
                    const phone = author.phone;
                    const street = author.address.street;
                    const city = author.address.city;
                    const zipcode = author.address.zipcode;
                    const companyName = author.company.name;
                    const slogan = author.company.catchPhrase;
                    const address = {
                        street,
                        city,
                        zipcode
                    }
                    const company = {
                        companyName,
                        slogan
                    }

                    const myAuthor = new Author(id, name, username, email, phone, address, company);
                    return myAuthor;
                })
            })
    }

    fetchSingleAuthor(authorId) {
        return get(`${singleAuthorEndpoint}${authorId}`)
    }
}

export const authorService = new AuthorService;