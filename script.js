document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const complaint = document.getElementById("complaint").value;

            // Validate inputs (optional)
            if (!name || !email || !complaint) {
                alert("Please fill in all fields.");
                return;
            }

            // Prepare form data
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("complaint", complaint);

            try {
                // Send form data to Formspree
                const response = await fetch("https://formspree.io/f/xyzkrrva", {
                    method: "POST",
                    body: formData,
                    headers: { "Accept": "application/json" },
                });

                if (response.ok) {
                    alert("Your complaint has been submitted successfully! Check your email for confirmation.");
                    form.reset();
                } else {
                    alert("Failed to submit your complaint. Please try again later.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("An error occurred. Please try again.");
            }
        });
    }
});
