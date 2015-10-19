//chrome.browserAction.setBadgeText({text: String(i)});

var i = 2*60;                     //  set your counter to 1
var firstRun = true;
var water;
chrome.storage.sync.get({water: true}, function(items) {water = items.water;});

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
		if(firstRun){
			var itemp = prompt('How long until you want to take a workout break?(min)', '20');
			i = parseInt(itemp)*60;
			firstRun = false;
			chrome.browserAction.setBadgeBackgroundColor({
    			color: [64, 64, 64, 255]
			});
		}

		if(i <= 60){
		chrome.browserAction.setBadgeText({text: String(i) + 's'});          //  your code here
      } else {
		chrome.browserAction.setBadgeText({text: String(Math.round(i/60)) + 'm'});
	}
	i--;                    //  increment the counter
    if (i == 0){

		itemp = prompt('Time to workout:\nPlease open Healthy Workflow to generate a workout\nHow long until you want to take a workout break?(min)', '20');
		i = parseInt(itemp) * 60;
	}
      if (i > 0) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another
      }                        //  ..  setTimeout()
   }, 1000);
}

myLoop();
