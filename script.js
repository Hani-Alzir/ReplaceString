document.addEventListener("DOMContentLoaded", function () {
    const inputString = document.getElementById("inputString");
    const replaceButton = document.getElementById("replaceButton");
    const result = document.getElementById("result");

    replaceButton.addEventListener("click", function () {
        const originalText = inputString.value;
        const modifiedText = replaceCharacters(originalText);
        result.textContent = "Modified string: " + modifiedText;
    });

    function replaceCharacters(input) {
        return input.replace(/e/g, 'x').replace(/i/g, 'e').replace(/x/g, 'i');
    }
});
