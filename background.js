//chrome.browserAction.setBadgeText({text: String(i)});

var i = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      chrome.browserAction.setBadgeText({text: String(i)});          //  your code here
      i++;                     //  increment the counter
      if (i == 3){
	alert('hello');
	}
      if (i < 10) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another
      }                        //  ..  setTimeout()
   }, 1000);
}

myLoop();
