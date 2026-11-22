const userInputEl = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const resultEl = document.getElementById("result");

function checkInput()
{
    if (!userInputEl || !resultEl) return;

    const rawValue = userInputEl.value.trim();

    //reject empty or whitespace, only values 
    if (rawValue === " ")
    {
        resultEl.textContent = "Please enter a valid number!";
        return;
    }

    const num = Number(rawValue);

    //reject non-numeric string or non-finite values
    if (Number.isNaN(num) || !Number.isFinite(num))
    {
        resultEl.textContent = "Pleae enter a valid number!";
    }
    else if (num < 10)
    {
        resultEl.textContent = "The number is lower than 10.";
    }
    else if (num > 10)
    {
        resultEl.textContent = "The number is higher than 10.";
    }
    else 
    {
        resultEl.textContent = "The number is equal to 10.";
    }
}

if (checkBtn)
{
    checkBtn.addEventListener("click", checkInput);
}