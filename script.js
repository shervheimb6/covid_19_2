let temp = ['Body Temp a.m.', 'Body Temp p.m.','Pulse','Blood pressure','Blood oxygen level','Other symptoms','Other symptoms'];
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
  'Unusual symptoms', 
]

$(document).ready(() => {
  function createTableBody() {
    // create table
    $("<table></table>").appendTo("body");

    // create header row
    let tableHead = $("<thead></thead>").addClass('head').append("<tr></tr>");
    tableHead.children().append("<th>Symptoms</th>");
    for (let i = 1; i < 15; i++) tableHead.children().append(`<th>Day ${i}</th>`);
    tableHead.appendTo("table");

    // create table body
    $("<tbody></tbody>").appendTo("table");

    // create body temperature rows
   /* for (let n in temp) {
      let row = $("<tr></tr>");
      $("<th></th>").text(temp[n]).appendTo(row);
      for (let i = 0; i < 14; i++) {
        let cell = $("<td></td>").appendTo(row).append('<input/>').attr('type','text');
      };
      $("tbody").append(row);
      // adds row for pulse
      $("tbody").append(row);
    };*/
    
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
        // adds row for pulse
       // $("tbody").append(row);
      };
  };

  

  // use function to create table
  createTableBody();

  // checkbox on/off
  $('td').on('click', event => {
    if ($(event.currentTarget).hasClass('cell')) {
      $(event.currentTarget).html($(event.currentTarget).html() === 'X'? '': 'X').toggleClass('x');
    };
  });
});

