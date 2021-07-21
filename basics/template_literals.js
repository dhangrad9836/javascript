const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

//template strings/literals
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>City: ${city}</li>
<li>${2 + 2}</li>
</ul>
`;  

document.body.innerHTML = html;