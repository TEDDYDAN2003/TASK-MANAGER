import React from 'react';
import { Settings2 } from 'lucide-react';

const Settings: React.FC = () => {
    return (
        <div className="container mx-auto max-w-2xl px-4 py-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                    <Settings2 className="w-8 h-8 text-blue-500" />
                    <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
                </div>

                <div className="space-y-6">
                    <div className="border-b pb-4">
                        <h2 className="text-lg font-semibold mb-2">Preferences</h2>
                        <p className="text-gray-500">Customize your Task Manager experience (Coming Soon)</p>
                    </div>

                    <div className="border-b pb-4">
                        <h2 className="text-lg font-semibold mb-2">Account</h2>
                        <p className="text-gray-500">Manage your account settings (Coming Soon)</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">Notifications</h2>
                        <p className="text-gray-500">Configure notification preferences (Coming Soon)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;