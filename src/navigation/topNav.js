import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <div>
            <Link to="/courses">Courses</Link>
            <Link to="/students">Students</Link>
            <Link to="/lecturers">Lecturers</Link>
        </div>
    )

}

export default TopNav