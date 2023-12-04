document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
});

function setupEventListeners() {
    document.querySelector('#birthday').addEventListener('keyup', function(e){
        e.preventDefault();
        if (e.key != 'Backspace' && (birthday.value.length === 2 || birthday.value.length === 5)){
            birthday.value += '-';
        }
    });

    document.querySelector('#phone').addEventListener('keyup', function(e){
        e.preventDefault();
        if (e.key != 'Backspace' && (phone.value.length === 3 || phone.value.length === 7)){
            phone.value += '-';
        }
    });
}