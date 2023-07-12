import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && rollNumber) {
            addStudent({ name, rollNumber });
            setName('');
            setRollNumber('');
        }
    };


    return (
        <div>
            <h2>Student Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="rollNumber">Roll Number:</label>
                    <input
                        type="text"
                        id="rollNumber"
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StudentForm;
