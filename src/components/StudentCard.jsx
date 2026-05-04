import React from 'react';
import { Trash2, Edit2, Mail, Book, Code } from 'lucide-react';

const StudentCard = ({ student, onDelete ,onEdit}) => {
    return (
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">

            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">
                        {student.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-mono">
                        {student.reg_no}
                    </p>
                </div>

                <div className="text-right">
                    <button
                        onClick={() => onEdit(student._id)}
                        className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                    >
                        <Edit2 size={18} />
                    </button>
                    <button
                        onClick={() => onDelete(student._id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                        <Trash2 size={18} />
                    </button>


                    {/* Time */}
                    {student.updatedAt && (
                        <p className="text-xs text-gray-400 mt-1">
                            {student.updatedAt.split('T')[0]} ago
                        </p>
                    )}
                </div>
            </div>

            {/* Info Section */}
            <div className="space-y-3">

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={14} className="text-blue-500" />
                    {student.email}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Book size={14} className="text-blue-500" />
                    {student.dept}
                </div>

                {/* Skills */}
                <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Code size={14} />
                        Skills
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {[...(student.skills || [])]
                            .reverse()
                            .map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] uppercase font-bold rounded-md hover:bg-blue-100 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StudentCard;