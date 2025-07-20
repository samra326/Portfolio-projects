let speech = new SpeechSynthesisUtterance();

let voices = [];

let language = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (language.options[i] = new Option(voice.name, i)));
};

language.addEventListener("change", ()=>{
    speech.voice = voices[language.value];
})

document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})