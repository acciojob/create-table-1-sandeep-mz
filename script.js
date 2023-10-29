function insert_Row() {
    //Write your code here
  // Get a reference to the table by its id
  var table = document.getElementById('sampleTable');

  // Create a new row
  var newRow = table.insertRow(0); // 0 specifies that the new row will be inserted at the top

  // Create two cells for the new row
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);

  // Set the text content of the cells
  cell1.innerHTML = 'New Cell1';
  cell2.innerHTML = 'New Cell2';
  
}
