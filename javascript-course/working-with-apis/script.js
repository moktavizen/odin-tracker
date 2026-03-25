async function fetchRandomGifUrl(apiKey, searchParam) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchParam}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP status: ${response.status}`);
    }

    const gifData = await response.json();
    if (gifData.data.length === 0) {
      throw new Error(`Empty data: ${JSON.stringify(gifData)}`);
    }

    return gifData.data.images.original.url;
  } catch (error) {
    console.error(error);
    return "";
  }
}

async function renderNewGIF(apiKey, searchParam, imgEl, buttonEl) {
  imgEl.src = "";
  imgEl.alt = `Random ${searchParam} GIF from Giphy`;
  buttonEl.setAttribute("disabled", "");

  imgEl.src = await fetchRandomGifUrl(apiKey, searchParam);

  buttonEl.removeAttribute("disabled");
}

const API_KEY = "PUT_YOUR_API_KEY_HERE";

const input = document.querySelector("input");
const img = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  renderNewGIF(API_KEY, input.value, img, button);
});

input.value = "cats";
renderNewGIF(API_KEY, input.value, img, button);
