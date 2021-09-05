document.addEventListener('DOMContentLoaded' , () => {
 //JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
 var button = document.getElementById('test_button')
 var text = document.getElementById('text')
 var pro = document.getElementById('progress')


 button.addEventListener("click" , ()=> {
  

     console.log(1);
     InitiateSpeedDetection()
 var imageAddr = "https://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_%285mb%29.jpg"; 
 var downloadSize = 5000000; //bytes
 
 function ShowProgressMessage(msg) {   
     button.style.display = "none"
     text.style.display = "none"
     pro.style.display = "block"

     if (console) {
         if (typeof msg == "string") {
             console.log(msg);
         } else {
             for (var i = 0; i < msg.length; i++) {
                 console.log(msg[i]);
             }
         }
     }
     
     var oProgress = document.getElementById("progress");
     if (oProgress) {
          
         oProgress.innerHTML = `${msg}  <span>mbps</span>`;
       console.log(msg)
     }
 }
 
 function InitiateSpeedDetection() {
  
     window.setTimeout(MeasureConnectionSpeed, 1);
 };    
 

  
 
 
 function MeasureConnectionSpeed() {
     var startTime, endTime;
     var download = new Image();
     download.onload = function () {
         endTime = (new Date()).getTime();
         showResults();
     }
     
     download.onerror = function (err, msg) {
         console.log(err)
     }
     
     startTime = (new Date()).getTime();
     var cacheBuster = "?nnn=" + startTime;
     download.src = imageAddr + cacheBuster;
     
     function showResults() {
         var duration = (endTime - startTime) / 1000;
         var bitsLoaded = downloadSize * 8;
         var speedBps = (bitsLoaded / duration).toFixed(2);
         var speedKbps = (speedBps / 1024).toFixed(2);
         var speedMbps = (speedKbps / 1024).toFixed(2);
         ShowProgressMessage([
 
             speedMbps 
         ]);
     }
 }
 })
      
})
      