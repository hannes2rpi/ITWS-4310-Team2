function clicked(){
  //SELECT LOCATION AND ADD CORRESPONDING TEXT AND IMAGES

  //clear previous
  document.getElementById("fossilInfo").innnerHTML = '';

  //get location value
  var location = document.getElementById("location").value;
  var fossilImage = '';
  var fossilText = '';

  if (location == "Illinois"){
    console.log("illinois");
    fossilText = '<p>Text about Illinois goes here</p>';
    fossilImage = '<img src="img/illinois" alt="fossil from Illinois" />';
  }else if (location == "Ohio"){
    console.log("ohio");
    fossilText = '<p>Text about Ohio goes here</p>';
    fossilImage = '<img src="img/ohio" alt="fossil from Ohio" />';
  }else if (location == "Pennsylvania"){
    console.log("pennsylvania");
    fossilText = '<p>Text about Pennsylvania goes here</p>';
    fossilImage = '<img src="img/pennsylvania" alt="fossil from Pennsylvania" />';
  }

  document.getElementById("fossilInfo").innnerHTML += fossilText;
  document.getElementById("fossilInfo").innnerHTML += fossilImage;

};
