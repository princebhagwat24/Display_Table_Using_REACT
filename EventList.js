// import React, { useState } from 'react';

// const eventList = [
//     { id: 1, name: 'Tech Conference', date: '2024-07-10', location: 'New York', status: 'Active' },
//     { id: 2, name: 'Music Festival', date: '2024-07-05', location: 'Los Angeles', status: 'Past' },
//     { id: 3, name: 'Art Expo', date: '2024-07-12', location: 'Chicago', status: 'Upcoming' },
//     { id: 4, name: 'Hackathon', date: '2024-07-15', location: 'San Francisco', status: 'Active' },
//     { id: 5, name: 'Film Screening', date: '2024-06-20', location: 'Miami', status: 'Past' },
//     { id: 6, name: 'Fashion Show', date: '2024-08-03', location: 'Los Angeles', status: 'Upcoming' },
//     { id: 7, name: 'Food Festival', date: '2024-06-25', location: 'New York', status: 'Active' },
//     { id: 8, name: 'Business Summit', date: '2024-07-09', location: 'Chicago', status: 'Past' },
//     { id: 9, name: 'Music Concert', date: '2024-07-25', location: 'Austin', status: 'Upcoming' },
//     { id: 10, name: 'Health Expo', date: '2024-08-10', location: 'Los Angeles', status: 'Active' },
// ];

// const EventList = () => {
//     const [searchQuery, setSearchQuery] = useState('');

//     // Function to determine the color based on event status
//     const getStatusColor = (status) => {
//         switch (status) {
//             case 'Active':
//                 return 'green';
//             case 'Past':
//                 return 'blue';
//             case 'Upcoming':
//                 return 'yellow';
//             default:
//                 return 'white';
//         }
//     };

//     const filteredEvents = eventList.filter(event => {
//         return (
//             event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             event.location.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//     });

//     return (
//         <div className="dark-theme">
//             <h1 className="title">Event List</h1>
//             <input
//                 type="text"
//                 placeholder="Search events..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="search-input"
//             />
//             <table className="event-table">
//                 <thead>
//                     <tr>
//                         <th>Event Name</th>
//                         <th>Date</th>
//                         <th>Location</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredEvents.map(event => (
//                         <tr key={event.id}>
//                             <td style={{ color: getStatusColor(event.status) }}>
//                                 {event.name}
//                             </td>
//                             <td>{event.date}</td>
//                             <td>{event.location}</td>
//                             <td>{event.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default EventList;


import React, { useState, useEffect } from 'react';

const eventList = [
    { id: 1, name: 'Tech Conference', date: '2024-07-10', location: 'New York', status: 'Active' },
    { id: 2, name: 'Music Festival', date: '2024-07-05', location: 'Los Angeles', status: 'Past' },
    { id: 3, name: 'Art Expo', date: '2024-07-12', location: 'Chicago', status: 'Upcoming' },
    { id: 4, name: 'Hackathon', date: '2024-07-15', location: 'San Francisco', status: 'Active' },
    { id: 5, name: 'Film Screening', date: '2024-06-20', location: 'Miami', status: 'Past' },
    { id: 6, name: 'Fashion Show', date: '2024-08-03', location: 'Los Angeles', status: 'Upcoming' },
    { id: 7, name: 'Food Festival', date: '2024-06-25', location: 'New York', status: 'Active' },
    { id: 8, name: 'Business Summit', date: '2024-07-09', location: 'Chicago', status: 'Past' },
    { id: 9, name: 'Music Concert', date: '2024-07-25', location: 'Austin', status: 'Upcoming' },
    { id: 10, name: 'Health Expo', date: '2024-08-10', location: 'Los Angeles', status: 'Active' },
];

const EventList = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

    // Function to determine the color based on event status
    const getStatusColor = (status) => {
        switch (status) {
            case 'Active':
                return 'green';
            case 'Past':
                return 'blue';
            case 'Upcoming':
                return 'yellow';
            default:
                return 'white';
        }
    };

    // Debounce the search input
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 500); 

        return () => {
            clearTimeout(timer); 
        };
    }, [searchQuery]);

    const filteredEvents = eventList.filter(event => {
        return (
            event.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
            event.location.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
        );
    });

    return (
        <div className="dark-theme">
            <h1 className="title">Event List</h1>
            <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
            <table className="event-table">
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredEvents.map(event => (
                        <tr key={event.id}>
                            <td style={{ color: getStatusColor(event.status) }}>
                                {event.name}
                            </td>
                            <td>{event.date}</td>
                            <td>{event.location}</td>
                            <td>{event.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventList;
