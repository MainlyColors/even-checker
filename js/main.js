//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

function createResultElement(result) {
  const h2 = document.createElement('h2');
  h2.textContent = String(result).toUpperCase();
  h2.classList.add('result');
  h2.classList.add(String(result));

  return h2;
}

const outputEl = document.querySelector('#output');
function getFetch() {
  const choice = document.querySelector('input').value;

  if (choice.match(/[^0-9-]+/g)?.length <= 0) {
    document.querySelector('input').value = '';
    alert(`can you not read? Numbers only 😂

"${choice}" - does this look like a number to you???`);
    return;
  }

  const url = `https://api.isevenapi.xyz/api/iseven/${Math.abs(choice)}/`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      outputEl.innerHTML = '';

      outputEl.appendChild(createResultElement(data.iseven));
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
