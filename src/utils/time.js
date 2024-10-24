export function formatDateTime(timestamp) {
    const optionsDate = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'long', // Include the day of the week
        timeZone: 'Asia/Kolkata',
    };

    const optionsTime = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Kolkata',
    };

    const date = new Date(timestamp * 1000);

    const formattedDate = date.toLocaleDateString('en-IN', optionsDate);
    const formattedTime = date.toLocaleTimeString('en-IN', optionsTime);
    const formattedDateTime = date.toLocaleString('en-IN', { ...optionsDate, ...optionsTime });

    return {
        date: formattedDate,
        time: formattedTime,
        dateTime: formattedDateTime,
    };
}

