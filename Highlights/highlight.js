fetch("highlight.json")
  .then(response => response.json())
  .then(data => {
    const dropdown = document.getElementById('fossilDropdown');
    const nameElement = document.getElementById('fossilName');
    const imageElement = document.getElementById('fossilImage');
    const descriptionElement = document.getElementById('fossilDescription');

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
    });
  });
