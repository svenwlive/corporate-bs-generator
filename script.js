console.info("hiya! your javascript is working!")
console.info("^_^")

async function generate() {
    let api = "https://corporatebs-generator.sameerkumar.website/";
    const response = await fetch(api);
    const data = await response.json();
    const phraseOutBox = document.querySelector('.phrase-out-box');

    phraseOutBox.innerHTML = "";
    const phrase = data.phrase;
    phraseOutBox.innerHTML ='<p id="phrase-out" class="phrase-out">' + phrase + '</p>'
    console.log("finished generate")
}
const generatebtn = document.querySelector('.generatebtn');

generatebtn.addEventListener("click", generate);