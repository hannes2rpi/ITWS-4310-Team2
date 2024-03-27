fetch("extinctions.json")
  .then(response => response.json())
  .then(data => {
    data["fossils"].forEach((fossil, index) => {
      let fossilContainer = document.createElement("div");
      fossilContainer.setAttribute("id", "fossil" + index);
      fossilContainer.classList.add("fossil-container");

      let nameElement = document.createElement("h2");
      nameElement.textContent = fossil["name"];
      nameElement.classList.add("fossil-name");
      nameElement.setAttribute("class", "fossilName");


      let descriptionElement = document.createElement("p");
      descriptionElement.textContent = fossil["description"];
      descriptionElement.classList.add("fossil-description");
      descriptionElement.setAttribute("class", "fossilDescription");


      let imageElement = document.createElement("img");
      imageElement.setAttribute("src", fossil["link"]);
      imageElement.setAttribute("alt", fossil["name"]);
      imageElement.style.width = '350px';
      imageElement.style.height = '200px'; 
      imageElement.classList.add("fossil-image");

      fossilContainer.appendChild(nameElement);
      fossilContainer.appendChild(descriptionElement);
      fossilContainer.appendChild(imageElement);

      document.body.appendChild(fossilContainer);
    });
  });
