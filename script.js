const recognition = new ( window.SpeechRecognition || 
window.webkitSpeechRecognition ) ();

recognition.Lang = "en-US"

const btn = document.querySelector(".listen-btn")
btn.addEventListener("click", ()=> {

    //Convert text to voice

    function speak (text) {
        const abc = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(abc);
        
    }

    function handleCommands (command) {
         
        if (command.includes("open youtube")) {
           speak("Opening Youtube...")
           window.open("https://www.youtube.com", "_blank")
        }
        else if (command.includes("open facebook")) {
            speak("Opening facebook...")
           window.open("https://www.facebook.com", "_blank")
            
        }
        else if (command.includes("open instagram")) {
            speak("Opening instagram...")
           window.open("https://www.instagram.com", "_blank")
            
        }
        else{
            speak("search on Youtube")
        }
        
        
    }
    speak("Hello, how can I help you")
    recognition.onresult

})
