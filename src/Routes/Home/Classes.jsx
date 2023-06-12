import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();

    const { user } = useAuth();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch the course data from the server
        fetch('http://localhost:5000/classes')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.log(error));
    }, []);

    const handleSelect = (course) => {
        console.log(course)
        console.log(user)
        const selectedClass = {
            userName: user?.displayName,
            email: user?.email,
            className: course?.name,
            price: course?.price,
            photoURL: course?.photoURL,
            instructor: course?.instructor,

        }
        console.log(selectedClass)
        axiosSecure.post('/enrolled', selectedClass)
            .then(data => {
                console.log('after posting new  item', data.data)
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        if (!isLoggedIn()) {
            alert('Please log in before selecting the course.');
            return;
        }

        if (course.availableSeats === 0) {
            alert('No available seats for this course.');
            return;
        }

        console.log('Selected course:', course);
    };

    const isLoggedIn = () => {
        // Replace this with your actual login check logic
        return true; // Assume the user is logged in for now
    };

    return (

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            {courses.map(course =>
                <CourseCard
                    key={course.id}
                    style={{ backgroundColor: course.availableSeats === 0 ? 'red' : 'white' }}
                    course={course}
                    handleSelect={handleSelect}
                    isLoggedIn={isLoggedIn}
                >
                </CourseCard>)
            }
        </div>
    )

};

export default Classes;