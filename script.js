let btn = document.querySelector('.btn')
let area =  document.querySelector('#speechtotext')

btn.addEventListener('click',()=>{
  let record = new webkitSpeechRecognition()
  
  record.lang = "en-GB"
  record.onresult = function(event){
    console.log(event)
    area.value = event.results[0][0].transcript;
  }
  record.start();
});