const toDark = 'change to darkmode';
const toLight = 'change to lightmode';
const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if(btn.textContent === toDark)
    {
        btn.textContent = toLight;
    }
    else
    {
        btn.textContent = toDark;
    }
});