document.getElementById("check-btn").addEventListener("click", function () {
    const inputElement = document.getElementById("text-input");
    const resultElement = document.getElementById("result");
    let text = inputElement.value.trim();

    if (!text) {
        alert("Please input a value");
        return;
    }

    const cleanedText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedText = cleanedText.split("").reverse().join("");

    if (cleanedText === reversedText) {
        resultElement.textContent = `${text} is a palindrome.`;
    } else {
        resultElement.textContent = `${text} is not a palindrome.`;
    }
    inputElement.value = "";
});
