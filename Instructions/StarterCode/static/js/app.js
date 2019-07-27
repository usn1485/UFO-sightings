// Get a reference to the table body
var tbody = d3.select("tbody");
//Get a Data from Data.js
var ufos=data;     

//
ufos.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  //Event Listener filter-btn

  var filterbtn=d3.select("#filter-btn");
  
  filterbtn.on("click",function(){

    var filteredData = ufos;

    var inputDateValue= d3.select("#datetime").property("value");
    var inputCityValue= d3.select("#City").property("value").toLowerCase().trim();
    var inputStateValue= d3.select("#State").property("value").toLowerCase().trim();
    var inputCountryValue= d3.select("#Country").property("value").toLowerCase().trim();
    var inputShapeValue= d3.select("#Shape").property("value").toLowerCase().trim();
    

    var dictUser={ datetime:inputDateValue,
                    city:inputCityValue,
                    state:inputStateValue,
                    country:inputCountryValue,
                    shape:inputShapeValue
                    }
    /*var userinput= getelement()*/

    Object.entries(dictUser).forEach(([key, value]) => {
      if(value===""){
        delete  dictUser[key];
      }   
     });


   console.log(dictUser);


    console.log("Hi, a filter button was clicked");
    console.log("inputValue :",dictUser);
    
    // Object.entries(dictUser).forEach(([key, value]) => {
    //   console.log(key,value);
    //   filteredData=filteredData.filter(row => row[key]===value);
    // });

    filteredData = filteredData.filter(row => {
      return Object.entries(dictUser).every(criteria => {
        const key = criteria[0]
        const value = criteria[1]
        return row[key] === value
      })
    })
    
    var tableContent=d3.select("tbody");

    //Empty table content before displaying new one 
    tableContent.html("");

    filteredData.forEach((fData) => {
      var row = tbody.append("tr");
      Object.entries(fData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
   });