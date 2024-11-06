import StudentInfo from "./StudentInfo.jsx";
import "./App.css";

import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudentData = async () => {
    const studentData = await fetch("http://localhost:3000/students");
    const studentList = await studentData.json();
    setStudents(studentList);
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  const handleRemoveStudent = async (id) => {
    await fetch(`http://localhost:3000/students/999`, {
      method: "DELETE",
    });
    fetchStudentData();
    // setStudents(students.slice(0, -1));
  };

  return (
    <>
      <h1>Welcome to CTP</h1>
      <p>Let's get started!</p>
      {students.map((student) => {
        return (
          <Link to={`/student/${student.sId}`} key={student.sId}>
            <StudentInfo key={student.sId} {...student} />
          </Link>
        )
      })}
      <button><Link to={`student/add`} >add new student</Link></button>
      <button onClick={handleRemoveStudent}>Remove last student</button>
    </>
  );
}

export default App;
