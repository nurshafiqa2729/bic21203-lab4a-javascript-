const generateBtn = document.getElementById("generateBtn");
const numberListEl = document.getElementById("numberList");

function generateNumbers()
{
    if (!numberListEl) return;

    //clear existing number to avoid dublicate
    numberListEl.textContent = "";

    for (let i = 1; i <= 5; i++)
    {
        const li = document.createElement("li");
        li.textContent = `The number is ${i}`;
        numberListEl.appendChild(li);
    }
}

if (generateBtn)
{
    generateBtn.addEventListener("click", generateNumbers);
}