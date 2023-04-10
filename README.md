# Weight Converter

This project is a simple weight converter calculator that allows you to convert pounds to kilograms. It's a basic web page with an input field where you can type in your weight in pounds. As soon as you enter a value in the input field, the calculator will automatically convert the weight to kilograms and show you the result.

The result is displayed below the input field in a span element with the class **`.final-answer`**. If you make an error and enter an invalid input, an error message will be displayed in a p element with the class **`.error-line`**.

The calculator uses a **`weightConvert()`** function written in JavaScript to perform the conversion. The function checks if the input value is valid and then converts it to kilograms if it is. It also includes a timeout function to clear the error message and the result after a certain amount of time has passed.

Overall, this project is a simple and useful tool for anyone looking to quickly convert their weight from pounds to kilograms!

## Demo

You can try out the application by visiting [this link](https://paribhandarkar.github.io/weight-converter/).

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get started with this project, clone the repository and open the `index.html` file in your preferred web browser.

## New Things I Learned

I learned about using **`setTimeout()`** and **`clearTimeout()`** functions in JavaScript for implementing timed events. These functions are useful for displaying messages, animations, or updating data after a specified period.

Additionally, I also learned about the **`oninput`** attribute in HTML, which allows me to execute a JavaScript function whenever the input value of an HTML element is changed. In the code snippet provided, **`oninput`** is used to call the **`weightConvert()`** function whenever I type a new value in the input field. This ensures that the weight conversion is performed in real-time as I type, and the result is immediately displayed on the screen. These are handy features to know for building interactive and responsive web applications.

## Challenges I faced

One of the challenges that I faced while working on the weight converter project was figuring out how to handle negative numbers. When I inputted negative numbers or just a negative sign, the result would display as 0.00, which wasn't what I wanted. I tried a few things to fix this issue, but nothing seemed to work.

After doing some research, I discovered that I could use the **`isNaN()`** function to check if the input was not a number. I then added an additional condition to the validation check in the **`weightConvert()`** function to ensure that the input was not only greater than 0 but also not **`NaN`**.

Another issue I faced was that the error message would continue to display even after entering a valid input. I realized that I needed to add the **`clearTimeout()`** function within the **`else`** block of the **`weightConvert()`** function to clear the timeout set by the error message when a valid input was entered. This allowed me to display the result without the error message continuing to show.

Overall, it was a learning experience, and I was able to overcome these challenges by doing research and experimenting with different solutions.
