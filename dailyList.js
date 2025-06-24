document.getElementById('Continue').addEventListener('click', function () {
    const name = document.getElementById('InputName').value.trim();
    if (name == "") {
        alert("Please enter your name!");
        return;
    }
    window.location.href = "dailyList-2.html";
});