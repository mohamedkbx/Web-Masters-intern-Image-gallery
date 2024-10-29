// elements
const items = document.querySelectorAll(".slider .list .item");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const thumpnails = document.querySelectorAll(".thumpnail .item");

// get param
let countItem = items.length;
let itemActive = 0;

//handle next btn
next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};

prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};

function showSlider() {
  // remove current itemActive
  let oldItemActive = document.querySelector(".slider .list .item.active");
  let oldThumpnailActive = document.querySelector(".thumpnail .item.active");
  oldItemActive.classList.remove("active");
  oldThumpnailActive.classList.remove("active");

  // active new item
  items[itemActive].classList.add("active");
  thumpnails[itemActive].classList.add("active");
}

//click thumbnail
thumpnails.forEach((item, index) => {
  item.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});
