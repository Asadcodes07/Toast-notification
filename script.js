
const toastBox = document.getElementById('toastBox');

const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted!';

const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';

const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again!';


function showToast(msg, type) {

    const toast = document.createElement('div');

    toast.classList.add('toast', type);

    toast.innerHTML = msg;

    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 5000);

}
