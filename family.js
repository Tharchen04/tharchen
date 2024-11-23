// Function to toggle the dropdown menu visibility
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show'); // Toggles 'show' class to show or hide dropdown
}

// Function to toggle visibility of extra details on family members
function showMore(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden'); // Toggle hidden class to show/hide extra details
}
