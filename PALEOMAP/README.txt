ADDING ENTRIES TO PALEOMAP OR BEDROCK MAP

Step 1: Open either paleomap.js or bedrock.js, whichever page you want
the new county to appear on. 

Step 2: Locate a variable called "data". It will be located in functions
"clicked()" and "marker(num)".

Step 3: Create a new entry following this format:
{"name": "Delta","lat": 46.023,"long": -86.886, "fossils": [{"name": "Platystrophia"}, {"name": "Dalmanella"}, {"name": "Bivalvia"}, {"name": "Brachiopoda"}, {"name": "Hebertella"}]}

You will need: county name, county latitude, county longtiude, and 5 names of fossils

Step 4: Add this entry to variable data. Make sure the entry is after "counties:" and is seperated from other entries by a comma (,).

Step 5: Make sure you add this entry to the data variable in both "clicked()" and "marker(num)" or the new county will either
not appear on the map or not list details when clicked on.

Step 6: Save the file and contact me if you have any additional questions.

TO DELETE OR EDIT AN ENTRY: Find variable data as described above and simply delete or change values in an entry. 

IF YOU ARE HAVING TROUBLE WITH THE FORMATTING: use this website to better visualize any potential flaws in the json object (data)
https://jsonformatter.curiousconcept.com/#