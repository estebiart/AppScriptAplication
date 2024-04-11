
function doGet() {

	let calSheet= SpreadsheetApp.openById('1C70raMP3gO_nNd_Syd1iaYrmpDrX-fWqMCxdUIyOpxA');
	let SheetG = calSheet.getSheetByName('Hoja 1');  
	let Range = SheetG.getRange("A1:M15");
	let data = Range.getValues();
	let headers = data[0];
	let jsonArray = [];
	for (let i = 1; i < data.length; i++) {
	  let obj = {};
	  for (let j = 0; j < headers.length; j++) {
		obj[headers[j]] = data[i][j];
	  }
	  jsonArray.push(obj);
	}
	let datajson =  jsonArray;
  
	let jsonString = JSON.stringify(datajson);
	let output = ContentService.createTextOutput(jsonString);
	output.setMimeType(ContentService.MimeType.JSON);
	return output;
  
  } 