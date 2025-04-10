import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white shadow-md mt-auto">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Copyright Section */}
                    <div className="text-gray-600 mb-4 md:mb-0">
                        © {new Date().getFullYear()} Task Manager. All rights reserved.
                    </div>

                    {/* Social Media Links */}
                    <nav className="flex items-center gap-6" aria-label="Social Media Links">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                            aria-label="Visit our GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                            aria-label="Visit our Twitter"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                            aria-label="Visit our LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;