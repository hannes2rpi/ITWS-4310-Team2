function clicked(){
  //SELECT FOSSIL AND ADD CORRESPONDING TEXT AND IMAGES

  //get fossil value
  var fossil = document.getElementById("fossil").value;
  var fossilImage = '';
  var fossilText = '';

  if (fossil == "coralgrewingkia"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> Hall 148<br><b>Rugose Coral:</b> <i>Grewingkia</i> sp.<br><b>Age:</b> Late Ordovician<br><b>Location:</b> Wayne County, Richmond, Indiana</p>';
    fossilImage = '<img id="pic" src="images/RPI Coral_Hall_148_Grewingkia.jpg"/><img id="pic" src="images/RPI Coral_Hall_148_Grewingkia-02.jpg"/>';
  }else if (fossil == "coralzaphrentis"){
    console.log(fossil);
    fossilText = '<p><b>Rugose Coral:</b> <i>Zaphrentis</i> sp.<br><b>Age:</b> Late Ordovician<br><b>Location:</b> Jefferson County, Indiana</p>';
    fossilImage = '<img id="pic" src="images/RPI Coral_Zaphrentis.jpg"/>';
  }else if (fossil == "bryozoan"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> PE 2059<br><b>Bryozoan:</b> <i>Pachydictya acuta</i><br><b>Age:</b> Ordovician<br><b>Location:</b> Belleville, Ontario, Canada</p>';
    fossilImage = '<img id="pic" src="images/RPI Bryozoa PE2059 Pachydictya acuta.jpg"/>';
  }else if (fossil == "bivalve1"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> UC 697<br><b>Bivalve:</b> <i>Ambonychia radiata</i><br><b>Age:</b> Late Ordovician<br><b>Location:</b> Hamilton County, Cincinnati, Ohio</p>';
    fossilImage = '<img id="pic" src="images/Bivalve-01.jpg"/>';
  }else if (fossil == "bivalve2"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> UC 489<br><b>Bivalve:</b> <i>Ambonychia radiata</i><br><b>Age:</b> Late Ordovician<br><b>Location:</b> Hamilton County, Cincinnati, Ohio</p>';
    fossilImage = '<img id="pic" src="images/Bivalve-02.jpg"/>';
  }else if (fossil == "gastropod1"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> P 6393<br><b>Gastropod:</b> <i>Cyclonema varicosum</i><br><b>Age:</b> Ordovician<br><b>Location:</b> Butler County, Middletown, Ohio</p>';
    fossilImage = '<img id="pic" src="images/Gastropod-01.jpg"/>';
  }else if (fossil == "gastropod2"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> P 6393<br><b>Gastropod:</b> <i>Cyclonema mediale</i><br><b>Age:</b> Ordovician<br><b>Location:</b> Hamilton County, Cincinnati, Ohio</p>';
    fossilImage = '<img id="pic" src="images/Gastropod-02.jpg"/>';
  }else if (fossil == "gastropod3"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> P 345B<br><b>Gastropod:</b> <i>Pleurotomaria</i> sp.<br><b>Age:</b> Ordovician<br><b>Location:</b> Hamilton County, Cincinnati, Ohio</p>';
    fossilImage = '<img id="pic" src="images/Gastropod-03.jpg"/>';
  }else if (fossil == "gastropod4"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> PE 56766<br><b>Gastropod:</b> <i>Omospira Alexandra</i><br><b>Age:</b> Ordovician<br><b>Location:</b> Mercer County, High Bridge, Kentucky</p>';
    fossilImage = '<img id="pic" src="images/Gastropod-04.jpg"/>';
  }else if (fossil == "crinoid1"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> P 11905<br><b>Crinoid:</b> <i>Reteocrinus onealli</i><br><b>Age:</b> Ordovician<br><b>Location:</b> Clinton County, Blanchester, Ohio</p>';
    fossilImage = '<img id="pic" src="images/Crinoid-01.jpg"/>';
  }else if (fossil == "crinoid2"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> P 141<br><b>Crinoid:</b> <i>Glyptocrinus dyeri</i><br><b>Age:</b> Ordovician<br><b>Location:</b> Winnebago County, Rockford, Indiana</p>';
    fossilImage = '<img id="pic" src="images/Crinoid-02.jpg"/>';
  }else if (fossil == "echinoderm1"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> PE 25564<br><b>Echinoderm:</b> <i>Cyclocystoidees illinoisensis</i><br><b>Age:</b> Ordovician<br><b>Location:</b> Alexander County, Thebes, Illinois</p>';
    fossilImage = '<img id="pic" src="images/Other Echinoderm-01.jpg"/>';
  }else if (fossil == "echinoderm2"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> PE 54844<br><b>Echinoderm:</b> <i>Protaster flexuosa</i><br><b>Age:</b> Ordovician<br><b>Location:</b> Hamilton County, Cincinnati, Ohio</p>';
    fossilImage = '<img id="pic" src="images/Other Echinoderm-02.jpg"/>';
  }else if (fossil == "echinoderm3"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> PE 17762<br><b>Echinoderm:</b> <i>Urasterella</i> .sp<br><b>Age:</b> Ordovician<br><b>Location:</b> Scott County, Dorton Fort, Virginia</p>';
    fossilImage = '<img id="pic" src="images/Other Echinoderm-03.jpg"/>';
  }else if (fossil == "brachiopod1"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> P 294.5<br><b>Brachiopod:</b> <i>Leptaena rhomboidalis</i><br><b>Age:</b> Late Ordovician<br><b>Location:</b> Wayne County, Richmond, Indiana</p>';
    fossilImage = '<img id="pic" src="images/Brachiopod-01.jpg"/>';
  }else if (fossil == "brachiopod2"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> UC 22656<br><b>Brachiopod:</b> <i>Platystrophia ponderosa</i><br><b>Age:</b> Late Ordovician<br><b>Location:</b> Hamilton County, Cincinnati, Ohio</p>';
    fossilImage = '<img id="pic" src="images/Brachiopod-02.jpg"/>';
  }else if (fossil == "cephalopod1"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> UC 59937<br><b>Cephalopod:</b> <i>Endoceras</i> .sp<br><b>Age:</b> Ordovician<br><b>Location:</b> Grant County, Fennimore, Wisconsin</p>';
    fossilImage = '<img id="pic" src="images/Cephalopod-01.jpg"/>';
  }else if (fossil == "cephalopod2"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> UC 15108<br><b>Cephalopod:</b> <i>Endoceras</i> .sp<br><b>Age:</b> Ordovician<br><b>Location:</b> Dodge County, Trenton, Wisconsin</p>';
    fossilImage = '<img id="pic" src="images/Cephalopod-02.jpg"/>';
  }else if (fossil == "trilobite1"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> UC 990A<br><b>Trilobite:</b> <i>Calymene callicephala</i><br><b>Age:</b> Late Ordovician<br><b>Location:</b> Hamilton County, Cincinnati, Ohio</p>';
    fossilImage = '<img id="pic" src="images/Trilobite-01.jpg"/>';
  }else if (fossil == "trilobite2"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> UC 990A<br><b>Trilobite:</b> <i>Calymene callicephala</i><br><b>Age:</b> Late Ordovician<br><b>Location:</b> Hamilton County, Cincinnati, Ohio</p>';
    fossilImage = '<img id="pic" src="images/Trilobite-02.jpg"/>';
  }else if (fossil == "trilobite3"){
    console.log(fossil);
    fossilText = '<p><b>Specimen number:</b> P 181<br><b>Trilobite:</b> <i>Isotellus gigas</i><br><b>Age:</b> Late Ordovician<br><b>Location:</b> Wayne County, Richmond, Indiana</p>';
    fossilImage = '<img id="pic" src="images/Trilobite-03.jpg"/>';
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
