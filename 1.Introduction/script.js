/*
*/

console.log (document.title)
document.title = "Modifying the DOM"

function random_color() {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var bg_color = "rgb("+ x +"," + y +"," + z +")"; 
    console.log(bg_color)
    document.body.style.background = bg_color
}
random_color();

const elements= document.body;
for (const enf of elements.children){
    console.log(document.getElementsByTagName("body")[0]);
    console.log(child.tagName);
}
  
