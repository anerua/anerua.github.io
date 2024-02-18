// Initialize EmailJS
emailjs.init({
    publicKey: "ePhQbg4VZNaAUTtXk",
});

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const successAlert = document.getElementById('alert-success');
        successAlert.classList.add('d-none');
        const failedAlert = document.getElementById('alert-failed');
        failedAlert.classList.add('d-none');

        const submitBtn = document.getElementById('submit-btn');
        const prevText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span class="sr-only">Submitting...</span>';

        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                successAlert.classList.remove('d-none');
                submitBtn.innerHTML = prevText;
            }, (error) => {
                failedAlert.classList.remove('d-none');
                submitBtn.innerHTML = prevText;
            });
    });
}
