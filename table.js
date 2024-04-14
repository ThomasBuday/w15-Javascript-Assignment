const companies = [
    ["Saab AB", "Stockholm", 1937],
    ["Volvo Group", "Göteborg", 1927],
    ["Sandvik AB", "Stockholm", 1862],
    ["Atlas Copco Group", "Nacka", 1873],
    ["Electrolux AB", "Stockholm", 1919],
    ["Skanska AB", "Stockholm", 1887],
];

let cnt = false;
const myTimeout = setTimeout(delayedTxt, 1500);                                                                     //- Text manupulation
function delayedTxt() {
    document.getElementById("delayed").textContent="Wanna see a cool spreadsheet about companies and stuff?";
    const buttonTimeOut = setTimeout((delayedBtn) => {
        document.getElementById("myButton").style.visibility="visible";
    }, 1500);
}

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", event => {                                                                       //- Button clicked
    while (cnt !== true) {                                                                                          //- Checking if button was clicked
    hitTheButton();                                                                                                 //- Calling hitTheButton function
    myButton.textContent = "Cool";                                                                                  //- Button text change
    };
});

function hitTheButton(){                                                                                            //- The real deal
    cnt = true;
    const myDiv = document.getElementById("myDiv");                 //- Grabing the div element

    const divTable = document.createElement("table");               //- Creating a table 
    divTable.innerHTML="<tr><th>Name</th><th>Location</th><th>Established</th></tr>";

    myDiv.append(createTable(companies));                           //- Appending the full table to the div, with calliong the createTable function

    function createTable(data) {
    
        for (var i = 0; i < data.length; i++){
                const singleRow = createRow(i, data);               //- Calling createRow function
                divTable.append(singleRow);                         //- Appending the full row to the table
            };
        return divTable;                                            //- Returning the table
    }


    function createRow(i, data) {
        const rowData = document.createElement("tr");               //- Creating a row
        
        var dataName = document.createElement("td");                //- Creating a data
            dataName.innerText = data[i][0];                        //- Filling up
        var dataLoc = document.createElement("td");                 //-     ´´
            dataLoc.innerText = data[i][1];                         //-     ´´
        var dataYear = document.createElement("td");                //-     ´´
            dataYear.innerText = data[i][2];                        //-     ´´
    
            rowData.append(dataName, dataLoc, dataYear);            //- Appending the full data to the row
            return rowData;                                         //- Returning the row
    }
    
}
