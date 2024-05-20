const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.querySelector(".word_info");
const sound = document.querySelector(".sound");
const btn = document.querySelector(".search_button");

btn.addEventListener("click", () => {
  let inword = document.querySelector(".text_input").value;
  fetch(`${api}${inword}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML += `
      <div class="word_and_sound">
      <div class="word">${inword}</div>
      <button class="sound"><i class="fa-solid fa-volume-high"></i></button>
  </div>
  <div class="type_and_pronounce">
      <span class="type_of_word">${data[0].meanings[0].partOfSpeech}</span> <span
          class="pronounce_of_word">/${data[0].phonetic}/</span>
  </div>
  <div class="meaning">${data[0].meanings[0].definitions[0].definition}</div>
  <div class="example"><span>The sun shone through the window</span></div>
</div>
      `;
    });
});
