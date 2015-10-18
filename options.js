// Saves options to chrome.storage.sync.
function save_options() {
  var pu = document.getElementById('pushup').value;
  var ab = document.getElementById('abs').value;
  var lw = document.getElementById('legs').value;
  chrome.storage.sync.set({
    pushups: pu,
    abs: ab,
	leg: lw
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    pushups: '20+',
	abs: '80+',
	leg: '80+'
  }, function(items) {
    document.getElementById('pushup').value = items.pushups;
  	document.getElementById('abs').value = items.abs;
	document.getElementById('legs').value = items.leg;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);


var x = document.getElementById('time').elements[0].value;
console.log(x);
