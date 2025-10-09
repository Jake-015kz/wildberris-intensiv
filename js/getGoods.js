const getGoods = async () => {
  const links = document.querySelectorAll(".navigation-link");
  const getData = () => {
    fetch("/db/db.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  links.forEach((link) => {
    link.addEventListener("click", () => {
      getData();
    });
  });

  localStorage.setItem("data", JSON.stringify([1, 2, 3, 4, 5]));
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
};
getGoods();

// const getGoods = async () => {
//   const links = document.querySelectorAll(".navigation-link");
//   const response = await fetch("db/db.json");
//   const data = await response.json();

//   links.forEach((link) => {
//     link.addEventListener("click", () => {
//       const field = link.dataset.field;
//       const filteredData = data.filter(
//         (item) => item[field] === link.textContent
//       );
//       console.log(filteredData);
//     });
//   });
// };
// getGoods();
