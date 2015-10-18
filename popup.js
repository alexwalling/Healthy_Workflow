//var workout = [{name:'abs', picture:[{name:'crunches',picture:'img/abs-crunches.png'}, {name:'planks',picture:'img/abs-planks.jpg'}, {name:'leg raises', picture:'img/abs-leg-raises.jpg'}, {name:'russian twist', picture:'img/abs-russian-twist.jpg'}]}, {name:'pushups', picture:[{name:'diamond position pushup', picture:'img/pushup-diamond-position.jpg','img/pushup-staggarded.jpg','img/pushup-wide-grip.jpg']}, {name:'squat', picture:['img/squat-jumps.jpg', 'img/squat-squat.png']}];

var abs = {
	name:'abs',
	picture:[]
};
var chest = {
	name:'chest',
	picture:[]
};
var legs = {
	name:'legs',
	picture:[]
};
abs.picture.push({name:'crunches', picture:'img/abs-crunches.png'});
abs.picture.push({name:'planks', picture:'img/abs-planks.jpg'});
abs.picture.push({name:'leg raises', picture:'img/abs-leg-raises.jpg'});
abs.picture.push({name:'russian twist', pitcure:'img/abs-russian-twist.jpg'});
chest.picture.push({name:'diamond position pushup', picture:'img/pushup-diamond-position.jpg'});
chest.picture.push({name:'staggerded pushup', picture:'img/pushup-staggerded.jpg'});
chest.picture.push({name:'wide grip pushup', picture:'img/pushup-wide-grip.jpg'});
legs.picture.push({name:'squat jumps', picture:'img/squat-jumps.jpg'});
legs.picture.push({name:'squat', picture:'img/squat-squat.png'});
legs.picture.push({name:'calf raises', picture:'img/squat-calf-raises.jpg'});

var workout = [abs, chest, legs];

console.log(workout[0].name);

var numPush;

function restore_options() {
	// Use default value color = 'red' and likesColor = true.
	chrome.storage.sync.get({
		pushups: '5',
		abs: '80+',
		leg: '80+'
	}, function(items) {
		numPush = items.pushups;
		numAbs = items.abs;
		numLeg = items.leg;
 	});
}
restore_options();
console.log(numPush);

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
	//document.getElementById('t1').innerHTML = 'NOTHEALTHY';
	//alert('my name is alex');
	restore_options();
	var r = Math.floor(Math.random()*workout.length);
	var r2 = Math.floor(Math.random()*workout.length);
	document.getElementById('a').innerHTML = workout[r].picture[r2].name + ' (' + workout[r].name + ')';
	//document.getElementById('a').innerHTML = workout[0].name;
	document.getElementById('i1').src = workout[r].picture[r2].picture;
 	if(workout[r].name == 'chest'){
		document.getElementById('b').innerHTML = 'Do ' + numPush + ' ' + workout[r].picture[r2].name + 's';
	} else if(workout[r].name == 'abs'){
		if(workout[r].picture[r2].name == 'planks'){
			if(numAbs == '20'){
				numAbs = '15 seconds';
			} else if(numAbs == '40'){
				numAbs = '30 seconds';
			} else if(numAbs == '60'){
				numAbs = '1 minute';
			} else {
				numAbs = '2 minutes';
			}
			document.getElementById('b').innerHTML = 'Do ' + numAbs + ' of planks';
		} else {
			document.getElementById('b').innerHTML = 'Do ' + numAbs + ' ' + workout[r].picture[r2].name + 's';
		}
	} else if (workout[r].name == 'legs'){
		document.getElementById('b').innerHTML = 'Do ' + numLeg + ' ' + workout[r].picture[r2].name + 's';
	} else {
		document.getElementById('b').innerHTML = '';
	}
   }, false);
	//alert(Math.random());
}, false);
