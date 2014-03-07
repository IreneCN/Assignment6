/**
 * @author Chidinma Irene Nwoye
 */

/*Steps
 1. Retrieve data from FRED
 2. Create a Google Fusion table
 3. Change the first $-get request i.e. put in the link to Google url
 4. I created a header array for the column I want to create
 5. 
 */
 
function mydataUp(uEMPDATA){            //uEMPDATA is the local name for the JSON file
	
	console.log(uEMPDATA);        //I'm console-logging the JSON file to be sure the function dataUp works on my javascript
	
	var ArrayHeader = uEMPDATA.columns; //I'm creaating the header for my arrays
	var gDataTable = new google.visualization.DataTable(); // I've included a new Google table to access my visualization data
	
	
	// The 2nd parameter is the name of the column
	gDataTable.addColumn('string', ArrayHeader[0]);  //I'm adding columns and the 1st parameter is the string datatype
	gDataTable.addColumn('number', ArrayHeader[1]);  //I'm adding a second parameter of the number datatype
	
	gDataTable.addRows(uEMPDATA.rows);
	
	
	var myChartChoices = {                           //Created options object to actually customize the look of my chart
          title: ""       //This is a configuration option
        };
	//tells Google Visualization to create a line chart and give it to the
	var ThisChart = new google.visualization.LineChart(document.getElementById('newChartDiv')); //I've created type of chart e.g. BarChart to LineChart etc
	ThisChart.draw(gDataTable,myChartChoices);



}

/*function mydataUp2(uEMPDATA){            //uEMPDATA is the local name for the JSON file and I'm including a second visualization
	
	console.log(uEMPDATA);        //I'm outputting the JSON file to be sure the function dataUp works on my javascript
	
	var gDataTable = new google.visualization.DataTable();
	
	//When I add columns, the 1st parameter is the data type in that column
	// The 2nd parameter is the name of the column
	gDataTable.addColumn('string', uEMPDATA.columns[0]);
	gDataTable.addColumn('number', uEMPDATA.columns[1]);
	
	gDataTable.addRows(uEMPDATA.rows);
	
	
	var myChartChoices = {                           //create options object to actually customize the look of our chart
          title: ""       //This is a configuration option
        };
	//tells Google Visualization to create a line chart and give it to the
	var ThisChart = new google.visualization.LineChart(document.getElementById('newChartDiv2')); //I've created type of chart e.g. BarChart to LineChart etc
	ThisChart.draw(gDataTable,ChartChoices);



}
*/

function myGoogleUp() {

	console.log("I've put up Google!");
	
	// Instead of loading data from a static json file
	//I'm going to load it from Google Fusion Table	
	
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+10wtbAdS9Jlnpm2Xj7ibzvFM1jTBE3JTRQgbCkciA&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ", dataUp, "json"); //I'm retrieving my the json 
	
	//We're including a second visualization and so we duplicated the function that loads data and created a new div in my html file
	//$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1L1rmYMaUAgK7tXaB9vt28njZA3ZAj4k8zHizBP9N+WHERE+DATE>'1971-12-01'&key=AIzaSyCgfAUYUUuX8vurL0WtKGYRGho11LEnsPI", dataUp2, "json");
	
	
	}


function mydocUp() {

	console.log("My page is up!");

	//I'm loading the google visualization library
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "myGoogleUp"
	});

}


$(document).ready(mydocUp);  //I've used $(document).ready to call my function, docUp


