import React from 'react';
import { CheckSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? 'text-blue-500' : 'text-gray-600';
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <CheckSquare className="w-6 h-6 text-blue-500" />
                        <span className="text-xl font-semibold text-gray-800">Task Manager</span>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link to="/" className={`${isActive('/')} hover:text-blue-500 transition-colors`}>
                            Dashboard
                        </Link>
                        <Link to="/projects" className={`${isActive('/projects')} hover:text-blue-500 transition-colors`}>
                            Projects
                        </Link>
                        <Link to="/settings" className={`${isActive('/settings')} hover:text-blue-500 transition-colors`}>
                            Settings
                        </Link>
                        <Link to="/about" className={`${isActive('/about')} hover:text-blue-500 transition-colors`}>
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;