document.addEventListener('DOMContentLoaded', () => {
    const reminders = [
        { title: 'Buy groceries', completed: false },
        { title: 'Call mom', completed: false },
        // Add more reminders here
    ];

    const remindersList = document.getElementById('reminders-list');
    reminders.forEach(reminder => {
        if (!reminder.completed) {
            const listItem = document.createElement('li');
            listItem.textContent = reminder.title;
            remindersList.appendChild(listItem);
        }
    });
});