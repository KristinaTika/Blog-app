export const get = (url) => {

    return fetch(url, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
}

export const post = (url, newContent) => {

    const postData = {
        method: 'POST',
        body: JSON.stringify(newContent),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    return fetch(url, postData)
        .then(response => {
            return response.json();
        })
}