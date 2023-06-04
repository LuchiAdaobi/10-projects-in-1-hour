const open = document.getElementById("open");
const closeBtn = document.getElementById("close");
const popup = document.querySelector(".popup-container");

open.addEventListener("click", () => {
  popup.classList.add("active");
});
closeBtn.addEventListener('click', ()=> {
    popup.classList.remove('active')
})
document.addEventListener("click", (e) => {
  if (!e.target.closest(".popup") && !e.target.matches("#open")) {
    popup.classList.remove("active");
  }
});
