import { useState } from "react";
import { approved, Student } from "./model";

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState<string>("");
  const [grade, setGrade] = useState<number>(0);

  function create() {
    const newStudent: Student = {
      id: Date.now(),
      name,
      grade,
      isApproved: grade > 6 ? true : false,
    };

    setStudents((prev) => [...prev, newStudent]);
    setName("");
    setGrade(0);
  }

  function tableRowClick(id: number) {
    alert("You clicked me: " + id);
  }

  return (
    <div className="container">
      <h1>Studends Grades</h1>
      <form>
        <fieldset className="grid">
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </label>
          <label>
            Grade
            <input
              type="number"
              name="grade"
              placeholder="Grade"
              aria-label="Grade"
              value={grade}
              onChange={(e) => setGrade(Number(e.target.value))}
              required
            ></input>
          </label>
        </fieldset>
        <button type="button" onClick={create}>
          Create
        </button>
      </form>
      <table className="striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Grade</th>
            <th scope="col">Approved</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} onClick={() => tableRowClick(student.id)}>
              <th scope="row">{student.id}</th>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td>{approved(student)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
