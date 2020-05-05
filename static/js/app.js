// UFO TABLE
// from data.js
var tableData = data;


// refrence to the table body
var tbody = d3.select("tbody");

// use d3 to update each cell's text with
//  weather report values (weekday, date, high, low)
 data.forEach(function(ufoSighting) {
   var row = tbody.append("tr");
   Object.entries(ufoSighting).forEach(function([key, value]) {
     // Append a cell to the row for each value
     // in the weather report object
     var cell = row.append("td");
     cell.text(value);
   });
 });



// OBJECT SEARCH
 
// Button
var button = d3.select("#filter-btn");

button.on("click", function() {

    tbody.html("");

    // select the input date 
    var inputElementDate = d3.select("#datetime");
    
    
    // value of input date
    var inputValueDate = inputElementDate.property("value");
    
    
    // get input data into console
    console.log("Date selected",inputValueDate);

    var filteredData = tableData.filter(sighting =>sighting.datetime == inputValueDate);
        
    // get filter filter values into the console
    console.log(filteredData);
    filteredData.forEach(function(selections) {
    
    console.log(selections);
    // append one table row `tr` for each sighting
    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
    });
    });