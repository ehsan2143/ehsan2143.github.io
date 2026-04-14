function updateTime() {
    const timeElement = document.getElementById("time");
    if (!timeElement) return;

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTime();
setInterval(updateTime, 1000);

function validatefoc() {
    if (
        document.getElementById("name").value == "" ||
        document.getElementById("email").value == "" ||
        document.getElementById("message").value == ""
    ) {
        alert("Please fill all fields");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}