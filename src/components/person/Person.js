import React, { useEffect, useState } from 'react';
import User from '../user/User';

const Person = () => {
    const [person, setPerson] = useState([])

    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setPerson(data))
    }, [])
    
    return (
        <div>
         {person.map(single => <User key={single._id} user={single} />)}
        </div>
    );
};

export default Person;
