
    // Initialize Firebase
    // TODO: Replace with your project's customized code snippet
    var config = {
    apiKey: "AIzaSyDMujpxVSdyU5x3DHF_75UyRXc203ZdJY0",
    authDomain: "wot-1819-briavers.firebaseapp.com",
    databaseURL: "https://wot-1819-briavers.firebaseio.com",
    projectId: "wot-1819-briavers",
    storageBucket: "wot-1819-briavers.appspot.com",
    messagingSenderId: "1030285743994"
  };
  firebase.initializeApp(config);
  

let tempstr = '';
function createGrid() {
  for (let i = 0; i < 8; i++) {
    tempstr += `<tr>`
      for (let j = 0; j < 8; j++) {
       tempstr += `<td class='square' id='${i},${j}' onclick='changeColor(${i},${j})' </td>`
      }
    tempstr += `</tr>`
    
  }
  console.log('grided')
};
createGrid();

let table = document.getElementById('arcade');
table.innerHTML = tempstr;

function convertHex(hex) {
  hex = hex.replace('#', '');
  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  result = '(' + r + ',' + g + ',' + b + ',' + ')';
  return result;
}



function changeColor(i, j){

  let led = document.getElementById(`${i},${j}`);
  let colorToAply = document.getElementById('hexColor').value;
  led.style.backgroundColor = `#${colorToAply}`;
  
};
    


function createChar(){
      let data = [];
      for (let i = 0; i < 8; i++) {
        
        for (let j = 0; j < 8; j++) {
          if (document.getElementById(`${i},${j}`).style.backgroundColor == ""){
            data.push('(0,0,0)');
            
          }else{
            let led = document.getElementById(`${i},${j}`); 
            let hex = led.style.backgroundColor;
            hex = hex.replace('rgb', '');
            data.push(hex);
          }

      }
      DBPush(data)
    };
    };
let name = new Date().getTime();
function DBPush(data){
  firebase.database().ref('arcades/' + name ).set({
    data,
  });
}