import { useParams } from "react-router-dom";
import StudentList from "./StudentList";
import { useState, useEffect } from "react";

const DeleteStudent = () => {
  const { id } = useParams();

  const [students, setStudents] = useState(null);

  useEffect(() => {
    fetch(" http://localhost:4646/StudentInfo/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify(this.state),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
       // console.log(data);

        const jsonString = JSON.stringify(data); // Convert data to a JSON string
        const trimmedJsonString = jsonString.slice(8, -1); // Remove the first 8 and last 1 characters
        const trimmedData = JSON.parse(trimmedJsonString); // Convert the trimmed JSON string back to an object
        //console.log(trimmedData); // Output the trimmed data
        data = trimmedData;
        setStudents(data);
      });
  }, [id]); //runs UseEffects Only once at the beginining

  return (
    <div className="Delete-Student">
      <p>{students.StudentFirstName} </p>
    </div>
  );
};

export default DeleteStudent;
