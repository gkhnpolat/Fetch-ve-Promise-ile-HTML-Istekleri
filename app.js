class Request {
    get(url){ // Get Request
        
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))

        })
    }
    post(url,data){ // Post Request

        return new Promise((resolve, reject) => {
            fetch(url , {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset= UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    put(url, data){ // Put Request
        
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset= UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });

    }

    delete(url, data){ // Delete Request
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
            })
            .then(response => resolve("Veri silme islemi basarili"))
            .catch(err => reject(err));
        });
    }
}
const request = new Request()

// GET Rwquest

/*let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    console.log(albums); // senkronize etmis olduk
})
.catch(err => console.log(err));*/


// POST Rwquest

/*request.post("https://jsonplaceholder.typicode.com/albums", {userId:1, title: "Thriller"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));*/


// PUT Request

/*request.put("https://jsonplaceholder.typicode.com/albums/1", {userId:10, title: "Tarkan karma"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));*/


// DELETE Request

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err => console.log(err));