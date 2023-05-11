import { useState } from "react";

const UpdateStudent = (props) => {


  const [student, setStudent] = useState({
    id: props.students.data.id,
    StudentFirstName: props.students.data.studentFirstName,
    StudentMiddleName: props.students.data.studentMiddleName,
    StudentLastName: props.students.data.studentLastName,
    classroom: props.students.data.classroom,
    section: props.students.data.section,
  });

  const handleSubmit = (e) => {
    //e.preventDefault();

/*     const UpdStudent = {
         Id, 
      StudentFirstName,
      StudentMiddleName,
      StudentLastName,
      classroom,
      section,
    }; */

    /*  StudentFirstName = props.Students.data.StudentFirstName;
    StudentMiddleName = props.Students.data.StudentMiddleName;
    StudentLastName = props.Students.data.StudentLastName;
    classroom = props.Students.data.classroom;
    section = props.Students.data.section;
 */
    fetch("http://localhost:4646/StudentInfo", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(UpdateStudent),
    }).then(() => {
      <popUp trigger={true}>Record has been Added</popUp>;
    });
  };

  return (
    <div className="create">
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        {/*     <label>Id</label>
        <input type="number" required value={Id}></input> */}
        <label>First Name</label>
        <input
          type="text"
          required
          value={student.StudentFirstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label>Middle Name</label>
        <input
          type="text"
          required
          value={student.StudentMiddleName}
          onChange={(e) => setMidName(e.target.value)}
        ></input>
        <label>Last Name </label>
        <input
          type="text"
          required
          value={student.StudentLastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <label>Class Room </label>
        <input
          type="number"
          required
          value={student.classroom}
          onChange={(e) => setClassroom(e.target.value)}
        ></input>
        <label>Section</label>
        <input
          type="text"
          required
          value={student.section}
          onChange={(e) => setSection(e.target.value)}
        ></input>
        <button>Update Student</button>
      </form>
    </div>
  );
};

export default UpdateStudent;
