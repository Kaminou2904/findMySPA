const searchInpu = document.getElementById('searchInpu');
const searchInpuPop = document.getElementById('searchInpuPop');
const srearchPopup = document.getElementById('srearchPopup');


// function to hide and show the popup after typig in the input box

searchInpu.addEventListener('click', ()=>{
    srearchPopup.style.display = 'block';
    searchInpuPop.focus();
})