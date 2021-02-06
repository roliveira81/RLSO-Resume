function sendMail(contactForm) {
    emailjs.send("service_a4q9k6q","test",{
        from_name: contactForm.name.value,
        to_name: contactForm.email.value,
        message: contactForm.message.value,
        reply_to: "roberto.oliveira.ti@gmail.com",
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    contactForm.name.value = "";
    contactForm.email.value = "";
    contactForm.message.value = "";    
    return false;  // To block from loading a new page
}