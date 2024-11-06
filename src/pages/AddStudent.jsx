import { useState } from "react";

const AddStudent = () => {
  const [student, setStudent] = useState({});

  const handleAddStudent = async (e) => {
    e.preventDefault();
    const newStudent = 
    await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    console.log(newStudent);
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="First Name" onChange={(e) => setStudent({...student, firstName: e.target.value})} required/>
        <input type="text" placeholder="Last Name" onChange={(e) => setStudent({...student, lastName: e.target.value})} required/>
        <input type="text" placeholder="School" onChange={(e) => setStudent({...student, school: e.target.value})} required/>
        <input type="text" placeholder="Major" onChange={(e) => setStudent({...student, major: e.target.value})} required/>
        <button onClick={(e) => handleAddStudent(e)}>Add Student</button>
      </form>
    </div>
  )

}

export default AddStudent;