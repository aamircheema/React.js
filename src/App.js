import './App.css';
import React, { useState } from 'react';

function App() {
  const STUDENT_STORAGE_KEY = 'students';
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [rollnumber, setRollnumber] = useState('');
  const [searchRollnum, setSearchRollnum] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const savedata = () => {
    localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(students))
  }

  const submitForm = (e) => {
    e.preventDefault();

    const updatedStudent = [...students, { name, rollnumber }]
    setStudents(updatedStudent);
    savedata();
    setName('');
    setRollnumber('');
  }

  const search = (e) => {
    e.preventDefault();
    const foundStudent = students.find((student) => student.rollnumber === searchRollnum)
    if (foundStudent) {
      setSearchResults([foundStudent])
      setSearchRollnum('');

    } else {
      alert(`The roll number ${searchRollnum} does not exist`)
    }
  }

  const checkInput = () => {
    if (name === '' || rollnumber === '') {
      return true
    } else {
      return false
    }
  }


  return (
    <>
      <div>
        <h1>Student Form</h1>
      </div>
      <form onSubmit={submitForm}>
        <label htmlFor="">Name:</label>
        <input type="text"
          placeholder='Enter name here...'
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <label htmlFor="">Roll Number:</label>
        <input type="number"
          placeholder='Enter Roll Number here...'
          value={rollnumber}
          onChange={(e) => setRollnumber(e.target.value)}
        />
        <br />
        <input type="submit" value='Submit' disabled={checkInput()} />
      </form>
      <h1>Studenst's Information</h1>
      <form onSubmit={search}>
        <label htmlFor="">
          Roll number to search:
        </label>
        <input type="number"
          placeholder='Enter roll number'
          value={searchRollnum}
          onChange={(e) => setSearchRollnum(e.target.value)}
        />
        <input type="submit" value='Search' />
      </form>
      <table>
        <thead>
          <tr>
            <th>student name</th>
            <th>Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollnumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollnumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
