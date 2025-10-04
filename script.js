
let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // Clear existing options
    voiceSelect.innerHTML = '';

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, voice.lang);
        option.value = i; // Store the index as the value
        voiceSelect.add(option);
    });
};

document.querySelector("button").addEventListener('click', () => {
    speech.text = document.querySelector("textarea").value;
    speech.voice = voices[voiceSelect.value]; // Set selected voice
    window.speechSynthesis.speak(speech);
});
