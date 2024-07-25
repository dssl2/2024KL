document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('planner-form');
    const tripList = document.getElementById('trip-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const destination = document.getElementById('destination').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;

        if (destination && startDate && endDate) {
            const tripItem = document.createElement('li');
            tripItem.innerHTML = `
                <h3>${destination}</h3>
                <p>From: ${startDate}</p>
                <p>To: ${endDate}</p>
            `;

            tripList.appendChild(tripItem);

            // Clear form fields
            form.reset();
        }
    });
});