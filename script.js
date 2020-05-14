const firebaseConfig = {
  apiKey: "AIzaSyC-GxgzimExBndV2Pal28aQaNZXc2WW72Q",
  authDomain: "covid19journal-d14af.firebaseapp.com",
  databaseURL: "https://covid19journal-d14af.firebaseio.com",
  projectId: "covid19journal-d14af",
  storageBucket: "covid19journal-d14af.appspot.com",
  messagingSenderId: "242721360407",
  appId: "1:242721360407:web:6db1871f966f5ae1236a52"
};



let temp = ['Body Temp a.m.', 'Body Temp p.m.','Pulse','Blood pressure','Blood oxygen level','Unusual symptoms', 'Daily travels'];
let headerNameList = [
  'Fever',
  'Cough',
  'Running nose',
  'Loss of Smell',
  'Shortness of breath',
  'Sore throat',
  'Chills',
  'Headache',
  'Muscle/joint pain',
  'Fatigue',
  'Cravings',
  'Blue lips', 
];

let temps = ['temp','temp'];

let savedData = {
  inputTemps :     createTableBody.tableHead.input ,
  checkedBoxes :   createTableBody.cell.cell  ,
  

}

  
$(document).ready(() => {
  
  function createTableBody() {
    // create table
    $("<table></table>").appendTo("body");
  
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

    for (let n in temp) {
        let row = $("<tr></tr>");
        $("<th></th>").text(temp[n]).appendTo(row);
        for (let i = 0; i < 14; i++) {
          let cell = $("<td></td>").appendTo(row).append('<input/>').attr('type','text');
        };
        $("tbody").append(row);    
      }; 
    };

    function statement()    {
      $("<h4>Disclaimer- The CDC link in the upper left corner takes you to the Center for Disease Control government website. By clicking and unclicking in the above chart, you can record your own symptoms. Enter information into the bottom text boxes. If you feel you need medical attention contact a medical doctor or in an emergwncy call 911. <h4>").appendTo("body");
  };

  
  
  
  
  createTableBody();
  // use function to create table ad disclaimer
  statement();
  
  

  // checkbox on/off
  $('td').on('click', event => {
    if ($(event.currentTarget).hasClass('cell')) {
      $(event.currentTarget).html($(event.currentTarget).html() === 'X'? '': 'X').toggleClass('x');
    };
  });

/*let buttonSave('click', event =>  {
    event.currentTarget("body").value;
});*/


});


