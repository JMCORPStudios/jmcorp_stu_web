let formSubmitted = false;

function submitForm() {
    if (!formSubmitted) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const description = document.getElementById('description').value;

        const mailtoLink = `mailto:jmcorpstudios@gmail.com?subject=New Feedback Form Submission&body=Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0ADescription: ${description}`;

        // Open the default email client with pre-filled data
        window.location.href = mailtoLink;

        // Set a cooldown of, for example, 5 seconds
        formSubmitted = true;
        setTimeout(() => {
            formSubmitted = false;
        }, 5000);
    } else {
        console.log("Cooldown in progress. Please wait.");
    }
}