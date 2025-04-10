import React, { useState } from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

interface Task {
    id: string;
    text: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
}

const Dashboard: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (text: string, priority: 'low' | 'medium' | 'high') => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            text,
            completed: false,
            priority
        };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id: string) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div className="container mx-auto max-w-2xl px-4 py-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
                <AddTask onAdd={addTask} />

                {tasks.length > 0 && (
                    <div className="mb-4 text-sm text-gray-600">
                        Completed: {completedTasks} of {tasks.length}
                    </div>
                )}

                <TaskList
                    tasks={tasks}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                />
            </div>
        </div>
    );
};

export default Dashboard;