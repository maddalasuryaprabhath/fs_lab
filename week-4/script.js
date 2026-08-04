document.addEventListener("DOMContentLoaded", () => {
    const background = document.getElementById("bg");
    const form = document.getElementById("form");

    if (background) {
        background.addEventListener("click", () => {
            const nextColor = background.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
            background.style.backgroundColor = nextColor;
        });
    }

    const output = document.getElementById("output");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const submittedData = Object.fromEntries(formData.entries());

            console.log("Form data stored in variable:", submittedData);

            if (output) {
                output.textContent = 
                    `Name: ${submittedData.fullname}\n` +
                    `Email: ${submittedData.email}\n` +
                    `Phone: ${submittedData.phone}\n` +
                    `Address: ${submittedData.address}`;
            }
        });
    }
}); 
