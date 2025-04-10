import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface AddTaskProps {
  onAdd: (text: string, priority: 'low' | 'medium' | 'high') => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Task description cannot be empty.');
      return;
    }
    setError('');
    onAdd(text.trim(), priority);
    setText('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col gap-3">
        {/* Task Input */}
        <label htmlFor="task-input" className="sr-only">
          Task Description
        </label>
        <input
          id="task-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          aria-label="Task Description"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Priority Selector and Submit Button */}
        <div className="flex gap-4 items-center">
          <label htmlFor="priority-select" className="sr-only">
            Task Priority
          </label>
          <select
            id="priority-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            aria-label="Task Priority"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <PlusCircle className="w-5 h-5" />
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTask;