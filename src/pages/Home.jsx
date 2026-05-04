import React, { useEffect, useState } from 'react';
import StudentForm from '../components/StudentForm';
import StudentCard from '../components/StudentCard';
import toast from 'react-hot-toast';

const Home = () => {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const res = await fetch('https://rest-api-url-vbackend.vercel.app/api/userRouter/all');
            const data = await res.json();
            //   console.log("API Response:", data);
            setStudents(data);
            //   console.log("Fetched students:", data);
        } catch (err) {
            console.error("Failed to fetch:", err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete this student?")) {
            // password prompt
            const password = prompt("Enter password to delete:");
            if (password === "Rahul876201@#$") {

                const reponse = await fetch(`https://rest-api-url-vbackend.vercel.app/api/userRouter/user/delete/${id}`, { method: 'DELETE' });
                if (reponse.ok) {
                    fetchStudents();
                    toast.success("deleted successfully");

                }
                else {
                    toast.error("Failed to delete");
                }

            }
            else {
                toast.error("Incorrect password");
            }
        };

        const editStudents = async (id) => {
            if (window.confirm("Edit this student?")) {
                // Implement edit functionality here
                toast("Edit functionality not implemented yet");

            }
        };


        useEffect(() => {
            fetchStudents();
        }, []);

        return (
            <main className="max-w-7xl mx-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Side: Form */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24">
                            <StudentForm onStudentAdded={fetchStudents} />
                        </div>
                    </div>

                    {/* Right Side: List */}
                    <div className="lg:col-span-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Enrolled Students</h2>
                            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                                {students.length} Total
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {students.map(student => (
                                <StudentCard
                                    key={student._id}
                                    student={student}
                                    onDelete={handleDelete}
                                    onEdit={editStudents}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    };

    export default Home;