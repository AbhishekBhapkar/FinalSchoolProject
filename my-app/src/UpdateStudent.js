import { useState } from "react";

const UpdateStudent = (props) => {
  const [student, setStudent] = useState({
    id: props.students.data.id,
    studentFirstName: props.students.data.studentFirstName,
    studentMiddleName: props.students.data.studentMiddleName,
    studentLastName: props.students.data.studentLastName,
    classroom: props.students.data.classroom,
    section: props.students.data.section,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:4646/StudentInfo", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      <popUp trigger={true}>Record has been Added</popUp>;
    });
  };

  return (
    <div className="create">
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          required
          value={student.studentFirstName}
          onChange={(e) =>
            setStudent({
              ...student,
              studentFirstName: e.target.value,
            })
          }
        ></input>
        <label>Middle Name</label>
        <input
          type="text"
          required
          value={student.studentMiddleName}
          onChange={(e) =>
            setStudent({
              ...student,
              studentMiddleName: e.target.value,
            })
          }
        ></input>
        <label>Last Name </label>
        <input
          type="text"
          required
          value={student.studentLastName}
          onChange={(e) =>
            setStudent({
              ...student,
              studentLastName: e.target.value,
            })
          }
        ></input>
        <label>Class Room </label>
        <input
          type="number"
          required
          value={student.classroom}
          onChange={(e) =>
            setStudent({
              ...student,
              classroom: e.target.value,
            })
          }
        ></input>
        <label>Section</label>
        <input
          type="text"
          required
          value={student.section}
          onChange={(e) =>
            setStudent({
              ...student,
              section: e.target.value,
            })
          }
        ></input>
        <button>Update Student</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
