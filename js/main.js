window.addEventListener('load', function() {
    var sendButton = document.querySelector('.module--contact-us .actions button');

    sendButton.addEventListener('click', function () {
        var controls = document.querySelectorAll('input, textarea');

        var i = 0;
        while (i < controls.length) {
            if (controls[i].value === '') {
                controls[i].parentNode.classList.add('error');
            } else {
                controls[i].parentNode.classList.remove('error');
            }
            i = i + 1;
        }
    });
});