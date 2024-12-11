(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "mwzYyC1caxA9ihagP",
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_evnvtit', 'template_eiss8es', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}