const btn = document.getElementById("btn");
const container = document.getElementById("container");
let notificationDisplayed = false;

btn.addEventListener("click", () => {
  if (!notificationDisplayed) {
    createNotification();
    notificationDisplayed = true
  }
});

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = "This challenge is awesome!";
  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
    notificationDisplayed = false; // Reset the flag after the timeout
  }, 3000);
}
