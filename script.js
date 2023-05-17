const accordionContent = document.querySelectorAll(".faq-div-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
      item
        .querySelector("i")
        .classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      description.style.height = "0px";
      item
        .querySelector("i")
        .classList.replace("fa-chevron-up", "fa-chevron-down");
    }
    removeOpen(index); //calling the funtion and also passing the index number of the clicked header
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}
