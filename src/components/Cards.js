import React from 'react';
import Card from './Card';
import {useState} from 'react';

const Cards = (props) => {
  const courses = props.courses;
  const category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);
  console.log("printing data");
  console.log(courses);
// for getting all courses in a singe array
  function getCourses() {
    if(category ==="All") {
      let allCourses = [];
      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allCourses.push(courseData);
        })
      } )
      return allCourses;
  }
  else{
    //specific category ka data render hoga
    return courses[category];
  }
    }
    
   
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map( (course) => (
          <Card key={course.id} course={course} 
          likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
        ))
      }
    </div>
  )
}

export default Cards
