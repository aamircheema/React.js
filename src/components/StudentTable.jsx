import React, { useState } from 'react';

const StudentTable = ({ students }) => {
    const [searchRollNum, setSearchRollNum] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const search = (e) => {
        e.preventDefault();
        const foundStudent = students.find((student) => student.rollNumber === searchRollNum)
        setSearchResult(foundStudent ? [foundStudent] : alert(`Roll nummber ${searchRollNum} is not exist`))
        // setSearchRollNum('');
    }
    return (
        <div>

            <h1>Search student</h1>
            <form onSubmit={search}>
                <label htmlFor="search-input">Roll Number</label>
                <input
                    type="number"
                    value={searchRollNum}
                    onChange={(e) => setSearchRollNum(e.target.value)}
                />
                <input type="submit" value='search' />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResult.map((student) => (
                        <tr key={student.rollNumber}>
                            <td>
                                {student.name}
                            </td>
                            <td>
                                {student.rollNumber}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Student Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.rollNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
