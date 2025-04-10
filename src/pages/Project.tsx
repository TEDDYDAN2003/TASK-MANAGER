import React from 'react';
import { FolderKanban } from 'lucide-react';

const Projects: React.FC = () => {
    return (
        <div className="container mx-auto max-w-2xl px-4 py-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                    <FolderKanban className="w-8 h-8 text-blue-500" />
                    <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
                </div>

                <div className="text-center py-8 text-gray-500">
                    <p className="mb-4">Project management features coming soon!</p>
                    <p>Stay tuned for updates that will allow you to organize tasks by projects.</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;