document.getElementById('bookButton').addEventListener('click', function() {
    window.location.href = 'message.html'; // Redirect to the message page
});

// Function to generate time slots dynamically
function generateTimeSlots() {
    const timeSlotsContainer = document.getElementById('timeSlots');
    const slots = [
        '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
        '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'
    ];
    timeSlotsContainer.innerHTML = ''; // Clear existing slots

    slots.forEach(slot => {
        const div = document.createElement('div');
        div.className = 'timeSlot available'; // Set default status as available
        div.textContent = slot;
        timeSlotsContainer.appendChild(div);
    });
}

window.onload = generateTimeSlots;
