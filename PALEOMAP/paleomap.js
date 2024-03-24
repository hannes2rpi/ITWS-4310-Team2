function marker(num){
  //clear previous markers (if any)
  document.getElementById("markerDescription").innerHTML = '';

  var number = Number(num);
  console.log(number);

  //read json
  const data = '[{"counties": [{"name": "Pittsburgh","lat": 40.4,"long": -80.0},{"name": "Saukville","lat": 43.4,"long": -87.9},{"name": "Chicago","lat": 41.9,"long": -87.6}],"fossils": [{"name": "raptor","lat": 42.5,"long": -74.9},{"name": "dog","lat": 43.0,"long": -87.0},{"name": "bug","lat": 42.0,"long": -90.0},{"name": "fish","lat": 43.0,"long": -76.0},{"name": "bee","lat": 42.1,"long": -88.0},{"name": "lizard","lat": 42.5,"long": -80.1}]}]';
  var fossilFile = JSON.parse(data);

  //set the given county and assign coordinates
  var county = document.getElementById("county").value;
  var coordsCounty = [];
  for (var i = 0; i < fossilFile[0].counties.length; i++){
    if (county == fossilFile[0].counties[i].name){
      coordsCounty[0] = fossilFile[0].counties[i].lat;
      coordsCounty[1] = fossilFile[0].counties[i].long;
    }
  }

  if (number == 5){
    //set description and add
    var description = '<p>' + county + ': (' + coordsCounty[0] + ', ' + coordsCounty[1] + ')</p>';
    document.getElementById("markerDescription").innerHTML += description;
  }else{
    //initialize arrays
    var listOfFossilData = [];
    var fossilData = [];
    var closest5 = [];

    //initialize values
    var distance = 0;
    var name;
    var lat;
    var long;

    //populate arrays with info from 
    for (var i = 0; i < fossilFile[0].fossils.length; i++){
      distance = (Math.sqrt(Math.pow((fossilFile[0].fossils[i].lat-coordsCounty[0]),2) + Math.pow((fossilFile[0].fossils[i].long-coordsCounty[1]),2))).toFixed(1);
      name = fossilFile[0].fossils[i].name;
      lat = fossilFile[0].fossils[i].lat;
      long = fossilFile[0].fossils[i].long;
      fossilData = [distance, name, lat, long];
      listOfFossilData[i] = fossilData;
    }

    //sort fossils by lowest distance from county
    var done = false;
    while(!done){
      done = true;
      for (var i = 1; i < listOfFossilData.length; i++){
        if (Number(listOfFossilData[i-1][0]) > Number(listOfFossilData[i][0])){
          done = false;
          var temp = listOfFossilData[i-1];
          listOfFossilData[i-1] = listOfFossilData[i];
          listOfFossilData[i] = temp;
        }
      }
    }

    //put the 5 closest fossils into a separate array
    console.log("***CLOSEST 5***");
    for (var i = 0; i < 5; i++){
      closest5[i] = listOfFossilData[i];
      console.log("distance: " + listOfFossilData[i][0]);
      console.log("name: " + listOfFossilData[i][1]);
      console.log("lat: " + listOfFossilData[i][2]);
      console.log("long: " + listOfFossilData[i][3]);
    }

    //set description and add
    var description = '<p>' + closest5[num][1] + ': (' + closest5[num][2] + ', ' + closest5[num][3] + ')</p>';
    document.getElementById("markerDescription").innerHTML += description;
  }
}


function clicked(){
  //SELECT COUNTY, READ JSON, FIND 5 CLOSEST FOSSILS, PLACE MARKERS ON MAP

  //clear previous markers (if any)
  document.getElementById("map").innerHTML = '<img class="image1" src="images/Chicago-centered-map_450_Ordovician-new(copy).jpg" alt="map of midwest" width="700" height="450"/>';

  //read json
  const data = '[{"counties": [{"name": "Pittsburgh","lat": 40.4,"long": -80.0},{"name": "Saukville","lat": 43.4,"long": -87.9},{"name": "Chicago","lat": 41.9,"long": -87.6}],"fossils": [{"name": "raptor","lat": 42.5,"long": -74.9},{"name": "dog","lat": 43.0,"long": -87.0},{"name": "bug","lat": 42.0,"long": -90.0},{"name": "fish","lat": 43.0,"long": -76.0},{"name": "bee","lat": 42.1,"long": -88.0},{"name": "lizard","lat": 42.5,"long": -80.1}]}]';
  var fossilFile = JSON.parse(data);

  //set the given county and assign coordinates
  var county = document.getElementById("county").value;
  var coordsCounty = [];

  //check if county is valid
  var found = false;
  for (var i = 0; i < fossilFile[0].counties.length; i++){
    if (county == fossilFile[0].counties[i].name){
      coordsCounty[0] = fossilFile[0].counties[i].lat;
      coordsCounty[1] = fossilFile[0].counties[i].long;
      found = true;
    }
  }

  //return if county not valid
  if (!found){
    console.log("invalid county");
    return;
  }

  //initialize arrays
  var listOfFossilData = [];
  var fossilData = [];
  var closest5 = [];

  //initialize values
  var distance = 0;
  var name;
  var lat;
  var long;

  //populate arrays with info from 
  for (var i = 0; i < fossilFile[0].fossils.length; i++){
    distance = (Math.sqrt(Math.pow((fossilFile[0].fossils[i].lat-coordsCounty[0]),2) + Math.pow((fossilFile[0].fossils[i].long-coordsCounty[1]),2))).toFixed(1);
    name = fossilFile[0].fossils[i].name;
    lat = fossilFile[0].fossils[i].lat;
    long = fossilFile[0].fossils[i].long;
    fossilData = [distance, name, lat, long];
    listOfFossilData[i] = fossilData;
  }

  //sort fossils by lowest distance from county
  var done = false;
  while(!done){
    done = true;
    for (var i = 1; i < listOfFossilData.length; i++){
      if (Number(listOfFossilData[i-1][0]) > Number(listOfFossilData[i][0])){
        done = false;
        var temp = listOfFossilData[i-1];
        listOfFossilData[i-1] = listOfFossilData[i];
        listOfFossilData[i] = temp;
      }
    }
  }

  //put the 5 closest fossils into a separate array
  console.log("***CLOSEST 5***");
  for (var i = 0; i < 5; i++){
    closest5[i] = listOfFossilData[i];
    console.log("distance: " + listOfFossilData[i][0]);
    console.log("name: " + listOfFossilData[i][1]);
    console.log("lat: " + listOfFossilData[i][2]);
    console.log("long: " + listOfFossilData[i][3]);
  }

  //top of map (lat): 47.7, bottom of map (lat): 36.5, left of map (long): -95.0, right of map (long): -74.4
  
  //convert county coordinates to pixels (change in lat/long converted to change in pixel location)
  var countyMapLat = (((47.7 - coordsCounty[0])*450)/(47.7-36.5)).toFixed(1)-20;
  var countyMapLong = ((((-95) - coordsCounty[1])*700)/((-95)-(-74.4))).toFixed(1)+10;
  console.log(countyMapLat);
  console.log(countyMapLong);

  //add marker to map to map
  var image = '<img class="image2" onclick="marker(5)" src="images/red_marker.png" width="20" height="20" style="top:' + countyMapLat + 'px;left:' + countyMapLong + 'px;"/>';
  document.getElementById("map").innerHTML += image;

  //convert fossil coordinates to pixels (change in lat/long converted to change in pixel location)
  var fossilMapLat = 0;
  var fossilMapLong = 0;

  for (var i = 0; i < closest5.length; i++){
    fossilMapLat = (((47.7 - closest5[i][2])*450)/(47.7-36.5)).toFixed(1)-20;
    fossilMapLong = ((((-95) - closest5[i][3])*700)/((-95)-(-74.4))).toFixed(1)+10;
    console.log(fossilMapLat);
    console.log(fossilMapLong);
    var image2 = '<img class="image2" onclick="marker(' + i + ')" src="images/green_marker.png" width="20" height="20" style="top:' + fossilMapLat + 'px;left:' + fossilMapLong + 'px;"/>';
    document.getElementById("map").innerHTML += image2;
  }

};
