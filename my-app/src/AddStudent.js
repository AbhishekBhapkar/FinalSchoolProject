import { useState } from "react";

const AddStudent = () => {
  const [StudentFirstName, setFirstName] = useState("");
  const [StudentMiddleName, setMidName] = useState("");
  const [StudentLastName, setLastName] = useState("");
  const [classroom, setClassroom] = useState("");
  const [section, setSection] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const Student = {
      StudentFirstName,
      StudentMiddleName,
      StudentLastName,
      classroom,
      section,
    };

    fetch("http://localhost:4646/StudentInfo", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(Student),
    }).then(() => {
       <popUp trigger={true}>Record has been Added</popUp>;
    });
  };

  return (
    <div className="create">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          required
          value={StudentFirstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label>Middle Name</label>
        <input
          type="text"
          required
          value={StudentMiddleName}
          onChange={(e) => setMidName(e.target.value)}
        ></input>
        <label>Last Name </label>
        <input
          type="text"
          required
          value={StudentLastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <label>Class Room </label>
        <input
          type="number"
          required
          value={classroom}
          onChange={(e) => setClassroom(e.target.value)}
        ></input>
        <label>Section</label>
        <input
          type="text"
          required
          value={section}
          onChange={(e) => setSection(e.target.value)}
        ></input>
        <button>Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
