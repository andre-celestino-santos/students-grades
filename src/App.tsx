import { approved } from "./model";
import { students } from "./data";

function App() {
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
              required
            ></input>
          </label>
        </fieldset>
        <button type="button">Create</button>
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
            <tr key={student.id}>
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
