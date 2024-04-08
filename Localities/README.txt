ADDING ENTRIES TO LOCALITIES

Step 1: Open localities.js

Step 2: Locate the chain of "if statements".

Step 3: At the end of the last "if else" - right next to the closing bracket, add the new entry
following this format:

else if (location == "doorcounty"){
	fossilText = '<p><b>Location:</b> Wequiock Falls County Park, Door County, Wisconsin<br><b>Formation:</b> Maquoketa Shale<br><b>	Age:</b> Late Ordovician</p>';
	fossilImage = '<img id="pic" src="images/' + location + '1.jpg"/><img id="pic" src="images/' + location + '2.jpg"/><img id="pic" 	src="images/' + location + '3.jpg"/>';
}

Step 4: Save localities.js and open localities.html

Step 5: Locate the selection element - most likely near the end of the document and looks like this:
	<select name="location" id="location">
          <option value="doorcounty">Door County</option>
          <option value="grantcounty">Grant County</option>
          <option value="winneshiekcounty">Winneshiek County</option>
        </select>

Step 6: Add a new option value following this format: 
	<option value="doorcounty">Door County</option>

Step 7: Save localities.html and contact me for addition help.
