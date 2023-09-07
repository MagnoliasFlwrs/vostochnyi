const eyeType = document.querySelector('.eye-type');

function activateEyeType() {
    eyeType.addEventListener('click' ,  ()=> {
        eyeType.classList.toggle('active')
    })
}
activateEyeType();