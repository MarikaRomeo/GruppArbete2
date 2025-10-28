
const people = [
  { name: "Filip", age: 31 },
  { name: "Bosse", age: 32 },
  { name: "Olof", age: 18 },
  { name: "Lars", age: 45 }
];

const listElement = document.getElementById("peopleList");
const filterButton = document.getElementById("filterBtn");

function displayPeople(personArray) {
  listElement.innerHTML = ""; // rensa listan först
  personArray.forEach(person => {
    const li = document.createElement("li");
    li.textContent = `${person.name} (${person.age} år)`;
    listElement.appendChild(li);
  });
}

// Visa alla personer från start
displayPeople(people);

filterButton.addEventListener("click", () => {
  const filteredAndSorted = people
    .filter(p => p.age > 20)
    .sort((a, b) => a.age - b.age);
  
  displayPeople(filteredAndSorted);
});
