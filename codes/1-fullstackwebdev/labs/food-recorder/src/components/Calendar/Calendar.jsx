import React, { useState } from 'react';

function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div>
            <input
                type="date"
                value={selectedDate.toISOString().split('T')[0]}
                onChange={handleDateChange}
            />
        </div>
    );
}

export default Calendar;
