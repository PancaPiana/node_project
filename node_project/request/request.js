const request = require("request");
const fs = require("fs");
const baseApiUrl = "https://jsonplaceholder.typicode.com";

const getUsers = (callback) => {

    console.log("inviata richiesta  per gli utenti al server...");

    request(baseApiUrl + "/users", (error, response, body) => {

        if (!error && response.statusCode == 200) {
            console.log("risposta arrivata dal server!");
            let markdown = "";
            const users = JSON.parse(body);

            for (let i = 0; i < users.length; i++) {
                markdown += `<h1>${users[i].name}</h1>`;
            }

            callback(markdown);
        }
        else {
            console.log("c'è stato un errore di comunicazione con il server");
        }

    });

};

getUsers((markdown) => {

    console.log("sto scrivendo il file...");

    fs.writeFile("./request/markdown.txt", markdown, (error) => {
        if (error) throw error;
        console.log("file scritto correttamente!")
    });

});