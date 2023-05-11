import { useParams } from "react-router-dom";
/* import StudentList from "./StudentList";
import { useState, useEffect } from "react"; */
import useFetch from "./useFetch";

  
const DeleteStudent = () => {
  const { id } = useParams();
  let { data: Student, error, isPending } = useFetch('http://localhost:4646/StudentInfo/' + id );
  
  const jsonString = Student;
  const modifiedString = `[${jsonString.substring(8, jsonString.length - 1)}]`;
  Student = modifiedString;

  
  return (
    <div className="Delete-Student">
      {isPending && <div>Loading...</div>}
      {error && <div> { error }</div>}
      {Student && (
        <article>
          <p>I am here </p>
        </article>
      )}
    </div>
  );
};

export default DeleteStudent;
