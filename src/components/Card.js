import React from "react"
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    console.log(course);
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    // ḷogic
    function clickHandler() {
        if (likedCourses.includes(course.id)) {
            //pehle se liked hai 
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("like removed");
        }
        else {
            // pehle se like nahi hai ye course
            // insert karna hai ye course liked courses me 
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                // purane wali state + new wali state
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");

        }
    }
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md  overflow-hidden ">
            <div className="flex relative">
                <img src={course.image.url} />
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-20px] 
         grid place-items-center " >
                    <button onClick={clickHandler} >
                        {
                            likedCourses.includes(course.id) ? (<FcLikePlaceholder font-size="1.75rem" />) :
                                (<FcLike font-size="1.75rem" />)
                        }

                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2 ">{course.description.length > 100 ? (course.description.substr(0, 100)) + ("...") : (course.description)}</p>
            </div>

        </div>
    );

}
export default Card