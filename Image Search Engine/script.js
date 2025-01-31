const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");
const showMoreBtn = document.querySelector("#show-more-btn");

const accessKey = "te0rr_oBGAZuoz0kXGYrV69HwltYQ_U_DnmnPXNTVJc";

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imgLink = document.createElement("a");
    imgLink.href = result.links.html;
    imgLink.target = "_blank";

    imgLink.appendChild(image);
    searchResult.appendChild(imgLink);

    showMoreBtn.style.display = "block";
  });
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchResult.innerHTML = "";
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
