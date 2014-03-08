/**
 * @author Chidinma Irene Nwoye
 */

/*Steps
 1. Retrieve data from FRED
 2. Create a Google Fusion table
 3. Change the first $-get request i.e. put in the link to Google url
 4. I created a Google data table
 5. I've added rows and columns
 6. I created an object, myChartOptions, to assign a title to the Line Chart I'll draw
 7. With the get function, I'll draw 
 */


function mydataUp(unEMPDATA){       //unEMPDATA is the local name for the JSON file
	
	console.log(unEMPDATA);        //I'm outputting the JSON file to be sure the function dataUp works on my javascript
	
	var gDataTable = new google.visualization.DataTable(); // I'm creating a table for my data from Google
	
	//When I add columns, the 1st parameter is the data type in that column
	// The 2nd parameter is the name of the column
	gDataTable.addColumn('string', unEMPDATA.columns[0]);
	gDataTable.addColumn('number', unEMPDATA.columns[1]);
	
	gDataTable.addRows(unEMPDATA.rows); //I'm including rows into my Google Data Table
	
	
	var myChartOptions = {                           //create options object to actually customize the look of our chart
          title: "Unemployment Since 1980"       //This is a configuration option
        };
	//tells Google Visualization to create a line chart and give it to the
	var gThisChart = new google.visualization.LineChart(document.getElementById('myNewChartDiv')); //I've created type of chart e.g. BarChart to LineChart etc
	gThisChart.draw(gDataTable,myChartOptions); //This is the operation that draws my Line Chart



}


function myGoogleUp() {       //This is my function to retrieve my Google data

	console.log("I've put up Google!");
	
	
	//I'm loading data from my Google Fusion Table and retrieving my the json 
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1L1rmYMaUAgK7tXaB9vt28njZA3ZAj4k8zHizBP9N+WHERE+DATE>'1971-12-01'&key=AIzaSyCgfAUYUUuX8vurL0WtKGYRGho11LEnsPI", mydataUp, "json"); 
	
	}


function mydocUp() {             //This function is for uploading my document

	console.log("My page is up!");

	//I'm loading the google visualization library
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "myGoogleUp"
	});

}


$(document).ready(mydocUp);  //I've used $(document).ready to call my function, docUp


