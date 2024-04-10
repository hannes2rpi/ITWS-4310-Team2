fetch("highlight.json")
  .then(response => response.json())
  .then(data => {
    const dropdown = document.getElementById('fossilDropdown');
    const nameElement = document.getElementById('fossilName');
    const imageElement = document.getElementById('fossilImage');
    const descriptionElement = document.getElementById('fossilDescription');
    const numberElement = document.getElementById('fossilNumber');
    const ageElement = document.getElementById('fossilAge');
    const locationElement = document.getElementById('fossilLocation');

    data["fossils"].forEach((fossil) => {
      const option = document.createElement('option');
      option.value = fossil["name"];
      option.textContent = fossil["name"];
      dropdown.appendChild(option);
    });

    dropdown.addEventListener('change', (event) => {
      const selectedFossilName = event.target.value;
      const selectedFossil = data["fossils"].find(fossil => fossil["name"] === selectedFossilName);

      nameElement.textContent = selectedFossil["name"];
      imageElement.src = selectedFossil["link"];
      imageElement.alt = selectedFossil["name"] + " image";
      descriptionElement.textContent = selectedFossil["description"];
      numberElement.textContent = selectedFossil["specimenNumber"];
      ageElement.textContent = selectedFossil["age"];
      locationElement.textContent = selectedFossil["location"];
    });
  });

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
