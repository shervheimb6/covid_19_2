const firebaseConfig = {
  apiKey: "AIzaSyC-GxgzimExBndV2Pal28aQaNZXc2WW72Q",
  authDomain: "covid19journal-d14af.firebaseapp.com",
  databaseURL: "https://covid19journal-d14af.firebaseio.com",
  projectId: "covid19journal-d14af",
  storageBucket: "covid19journal-d14af.appspot.com",
  messagingSenderId: "242721360407",
  appId: "1:242721360407:web:6db1871f966f5ae1236a52"
};

//buttons
const saveButton = document.querySelector("#saveButton");
const loadButton = document.querySelector("#loadButton");

// write a function that targets the 

let temp = ['Body Temp a.m.', 'Body Temp p.m.','Pulse','Blood pressure','Blood oxygen level','Unusual symptoms', 'Daily travels'];
let headerNameList = [
  'Fever',
  'Cough',
  'Running nose',
  'Loss of Smell/Taste',
  'Shortness of breath',
  'Sore throat',
  'Chills',
  'Headache',
  'Muscle/joint pain',
  'Fatigue',
  'Cravings',
  'Blue lips', 
];

//login

function loginButton()  {

};



$(document).ready(() => {
  
  function createTableBody() {
    // create table
   let table = $("<table></table>").appendTo("body");
  
    // create header row
    let tableHead = $("<thead></thead>").addClass('head').append("<tr></tr>");
    tableHead.children().append("<th>Symptoms</th>");
    for (let i = 1; i < 15; i++) tableHead.children().append(`<th>Day ${i}<input type= "text"></th>`);
    tableHead.appendTo("table");

    // create table body
    $("<tbody></tbody>").appendTo("table");
    

    // create checkbox rows
    for (let n in headerNameList) {
      let row = $("<tr></tr>").appendTo("tbody");
      let header = $("<th></th>").text(headerNameList[n]).appendTo(row);
      for (let i = 0; i < 14; i++) {
        let cell = $("<td></td>").addClass('cell').appendTo(row);
      };
    };
    // creates the temp rows
    for (let n in temp) {
        let row = $("<tr></tr>");
        $("<th></th>").text(temp[n]).appendTo(row);
        for (let i = 0; i < 14; i++) {
          let cell = $("<td></td>").appendTo(row).append('<input/>').attr('type','text');
        };
        $("tbody").append(row);    
      }; 
      // click event listener for my save button
saveButton.addEventListener("click", function() {
  const textToSave = table ;
  console.log("I am going to save" + textToSave + "to Firestore");
  docRef.set({
      textToSave

  }).then(function() {
      console.log("Status saved");
  }).catch(function(error) {
      console.log("got an error", error);
  });
});

// this saves the data from our app and all the 
// underlining information
loadButton.addEventListener("click",  function() {
  docRef.get().then(function (doc) {
    if (doc && doc.exists) {
        const myData = doc.data();
        console.log(myData);
      
    }          
  }).catch(function (error) {
      console.log("Got an error", error);
  });
});
    };

    function statement()    {
      $("<h4>Disclaimer- The CDC link in the upper left corner takes you to the Center for Disease Control government website. By clicking and unclicking in the above chart you can record your own symptoms. Enter information into the bottom text boxes. If you feel you need medical attention contact a medical doctor or in an emergency call 911. <h4>").appendTo("body");
  };

  
  //this call creates the table body
  createTableBody();
  // use function to create table ad disclaimer
  statement();
  
  
  // checkbox on/off
  $('td').on('click', event => {
    if ($(event.currentTarget).hasClass('cell')) {
      $(event.currentTarget).html($(event.currentTarget).html() === 'X'? '': 'X').toggleClass('x');
    };
  });
 
});

// these firebase references are outside of the table function

//ref to the 
firebase.initializeApp(firebaseConfig);
// ref to the firestore
var firestore = firebase.firestore();

// docRef refers to the firebase app name which is why the firestore 
//doc is called samples/snadwichData
const docRef = firestore.doc("samples/sandwichData");











