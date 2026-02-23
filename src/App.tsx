import React from "react";

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
            <th scope="col">Name</th>
            <th scope="col">Grade</th>
            <th scope="col">Approved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">André</th>
            <td>7</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row">João</th>
            <td>8</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th scope="row">Maria</th>
            <td>6</td>
            <td>No</td>
          </tr>
          <tr>
            <th scope="row">Pedro</th>
            <td>3</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
