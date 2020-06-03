// filenameFromField.js
// Author: Brian Kittrell
// Home:   https://github.com/kittrellbj/adobeCustomScripts
// Description: This javascript file goes in your Adobe Javascript directory, such as C:\Program Files\Adobe\Acrobat\Javascript.

var saveFromField = app.trustedFunction(
    function(documentObject, filePath, fileName) {
        filePath = filePath.replace(/([^/])$/, "$1/");
        // Attempt to save the file based on the callback parameters
        try {
            app.beginPriv();
            documentObject.saveAs(filePath + fileName);
            app.endPriv();
        // If there was an error, output the error information for the callback
        } catch (errorMsg) {
        app.alert("There were errors while attempting to save the file: " + errorMsg);
        }
    }
  );
