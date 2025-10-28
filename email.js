class People {
  constructor() {
    // 🔹 Filen ligger i samma mapp som denna script-fil
    this.jsonPath = 'people.json';
    this.people = [];
    this.sortAscending = true;
  }

  // 🔹 Hämta data från people.json
  async load() {
    try {
      const response = await fetch(this.jsonPath);
      if (!response.ok) throw new Error("Kunde inte läsa people.json");
      this.people = await response.json();
      return this.people;
    } catch (error) {
      console.error("Fel vid laddning:", error);
      return [];
    }
  }

  // 🔹 Filtrera efter e-post
  filterByEmail(value) {
    const lower = value.toLowerCase();
    return this.people.filter(p => p.email.toLowerCase().includes(lower));
  }

  // 🔹 Sortera efter e-post
  sortByEmail() {
    this.sortAscending = !this.sortAscending;
    return [...this.people].sort((a, b) => {
      if (a.email < b.email) return this.sortAscending ? -1 : 1;
      if (a.email > b.email) return this.sortAscending ? 1 : -1;
      return 0;
    });
  }
}

// ---------------------------
// 🔹 DOM-element
// ---------------------------
const list = document.getElementById('peopleList');
const filterInput = document.getElementById('filterInput');
const sortBtn = document.getElementById('sortBtn');

// 🔹 Skapa instans av People-klassen
const peopleManager = new People();

// 🔹 Visa listan
function displayList(data) {
  list.innerHTML = '';
  data.forEach(person => {
    const li = document.createElement('li');
    li.textContent = `${person.firstName} ${person.lastName} – ${person.email}`;
    list.appendChild