window.addEventListener('load', function() {
    var button = document.querySelector('.actions button');
    var input = document.querySelectorAll('input');
    var textarea = document.querySelector('textarea');

    button.addEventListener('click', function () {
        if (input[0].innerText === '') {
            input[0].style.border = '1px solid red';
        }
    });

    button.addEventListener('click', function () {
        if (input[1].innerText === '') {
            input[1].style.border = '1px solid red';
        }
    });

    button.addEventListener('click', function () {
        if (input[2].innerText === '') {
            input[2].style.border = '1px solid red';
        }
    });

    button.addEventListener('click', function () {
        if (textarea.innerText === '') {
            textarea.style.border = '1px solid red';
        }
    });
});
