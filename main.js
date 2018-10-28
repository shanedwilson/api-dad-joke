const dadJokeAPI = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://icanhazdadjoke.com/",
            headers: {
                accept: "application/json"
            }
        })
            .done(joke => {
                resolve(joke);
            })
            .fail(error => {
                reject(error);
            })
    })
   
};

$('button').on('click', (e) => {
    dadJokeAPI()
        .then(joke => {
            $('#joke').html(`<p>${joke.joke}</p>`)
        })
        .catch(error => {
            console.error(error);
        })
})