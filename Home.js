
myFunction();

// Next/pr


myFunction();


function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// Property Class
class Property {
  constructor(id, address, unit, zip, sf, rooms, brs, fee) {
    this.id = id;
    this.address = address;
    this.unit = unit;
    this.zip = zip;
    this.sf = sf;
    this.rooms = rooms;
    this.brs = brs;
    this.fee = fee;
  }
}

// UI Class
class UI {
  static displayProperties() {
    const StoredProperties = [
      {
        id: '1',
        address: '789 crystal bay lane',
        unit: 'N/A',
        zip: '32885',
        sf: '3000',
        rooms: '4',
        brs: '3',
        fee: '50'
      },
      {
        id: '2',
        address: '790 crystal bay lane',
        unit: 'N/A',
        zip: '32885',
        sf: '4000',
        rooms: '6',
        brs: '3',
        fee: '100'
      }
    ]

    const properties = StoredProperties;

    properties.forEach((property) => UI.addPropToList(property));

    static addPropToList(property) {
      const list = document.querySelector()
    }
  }
}

// Store Class: Handles Storage

// Event: Display Properties

// Event: Add a Book

// Event: Remove a Book