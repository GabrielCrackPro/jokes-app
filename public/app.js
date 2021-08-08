const jokeContainer = document.querySelector(".joke-container");
const API_URL = "https://v2.jokeapi.dev/joke/Any";

const getData = async (url) => {
  let data = await fetch(url).then((response) => response.json());
  return data;
};
const showJoke = async () => {
  let joke = await getData(API_URL);
  jokeContainer.innerHTML = `
  <div class="joke container mt-3 d-flex flex-column justify-content-center align-items-center">
  <h1 class="fw-italic">#${joke.id}</h1>
  <h2>Category: ${joke.category}</h2>
  <h3 class="joke-flags text-capitalize"></h3>
  <h2 class="fw-bold text-center"> ${joke.setup}</h2>
  <h3>${joke.delivery}</h3>
  <button class="btn btn-outline-secondary btn-sm" onclick="location.reload()"><i class="fas fa-sync"></i> Show Another Joke</button>
  </div>
  `;
  const jokeFlagsContainer = document.querySelector(".joke-flags");
  let jokeFlags = Object.entries(joke.flags);
  for (let i = 0; i < jokeFlags.length; i++) {
    if (jokeFlags[i][1] === true) {
      jokeFlagsContainer.innerHTML += `
      <h3 class="mb-2">${jokeFlags[i][0]}</h3>
      `;
    }
  }
};
window.onload = showJoke();
