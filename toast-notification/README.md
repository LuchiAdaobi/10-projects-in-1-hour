# Project Name

Notification Popup

## Description

This project demonstrates a notification popup functionality using JavaScript. When the button is clicked, the notification appears in a toast-like container. The notification is displayed only once, and it will not reappear until the page is refreshed.

## Usage

To use this project, follow these steps:

1. Include the necessary HTML structure in your webpage with the following elements:
   - A button element with the id "btn" that represents the trigger button.
   - A container element with the id "container" that will hold the notification popup.

2. Add the necessary CSS styles to your CSS file to define the appearance of the notification popup.

3. Add the provided JavaScript code to your JavaScript file or script tag.

4. Open your webpage in a web browser.

5. Click the button to display the notification popup. The notification will only appear once until the page is refreshed.

Example Code

```javascript
const btn = document.getElementById("btn");
const container = document.getElementById("container");
let notificationDisplayed = false;

btn.addEventListener("click", () => {
  if (!notificationDisplayed) {
    createNotification();
    notificationDisplayed = true;
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
```




