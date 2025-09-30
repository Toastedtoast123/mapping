const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const searchInput = document.getElementById("search");
const menuItems = document.querySelectorAll("#menuList li");
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  menuItems.forEach(item => {
  const text = item.textContent.toLowerCase();
  item.style.display = text.includes(filter) ? "" : "none";
   });
});

var map = L.map('map').setView([14.5995, 120.9842], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    var places = [
      { name: "Main Gate", coords: [14.5995, 120.9842], info: "Welcome to the campus!" },
      { name: "Library", coords: [14.6000, 120.9850], info: "Open 8AM - 6PM" },
      { name: "Canteen", coords: [14.5998, 120.9845], info: "Food and drinks available" },
      { name: "Gymnasium", coords: [14.6002, 120.9848], info: "Sports and activities" },
      { name: "Registrar's Office", coords: [14.5997, 120.9840], info: "For student records" }
    ];

    var markers = {};
    places.forEach(p => {
      var m = L.marker(p.coords).addTo(map).bindPopup(`<b>${p.name}</b><br>${p.info}`);
      markers[p.name] = m;
    });

    var placesDiv = document.getElementById("places");
    function renderList(filter="") {
      placesDiv.innerHTML = "";
      places.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(p => {
          var div = document.createElement("div");
          div.className = "place";
          div.textContent = p.name;
          div.onclick = () => {
            map.setView(p.coords, 18);
            markers[p.name].openPopup();
          };
          placesDiv.appendChild(div);
        });
    }
    renderList();

    document.getElementById("search").addEventListener("input", (e) => {
      renderList(e.target.value);
    });