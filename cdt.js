// Script (ChangingDocumentTitle) by Lyvencio                // https://github.com/Lyvencio/ 
// Fade the original page title in letter by letter         // https://github.com/Lyvencio/ChangingDocumentTitle
var interval = 300                                         // Recommended interval of letter-by-letter fade-in
var title = this.document.title;                          // Defining title
this.document.title = '⠀'                                // Removing title (invisible character)
var character = 1;                                      // Will be used later for dynamic substring
window.setInterval(changeTitle, interval);             // Set interval for change title function (default 300) 
function changeTitle() {                              // Changetitle Function 
var updatingtitle = title.substring(0, character);   // Substring from title
character += 1;                                     // Adding next letter
this.document.title = updatingtitle;               // Setting new title
}                                                 // Ending Changetitle Function
// Hope you like my scripts! Send me an email at // lyvencio@gmail.com
