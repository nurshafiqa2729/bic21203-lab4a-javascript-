const messageEl = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

function changeMessage()
{
    if (messageEl) 
    {
        messageEl.textContent = "Hello there!";
    }
}

if (changeBtn)
{
    changeBtn.addEventListener("click", changeMessage);
}