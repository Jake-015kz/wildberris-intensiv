const getGoods = () => {
  const links = document.querySelectorAll(".navigation-link");
  const getData = async () => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (!data) {
      const response = await fetch("/db/db.json");
      data = await response.json();
      localStorage.setItem("data", JSON.stringify(data));
    }
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(data);
      });
    });
  };
  getData();
};

getGoods();
