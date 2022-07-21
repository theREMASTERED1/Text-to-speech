if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
} else {
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
}





function myFunction() {
    const input = document.getElementById('textBox').value

    var msg = new SpeechSynthesisUtterance();

    var voices = window.speechSynthesis.getVoices();
    msg.text = input;
    window.speechSynthesis.speak(msg);



    console.log(input, "hello there")

}