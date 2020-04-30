export async function handleSubmitArticle(event) {
    event.preventDefault();
    //Selecting the input by id to take value we write and make the request
    const input = document.getElementById("text-url");
    const url = document.getElementById("text-url").value;
    if(!url){
        input.classList.add('bered');
        input.innerText = 'Required';
    } else {
        input.classList.remove('bered');
    }
    console.log(url);
    await fetch("/url", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: url })
    })
        .then(res => res.json())

        //Updating Ui with the response
        .then(data => {
            document.getElementById("polarity").innerHTML = data.polarity;
            document.getElementById("subjectivity").innerHTML = data.subjectivity;
            document.getElementById("polarity_confidence").innerHTML = data.polarity_confidence;
            document.getElementById("subjectivity_confidence").innerHTML = data.subjectivity_confidence;
            document.getElementById("excerpt").innerHTML = data.text;
        });
}