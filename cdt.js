var title = 'Welcome '
var titlelength = title.length
var character = 0;


var intervalID = window.setInterval(myCallback, 300);

function myCallback() {
 var updatingtitle = title.substring(1, character);

character += 1;
    this.document.title = updatingtitle;
    
}
