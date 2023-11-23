import React from "react";
import Card from "./Card"
import { useState } from "react";
import Notavaiable from "./Notavaiable";

const Cards = (props) => {
    const [empty , setEmpty] = useState(false); 

    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedCourses] = useState([]);
    function getCourses() {
        if(courses.length ===0){
            setEmpty = true;
        }
        else{
        if(category ==="All"){
        let allCourses = [];
        
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;}
        else{
            // mai sirf specific category ka array pass karunga
            return courses[category];
        }
    } }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4" >{
                 empty?
                 (<Notavaiable/>):
                 ( getCourses().map((course) => (
                    <Card key={course.id} course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses} />
 )))
            }
        </div>
    );

}
export default Cards