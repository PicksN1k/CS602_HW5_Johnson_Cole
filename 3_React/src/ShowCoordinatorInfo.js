// File: ShowCoordinatorInfo.js

export default function CoordinatorInfo({ coordinatorInfo, describe }) {

  function handleCourseClick(event, id) {
    event.preventDefault();
    console.log("Handle Course", id);
    describe(id);
  }

  if (!coordinatorInfo)
    return null;

  return (
    <div>

      <h3>Coordinator Information</h3>

      <h4>
        {coordinatorInfo.firstName} {coordinatorInfo.lastName}
      </h4>

      <ul>
        {coordinatorInfo.courses.map(course => (
          <li key={course._id}>
            <a href="/" onClick={(e) => handleCourseClick(e, course._id)}>
              {course._id}
            </a>{" "}
            {course.courseName}
          </li>
        ))}
      </ul>

    </div>
  );
}