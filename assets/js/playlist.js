btnSearch.addEventListener("click", (e) => {
    e.preventDefault();
    let inputValue = inputSearch.value;
    //getData(inputValue);
    let secondPage = "artist.html";
    let newUrl = `${secondPage}?_searched-query=${inputValue}`;
    window.location.href = newUrl;
  });