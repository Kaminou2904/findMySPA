document.querySelector(".popupContainer").style.display = "none";
document.querySelector("#popup").style.bottom = "-60vh";
const searchInpu = document.getElementById('searchInpu');
const searchInpuPop = document.getElementById('searchInpuPop');
const srearchPopup = document.getElementById('srearchPopup');

function openPopup(divNumber) {
    const childDiv = document.querySelectorAll(".categoryCard .popupContent")[divNumber - 1];
    const popup = document.querySelector('#popup');
    const popupContent = document.getElementById("openContent");    
    popupContent.innerHTML = childDiv.innerHTML;

    const popupContainer = document.querySelector(".popupContainer");
    popupContainer.style.display = "flex";
    setTimeout(() => {
        popup.style.bottom = '0px';
    }, 0);
}

function closePopup() {
    const popupContainer = document.querySelector(".popupContainer");
    const popup = document.querySelector('#popup');
    popup.style.bottom = '-60vh';
    setTimeout(() => {
        popupContainer.style.display = "none";
    }, 300);
}

// function to hide and show the popup after typig in the input box

searchInpu.addEventListener('click', ()=>{
    srearchPopup.style.display = 'block';
    searchInpuPop.focus();
})
