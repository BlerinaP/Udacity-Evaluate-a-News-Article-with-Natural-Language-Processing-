export async function handleSubmit(event) {
    event.preventDefault();
    //Selecting the input by id to take value we write and make the request
    const input =  document.getElementById('text');
    const text = document.getElementById('text').value;
    if(text.length === 0){
       input.classList.add('bered');
       input.innerText = 'Required';
    } else {
        input.classList.remove('bered');
    }
    console.log(text);

    await fetch("/text", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    })
        .then(res => res.json())

        //Updating UI

        .then(data => {
            document.getElementById("text_polarity").innerHTML = data.polarity;
            document.getElementById("text_subjectivity").innerHTML = data.subjectivity;
            document.getElementById("text_polarity_confidence").innerHTML = data.polarity_confidence;
            document.getElementById("text_subjectivity_confidence").innerHTML = data.subjectivity_confidence;
        });
}