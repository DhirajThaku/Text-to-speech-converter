let speech= new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect= document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
  voices=window.speechSynthesis.getVoices();
  speech.voice=voices[0];

  //todispla all voices in the drop down
  voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
};

//after selecting the voice we have to set that voice to speech so for that add change event listener

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click",()=>{
   speech.text = document.querySelector("textarea").value;
   window.speechSynthesis.speak(speech);
});