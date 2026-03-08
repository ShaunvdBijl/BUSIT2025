
document.addEventListener("DOMContentLoaded", function() {
    // Get all tab links
    const tabLinks = document.querySelectorAll('.tab-link');
    // Get all tab content
    const tabs = document.querySelectorAll('.tab');

    // Function to show the selected tab
    function showTab(tabId) {
        // Hide all tabs
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        // Remove active class from all tab links
        tabLinks.forEach(link => {
            link.classList.remove('active');
        });
        // Show the selected tab
        document.getElementById(tabId).classList.add('active');
        // Set the clicked tab link as active
        document.querySelector(`.tab-link[data-tab="${tabId}"]`).classList.add('active');
    }

    // Add click event listeners to each tab link
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    // Show the first tab by default
    showTab(tabLinks[0].getAttribute('data-tab'));
});

