
# Text Scrolling App

This is a simple JavaScript application that demonstrates text scrolling animation on a web page.

## Features

- Displays a text that scrolls horizontally, giving the effect of typewriter animation.
- Provides a "Play" and "Pause" button to control the animation.

## Usage

To use this application, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/text-scrolling-app.git`
2. Open the `index.html` file in your web browser.
3. The text scrolling animation will start automatically.
4. Click the "Play" button to pause the animation and "Pause" button to resume it.
5. Enjoy the text scrolling animation!

## Customization

You can customize the text that is being scrolled by modifying the `text` variable in the JavaScript code. Update it with your desired text message.

```javascript
const text = "Coding days are the best days!";
```

You can also adjust the scrolling speed by changing the interval duration in the setInterval function. Currently, it's set to 200 milliseconds (0.2 seconds):

```javascript

setInterval(writeText, 200);```