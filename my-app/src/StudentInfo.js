import { useState, useEffect } from "react";
import StudentList from "./StudentList";

const StudentInfo = () => {
  const [students, setstudents] = useState(null);

  useEffect(() => {
    fetch(" http://localhost:4646/StudentInfo", {
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
        //console.log(data);

        const jsonString = JSON.stringify(data); // Convert data to a JSON string
        const trimmedJsonString = jsonString.slice(8, -1); // Remove the first 8 and last 1 characters
        const trimmedData = JSON.parse(trimmedJsonString); // Convert the trimmed JSON string back to an object
        //console.log(trimmedData); // Output the trimmed data
        data = trimmedData;

        setstudents(data);
      });
  }, []); //runs UseEffects Only once at the beginining

  return (
    <div className="home">
      {students && <StudentList students={students} title="Details of all Students" />}
    </div>
  );
};

export default StudentInfo;
