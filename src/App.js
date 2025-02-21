import { useState } from "react";
import "./App.css";

function GPACalculator() {
  const [courses, setCourses] = useState([{ name: "", creditHours: "", grade: "" }]);
  const [gpa, setGPA] = useState(null);

  const gradePoints = { A: 4, B: 3, C: 2, D: 1,};

  const handleChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { name: "", creditHours: "", grade: "" }]);
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(({ creditHours, grade }) => {
      if (gradePoints[grade] !== undefined && creditHours) {
        totalPoints += gradePoints[grade] * parseFloat(creditHours);
        totalCredits += parseFloat(creditHours);
      }
    });

    setGPA(totalCredits ? (totalPoints / totalCredits).toFixed(2) : "N/A");
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Hey👋 , Know your GPA</h2>
      {courses.map((course, index) => (
        <div key={index} className="mb-2 flex gap-2">
          <input
            type="text"
            placeholder="Course Name"
            value={course.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            className="border p-2 rounded w-1/3"
          />
          <input
            type="number"
            placeholder="Credit Hours"
            value={course.creditHours}
            onChange={(e) => handleChange(index, "creditHours", e.target.value)}
            className="border p-2 rounded w-1/3"
          />
          <select
            value={course.grade}
            onChange={(e) => handleChange(index, "grade", e.target.value)}
            className="border p-2 rounded w-1/3"
          >
            <option value="">Grade</option>
            {Object.keys(gradePoints).map((grade) => (
              <option key={grade} value={grade}>{grade}</option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={addCourse} className="bg-blue-500 text-white p-2 rounded mt-2">
        Add Course
      </button>
      <button onClick={calculateGPA} className="bg-green-500 text-white p-2 rounded mt-2 ml-2">
        Calculate your GPA
      </button>
      {gpa && <p className="mt-4 font-bold">GPA: {gpa}</p>}
    </div>
  );
}

export default GPACalculator;