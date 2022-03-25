document.body.style.backgroundImage = "url(frontend/images/an.jpg)"
document.body.style.backgroundSize = "100%"
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.color = "#fff";
document.body.style.fontFamily = "Poppins"
document.body.style.margin = "0"
document.body.style.padding = "0"


// DOM Selection
// document.getElementsByTagName()

const h2 = document.getElementsByTagName('h2');
h2[0].style.color = 'black';

// document.getElementsByClassName()

const button2 = document.getElementsByClassName('button2');
button2[0].style.backgroundColor = 'black';
button2[0].style.color = 'pink';

button2[1].style.backgroundColor = 'black';
button2[1].style.color = 'pink';

// query
const p = document.querySelector(".writer").style
p.color ="pink"

// let
// const gambar = document.getElementsByClassName('gambar');
//      for (let i=0; i<gambar.length; i++){
//          if(gambar){
//              console.log(gambar[i]);
//          }
//          else if(no){
//              console.log('Tidak Ada Data');
//              console.log(i)
//          }
//      }