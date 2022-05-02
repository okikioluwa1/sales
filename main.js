var ToggleButton = document.querySelector('.toggle_button')
var Backdrop = document.querySelector('.backdrop')
var ToggleDropdown = document.querySelector('.Toggle__dropdown')

ToggleButton.addEventListener('click', function () {
    ToggleDropdown.classList.add('open')
    Backdrop.classList.add('open')
})

Backdrop.addEventListener('click', function () {
    ToggleDropdown.classList.remove('open')
    Backdrop.classList.remove('open')
})