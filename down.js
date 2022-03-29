// Here You can type your custom JavaScript...
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function gg(){
var str = document.getElementsByTagName("html")[0].innerHTML;

if(str.includes("url1080")){
	var str1 = str.split("url1080\":\"");
}else{
var str1 = str.split("url720\":\"");
}

var str2 = str1[1].split('"');

var rnd= Math.floor(Math.random() * 99999999);

var content="<meta http-equiv=\"refresh\" content=\"0;URL='"+str2[0]+"'\" /> ";


download(content,rnd+".html","text/html");

}

function nn(){
var str = document.getElementsByTagName("html")[0].innerHTML;

if(str.includes("url1080")){
	var str1 = str.split("url1080\":\"");
}else{
var str1 = str.split("url720\":\"");
}

var str2 = str1[1].split('"');
copyTextToClipboard(str2[0]);
return str2[0];

}

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  // Place in the top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of the white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}


