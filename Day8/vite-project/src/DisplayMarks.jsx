import React from 'react'
import Marks from './Marks';

const DisplayMarks = () => {
  const Student = [
    { m1: 87, m2: 97, m3: 95},
    { m1: 87, m2: 97, m3: 95},
    { m1: 87, m2: 97, m3: 95},
    { m1: 87, m2: 97, m3: 95},
  ];
  return(
    <>
      {
        Student.map((student, index) => (
          <Marks key={index} m1 = {student.m1} m2={student.m2} m3={student.m3}/>
        ))
      }
    </>
  )
}

export default DisplayMarks