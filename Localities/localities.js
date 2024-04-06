function clicked(){
  //SELECT LOCATION AND ADD CORRESPONDING TEXT AND IMAGES

  //get location value
  var location = document.getElementById("location").value;
  var fossilImage = '';
  var fossilText = '';

  if (location == "doorcounty"){
    console.log(location);
    fossilText = '<p><b>Location:</b> Wequiock Falls County Park, Door County, Wisconsin<br><b>Formation:</b> Maquoketa Shale<br><b>Age:</b> Late Ordovician</p>';
    fossilImage = '<img id="pic" src="images/' + location + '1.jpg"/><img id="pic" src="images/' + location + '2.jpg"/><img id="pic" src="images/' + location + '3.jpg"/>';
  }else if (location == "grantcounty"){
    console.log(location);
    fossilText = '<p><b>Location:</b> Finnimore Quarry on Highway 18, Grant County, Wisconsin<br><b>Formation:</b> Platteville Limestone<br><b>Members:</b> McGregor and Mifflin<br><b>Age:</b> Late Ordovician</p>';
    fossilImage = '<img id="pic" src="images/' + location + '1.jpg"/><img id="pic" src="images/' + location + '2.jpg"/><img id="pic" src="images/' + location + '3.jpg"/><img id="pic" src="images/' + location + '4.jpg"/><img id="pic" src="images/' + location + '5.jpg"/><img id="pic" src="images/' + location + '6.jpg"/><img id="pic" src="images/' + location + '7.jpg"/><img id="pic" src="images/' + location + '8.jpg"/><img id="pic" src="images/' + location + '9.jpg"/>';
  }else if (location == "winneshiekcounty"){
    console.log(location);
    fossilText = '<p><b>Location:</b> Winneshiek County, Iowa<br><b>Formation:</b> Decorah<br><b>Age:</b> Ordovician</p>';
    fossilImage = '<img id="pic" src="images/' + location + '1.jpg"/><img id="pic" src="images/' + location + '2.jpg"/><img id="pic" src="images/' + location + '3.jpg"/><img id="pic" src="images/' + location + '4.jpg"/><img id="pic" src="images/' + location + '5.jpg"/><img id="pic" src="images/' + location + '6.jpg"/>';
  }

  document.getElementById("resultimg").innerHTML = fossilImage;
  document.getElementById("result").innerHTML = fossilText;

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
