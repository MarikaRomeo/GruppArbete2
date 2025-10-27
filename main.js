// read json from a url using fetch and get the response
const peopleRaw = await fetch('people.json');

// unpack the json into a data structure in memory ('deserialize')
const people = await peopleRaw.json();

// Or as a oneliner
// const people = await(await fetch('people.json')).json();

// A for...of loop with a destructuring assignment
// to get each property from a person as a separate
// variable inside the loop
/*let html = '';
for (let { firstName, lastName, email } of people) {
  html += `
    <div class="person">
      <p><b>First name:</b> ${firstName}</p>
      <p><b>Last name:</b> ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
    </div>
  `;
}*/

// Using map instead of a loop
let html = people.map(({ firstName, lastName, email }) => `
    <div class="person">
      <p><b>First name:</b> ${firstName}</p>
      <p><b>Last name:</b> ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
    </div>
`);


document.body.innerHTML = html;