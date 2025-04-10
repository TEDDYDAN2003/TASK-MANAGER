import React from 'react';
import { Info } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto max-w-2xl px-4 py-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                {/* Header Section */}
                <div className="flex items-center gap-3 mb-6">
                    <Info className="w-8 h-8 text-blue-500" aria-hidden="true" />
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">About Task Manager</h1>
                </div>

                {/* Content Section */}
                <div className="prose dark:prose-invert">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Task Manager is a powerful yet simple tool designed to help you organize your daily tasks
                        and boost your productivity. With features like task prioritization and progress tracking,
                        you can stay on top of your goals and manage your time effectively.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Whether you're managing personal tasks or collaborating with a team, Task Manager provides
                        an intuitive interface and robust functionality to make task management effortless.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;