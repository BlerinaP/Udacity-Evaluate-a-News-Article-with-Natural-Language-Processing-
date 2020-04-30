export async function hashtagSubmit(event) {
    event.preventDefault();
    //Selecting the input by id to take value we write and make the request
    const input = document.getElementById('hashtag');
    const text = document.getElementById('hashtag').value;
    if(text.length === 0){
        input.classList.add('bered');
        input.innerText = 'Required';
    } else {
        input.classList.remove('bered');
    }
    console.log(text);

    await fetch("/hashtag", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    })
        .then(res => res.json())

        //Updating Ui with the response
        .then(data => {
           document.getElementById('lng-hashtag').innerHTML = data.language;
           document.getElementById('text-hashtag').innerHTML = data.text;
           document.getElementById('hashtags').innerHTML = data.hashtags;
        });
}
