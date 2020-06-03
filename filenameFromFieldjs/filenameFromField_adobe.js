// filenameFromField_adobe.js
// Author: Brian Kittrell
// Home:   https://github.com/kittrellbj/adobeCustomScripts
// Description: This code snippet goes inside Adobe PDF attached to the save button in the form.
//              To use, create a button on the PDF form (or use this to create other fucntionality) so that when
//              this script is called, it is executed from the form field you are using to call the method.

var directory = "/the/full/path/"; // Change this. This is the full path where you want the document to be saved once the button is clicked.
if (typeof(saveFromField) == "function") {
    saveFromField(this, directory, this.getField("NamingField").value + ".pdf"); // Change NamingField to the field governing the save name of the final document.
    // If you want more complexity to the final document name, such as adding the current date, you could use something like:
    // var currentDate = new Date();
    // var formattedDate = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();  // Formats: 2020-1-1
    // this.getfield("NamingField").value + "_" + formattedDate + ".pdf"; // Results in filename: NamingField_2020-1-1.pdf
} else {
    app.alert("Unable to save."); // Catch errors.
}
