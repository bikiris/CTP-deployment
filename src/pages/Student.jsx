import {useParams} from 'react-router-dom'; 
import {useEffect, useState} from 'react'; 


const Student = () => {
  const {id} = useParams();
  const [student, setStudent] = useState({});
  useEffect(() => {
    const fetchStudent = async () => {
      const studentData = await fetch(`http://localhost:3000/students/${id}`);
      const student = await studentData.json();
      setStudent(student);
    };
    fetchStudent();
  }, [id]);

  return (
    <div>
      <h1>{student.firstName}</h1>
      <h1>{student.lastName}</h1>
      <p>{student.school}</p>
      <p>{student.major}</p>
    </div>
  );
};
export default Student;