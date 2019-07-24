// Get a reference to the table body
var tbody = d3.select("tbody");
var ufos=data;
// Console.log the ufo sighting data from data.js
//console.log(data);


data.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

  //Event Listener filter-btn

  var filterbtn=d3.select("#filter-btn");

  filterbtn.on("click",function(){
    var inputElement=d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log("Hi, a filter button was clicked");
    console.log("inputValue :",inputValue)
    //console.log(ufos);

    var Ufoscited=ufos.filter(ufo=>ufo.datetime===inputValue);
    console.log("UfoFiltered:",Ufoscited)

    var tableContent=d3.select("tbody");

    //Empty table content before displaying new one 
    tableContent.html("");

   Ufoscited.forEach((sufo) => {
        var row = tbody.append("tr");
        Object.entries(sufo).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      })

    

  });