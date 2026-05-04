import React, { useState } from 'react';
import { UserPlus, Mail, Hash, BookOpen, Cpu } from 'lucide-react';
import toast from 'react-hot-toast';

const StudentForm = ({ onStudentAdded }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reg_no: '',
        dept: 'Select Department',
        skills: '',
        roll_no: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.dept === "Select Department") {
            toast.error("Please select a department");
            return;
        }

        if (!formData.skills.trim()) {
            toast.error("Please enter at least one skill");
            return;
        }

        const processedData = {
            ...formData,
            skills: formData.skills
                .split(',')
                .map(skill => skill.trim())
                .filter(skill => skill.length > 0)
        };

        try {
            const response = await fetch('https://rest-api-url-vbackend.vercel.app/api/userRouter/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(processedData)
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Student added successfully 🎉");

                setFormData({
                    name: '',
                    email: '',
                    reg_no: '',
                    dept: 'Select Department',
                    roll_no: '',
                    skills: ''
                });

                if (onStudentAdded) onStudentAdded();
            } else {
                toast.error(data.error || "Failed to add student");
            }

        } catch (error) {
            toast.error("Server error. Try again later.");
            console.error(error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                <UserPlus className="text-blue-600" size={24} />
                Student Registration
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Responsive Grid for Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <UserPlus size={18} />
                        </span>
                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                        />
                    </div>

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <Mail size={18} />
                        </span>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                        />
                    </div>
                </div>

                {/* Secondary Info Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <Hash size={18} />
                        </span>
                        <input
                            name="reg_no"
                            type="text"
                            placeholder="Registration No"
                            required
                            value={formData.reg_no}
                            onChange={handleChange}
                            className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                        />
                    </div>

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <Hash size={18} />
                        </span>
                        <input
                            name="roll_no"
                            type="text"
                            placeholder="Roll No"
                            required
                            value={formData.roll_no}
                            onChange={handleChange}
                            className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                        />
                    </div>

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <BookOpen size={18} />
                        </span>
                        <select
                            name="dept"
                            value={formData.dept}
                            onChange={handleChange}
                            className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl appearance-none focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                        >
                            <option value="Select Department" disabled>Select Department</option>
                            <option value="CSE">Computer Science (CSE)</option>
                            <option value="ECE">Electrical (EE)</option>
                            <option value="ECE">Electronics (ECE)</option>
                            <option value="ME">Mechanical (ME)</option>
                            <option value="CE">Civil (CE)</option>
                        </select>
                    </div>
                </div>

                {/* Skills Input */}
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <Cpu size={18} />
                    </span>
                    <input
                        name="skills"
                        type="text"
                        placeholder="Skills (e.g. React, Node.js, PHP)"
                        value={formData.skills}
                        onChange={handleChange}
                        className="w-full pl-10 p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
                >
                    Add Student
                </button>
            </form>
        </div>
    );
};

export default StudentForm;