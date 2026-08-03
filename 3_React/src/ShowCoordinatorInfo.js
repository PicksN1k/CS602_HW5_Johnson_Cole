// File: ShowCoordinatorInfo.js

export default function CoordinatorInfo({ coordinatorInfo, describe }) {
  
  function handleCourseClick(event, id) {
    event.preventDefault();
    console.log("Handle Course", id);
    describe(id);
  }

  if (coordinatorInfo)
    return (
      <div>       

        Code goes here
          
          
      </div>
    );

}
