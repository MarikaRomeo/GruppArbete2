const people = [
  { firstName: "Anna", lastName: "Svensson", email: "anna@domain.com" },
  { firstName: "Erik", lastName: "Johansson", email: "erik@domain.com" },
  { firstName: "Lisa", lastName: "Berg", email: "lisa@othermail.com" }
];

const list = document.getElementById('peopleList');
const filterInput = document.getElementById('filterInput');
const sortBtn = document.getElementById('sortBtn');

let sortAscending = true;

function displayList(data) {
  list.innerHTML = '';
  data.forEach(person => {
    const li = document.createElement('li');
    li.textContent = `${person.firstName} ${person.lastName} – ${person.email}`;
    list.appendChild(li);
  });
}

// --- Filterfunktion ---
filterInput.addEventListener('input', () => {
  const filterValue = filterInput.value.toLowerCase();
  const filtered = people.filter(p => p.email.toLowerCase().includes(filterValue));
  displayList(filtered);
});

// --- Sorteringsfunktion ---
sortBtn.addEventListener('click', () => {
  sortAscending = !sortAscending;
  const sorted = [...people].sort((a, b) => {
    if (a.email < b.email) return sortAscending ? -1 : 1;
    if (a.email > b.email) return sortAscending ? 1 : -1;
    return 0;
  });
  displayList(sorted);
  sortBtn.textContent = sortAscending ? "Sort by email (A–Z)" : "Sort by email (Z–A)";
});

// Visa listan vid start
displayList(people);