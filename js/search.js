const search = function () {
  const searchInput = document.querySelector(".search-block > input");
  const searchBtn = document.querySelector(".search-block > button");

  searchBtn.addEventListener("click", () => {
    console.log(searchInput.value); // Выводим в консоль содержимое поля ввода только после нажатия на кнопку
  });
};

search();
