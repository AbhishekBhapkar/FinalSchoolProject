import { Link } from "react-router-dom";

const StudentList = ({ students, title }) => {
  return (
    <div className="student-list">
      <table className="table-striped" aria-labelledby="tableLabel">
        <thead>
          <tr>
            <th>Id </th>
            <th>Student First Name</th>
            <th>Student Middle Name</th>
            <th>Student Last Name</th>
            <th>Classroom</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <Link to={`/RemoveStudent/${student.id}`}>
                <td>{student.id}</td>
              </Link>
              <td>{student.studentFirstName}</td>
              <td>{student.studentMiddleName}</td>
              <td>{student.studentLastName}</td>
              <td>{student.classroom}</td>
              <td>{student.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
