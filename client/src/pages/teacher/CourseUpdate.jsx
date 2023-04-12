import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Add from './image/add.png'
import ReturnHome from './image/ReturnHome.png'
import axios from "axios";
import { useState } from 'react';
import { AuthContext } from '../../context/authContext';

{/* The backend function in this file have not well modify yell*/}
const GradeUpload = () => {
    const grades = ["select", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "F"];
    const [uid, setUid] = useState('');
    const [cid, setCid] = useState('');
    const [grade, setGrade] = useState('');
    const [response, setResponse] = useState(null);
    const [err, setError] = useState(null);

    const handleGradeUpload = async () => {
        try {
          const response = await axios.put("/enrollments/GradeUpload", {uid: uid, cid: cid, grade: grade});
          setResponse(response.data);
          setError(null);
        } catch (err) {
          setError(err.response.data);
          setResponse(null);
        }
    }

    return (
        <div className='GradeUpload'>
            <div className='navBar' style={{ width: '200px', backgroundColor: '#DFE2F3', height: '100vh', position: 'fixed', left: 0 }}>
              <h1 className='menu' style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                      <div>
                      <img src={Add} alt="add" style={{ marginRight: '10px' }} />
                      </div>
                      <Link>Course Update</Link>
                  </li>

                  <li style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                      <div>
                      <img src={ReturnHome} alt="Return" style={{ marginRight: '10px' }} />
                      </div>
                      <Link to="/teacher/home">Return</Link>
                  </li>
              </ul>
            </div>

            <div style={{ marginLeft: '220px' }}>
                <h1>Course Update</h1>
                <p>Input Course ID: </p>
                <input placeholder="Course ID" type="text" onChange={(event) => setUid(event.target.value)}/>
                {/*
                <p style={{ marginTop: '20px' }}>Input Course Outline: </p>
                <input placeholder="Course Outline" type="textarea" onChange={(event) => setCid(event.target.value)} 
                style={{ width: "400px", height: "100px" }}/> 
                */}
                <p style={{ marginTop: '20px' }}>Input Course Desciption: </p>
                <div>
                    <textarea 
                        placeholder="Enter course outline here" 
                        style={{ width: "400px", height: "100px" }}
                    />
                </div>
                <button onClick={handleGradeUpload} style={{marginLeft: '8px', marginBottom: '20px'}}>Upload</button>
                {response && <p className="response">{response}</p>}
                {err && <p className="err">{err}</p>}
            </div>
        </div>
    );
};

export default GradeUpload;