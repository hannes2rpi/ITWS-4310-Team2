function marker(num){
  //clear previous descriptions (if any)
  document.getElementById("markerDescription").innerHTML = '';

  //read json
  const data = '[{"counties": [{"name": "Delta","lat": 46.023,"long": -86.886, "fossils": [{"name": "Platystrophia"}, {"name": "Dalmanella"}, {"name": "Bivalvia"}, {"name": "Brachiopoda"}, {"name": "Hebertella"}]},{"name": "Cape Girardeau","lat": 37.411,"long": -89.668, "fossils": [{"name": "Flexicalymene senaria"}, {"name": "Hesperorthis tricenaria"}, {"name": "Pleurotomaria"}, {"name": "Crinoidea"}, {"name": "Dinorthis subquadrata"}]},{"name": "Pierce","lat": 44.721,"long": -92.391, "fossils": [{"name": "Plectambonites"}, {"name": "Modiolopsis"}, {"name": "Lyrodesma"}, {"name": "Hormotoma"}, {"name": "Crinoidea"}]},{"name": "Rock","lat": 42.648,"long": -89.012, "fossils": [{"name": "Hallopora"}, {"name": "Cyrtoceras"}, {"name": "Hebertella"}, {"name": "Allumettoceras"}, {"name": "Plectoceras"}]},{"name": "Winneshiek","lat": 43.297,"long": -91.842, "fossils": [{"name": "Asaphus"}, {"name": "Hesperorthis tricenaria"}, {"name": "Strophomena alternata"}, {"name": "Technophorus"}, {"name": "Modiolopsis"}]},{"name": "Dubuque","lat": 42.495,"long": -90.899, "fossils": [{"name": "Mollusca"}, {"name": "Diplograptus peosta"}, {"name": "Bivalvia"}, {"name": "Lingulella"}, {"name": "Strophomena"}]},{"name": "Iowa","lat": 43.004,"long": -90.105, "fossils": [{"name": "Hesperorthis tricenaria"}, {"name": "Cyclonema"}, {"name": "Leperditia"}, {"name": "Orthis triconaria"}, {"name": "Plectambonites"}]},{"name": "Mercer","lat": 37.828,"long": -84.870, "fossils": [{"name": "Omospira alexandra"}, {"name": "Plectambonites"}, {"name": "Hesperorthis tricenaria"}, {"name": "Crinoidea"}, {"name": "Pleurocystites"}]},{"name": "Lee","lat": 41.766,"long": -89.287, "fossils": [{"name": "Protozyga nicoletti"}, {"name": "Beloitoceras"}, {"name": "Oepikina"}, {"name": "Hesperorthis"}, {"name": "Rostricellula"}]},{"name": "Wayne","lat": 39.874,"long": -85.026, "fossils": [{"name": "Animalia"}, {"name": "Plectambonites"}, {"name": "Conularia doani"}, {"name": "Bivalvia"}, {"name": "Schizotreta"}]},{"name": "Grundy","lat": 41.280,"long": -88.407, "fossils": [{"name": "Synhomalonatus welleri"}, {"name": "Isotelus"}, {"name": "Calymene"}, {"name": "Cyclora"}, {"name": "Cyrtolites"}]},{"name": "Montgomery","lat": 39.761,"long": -84.270, "fossils": [{"name": "Platystrophia"}, {"name": "Plectambonites"}, {"name": "Trematis"}, {"name": "Hebertella"}, {"name": "Dinorthis subquadrata"}]},{"name": "Ste. Genevieve","lat": 37.886,"long": -90.184, "fossils": [{"name": "Anthozoa"}, {"name": "Rhynchotrema minnesotensis"}, {"name": "Bumastus"}, {"name": "Plectoceras"}, {"name": "Maclurites"}]},{"name": "Clinton","lat": 39.415,"long": -83.787, "fossils": [{"name": "Stenocrinus"}, {"name": "Glyptocrinus fornshelli"}, {"name": "Beyrichia"}, {"name": "Bivalvia"}, {"name": "Bellerophon mohri"}]},{"name": "Dearborn","lat": 39.154,"long": -84.957, "fossils": [{"name": "Bellerophon gorbyi"}, {"name": "Orthoceras"}, {"name": "Lyopora"}, {"name": "Dendrocrinus"}, {"name": "Modiolopsis"}]}]}]';
  var fossilFile = JSON.parse(data);

  //set description and add
  var description = '<p>' + fossilFile[0].counties[num].name + ': (' + (fossilFile[0].counties[num].lat).toFixed(1) + ', ' + (fossilFile[0].counties[num].long).toFixed(1) + ')</p>';
  var fossils = '<p>Fossils located here:';
  console.log(fossilFile[0].counties[num].fossils[0].name);
  for (var i = 0; i < fossilFile[0].counties[num].fossils.length; i++){
    if (i == 0){
      fossils += ' ';
    }else{
      fossils += ', ';
    }
    fossils += fossilFile[0].counties[num].fossils[i].name;
  }
  fossils += '</p>';
  document.getElementById("markerDescription").innerHTML += description;
  document.getElementById("markerDescription").innerHTML += fossils;
}


function clicked(){
  //ADD ALL COUNTY MARKERS TO MAP

  //read json
  const data = '[{"counties": [{"name": "Delta","lat": 46.023,"long": -86.886, "fossils": [{"name": "Platystrophia"}, {"name": "Dalmanella"}, {"name": "Bivalvia"}, {"name": "Brachiopoda"}, {"name": "Hebertella"}]},{"name": "Cape Girardeau","lat": 37.411,"long": -89.668, "fossils": [{"name": "Flexicalymene senaria"}, {"name": "Hesperorthis tricenaria"}, {"name": "Pleurotomaria"}, {"name": "Crinoidea"}, {"name": "Dinorthis subquadrata"}]},{"name": "Pierce","lat": 44.721,"long": -92.391, "fossils": [{"name": "Plectambonites"}, {"name": "Modiolopsis"}, {"name": "Lyrodesma"}, {"name": "Hormotoma"}, {"name": "Crinoidea"}]},{"name": "Rock","lat": 42.648,"long": -89.012, "fossils": [{"name": "Hallopora"}, {"name": "Cyrtoceras"}, {"name": "Hebertella"}, {"name": "Allumettoceras"}, {"name": "Plectoceras"}]},{"name": "Winneshiek","lat": 43.297,"long": -91.842, "fossils": [{"name": "Asaphus"}, {"name": "Hesperorthis tricenaria"}, {"name": "Strophomena alternata"}, {"name": "Technophorus"}, {"name": "Modiolopsis"}]},{"name": "Dubuque","lat": 42.495,"long": -90.899, "fossils": [{"name": "Mollusca"}, {"name": "Diplograptus peosta"}, {"name": "Bivalvia"}, {"name": "Lingulella"}, {"name": "Strophomena"}]},{"name": "Iowa","lat": 43.004,"long": -90.105, "fossils": [{"name": "Hesperorthis tricenaria"}, {"name": "Cyclonema"}, {"name": "Leperditia"}, {"name": "Orthis triconaria"}, {"name": "Plectambonites"}]},{"name": "Mercer","lat": 37.828,"long": -84.870, "fossils": [{"name": "Omospira alexandra"}, {"name": "Plectambonites"}, {"name": "Hesperorthis tricenaria"}, {"name": "Crinoidea"}, {"name": "Pleurocystites"}]},{"name": "Lee","lat": 41.766,"long": -89.287, "fossils": [{"name": "Protozyga nicoletti"}, {"name": "Beloitoceras"}, {"name": "Oepikina"}, {"name": "Hesperorthis"}, {"name": "Rostricellula"}]},{"name": "Wayne","lat": 39.874,"long": -85.026, "fossils": [{"name": "Animalia"}, {"name": "Plectambonites"}, {"name": "Conularia doani"}, {"name": "Bivalvia"}, {"name": "Schizotreta"}]},{"name": "Grundy","lat": 41.280,"long": -88.407, "fossils": [{"name": "Synhomalonatus welleri"}, {"name": "Isotelus"}, {"name": "Calymene"}, {"name": "Cyclora"}, {"name": "Cyrtolites"}]},{"name": "Montgomery","lat": 39.761,"long": -84.270, "fossils": [{"name": "Platystrophia"}, {"name": "Plectambonites"}, {"name": "Trematis"}, {"name": "Hebertella"}, {"name": "Dinorthis subquadrata"}]},{"name": "Ste. Genevieve","lat": 37.886,"long": -90.184, "fossils": [{"name": "Anthozoa"}, {"name": "Rhynchotrema minnesotensis"}, {"name": "Bumastus"}, {"name": "Plectoceras"}, {"name": "Maclurites"}]},{"name": "Clinton","lat": 39.415,"long": -83.787, "fossils": [{"name": "Stenocrinus"}, {"name": "Glyptocrinus fornshelli"}, {"name": "Beyrichia"}, {"name": "Bivalvia"}, {"name": "Bellerophon mohri"}]},{"name": "Dearborn","lat": 39.154,"long": -84.957, "fossils": [{"name": "Bellerophon gorbyi"}, {"name": "Orthoceras"}, {"name": "Lyopora"}, {"name": "Dendrocrinus"}, {"name": "Modiolopsis"}]}]}]';
  var fossilFile = JSON.parse(data);

  //top of map (lat): 47.7, bottom of map (lat): 36.5, left of map (long): -95.0, right of map (long): -74.4
  var leftBound = -121.5;
  var rightBound = -63.5;
  var topBound = 59.4;
  var bottomBound = 25.8;

  //add markers to map
  for (var i = 0; i < fossilFile[0].counties.length; i++){
    var countyMapLat = ((topBound - Number(fossilFile[0].counties[i].lat))*450)/(topBound-bottomBound)-14;
    var countyMapLong = ((leftBound - Number(fossilFile[0].counties[i].long))*700)/(leftBound-rightBound)+7;
    console.log(countyMapLat);
    console.log(countyMapLong);
    var image = '<img class="image2" onclick="marker(' + i + ')" src="images/red_marker.png" width="14" height="14" style="top:' + countyMapLat + 'px;left:' + countyMapLong + 'px;"/>';
    document.getElementById("map").innerHTML += image;
  }
}

document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("accordion");
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
});
