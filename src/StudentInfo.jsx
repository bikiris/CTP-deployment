
const StudentInfo = ({firstName, lastName, sId, school, major}) => {
  return (
    <div>
      <div>
        {`${firstName} ${lastName}`}
      </div>
      <ul>
        <li>
          <strong>ID:</strong> {sId}
        </li>
        <li>
          <strong>School:</strong> {school}
        </li>
        <li>
          <strong>Major:</strong> {major}
        </li>
      </ul>
    </div>
  )
}

export default StudentInfo