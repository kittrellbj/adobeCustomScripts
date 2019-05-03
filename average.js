// Average of all values in aFieldNames where aFieldName value is a number

// Variable declarations
var aFieldNames = new Array("Dropdown1", "Dropdown2", "Dropdown3"); // etc. Add all field names to this array in quotes, separated by commas
var nCount = 0;
var nSum = 0;
var fAverage = 0.0; // default value for result if no average computed
event.value = 0.0;

// process array of field names
for(i = 0; i < aFieldNames.length; i++) {
  if (this.getField(aFieldNames[i]).value >= 1) {
    // field is any value but 0
    nSum += this.getField(aFieldNames[i]).value; // add value to sum
    nCount++; // increment counter and proceed with loop
  } // else, do nothing with value
    } // end loop processing one field

// compute the average
if(nCount != 0) {
// non-zero divisor so we can compute the average
    fAverage = nSum / nCount;
    event.value = fAverage.toFixed(2); // round average up to nearest hundredths place
} // else, do nothing
