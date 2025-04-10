import React from 'react';
import { Trash2, CheckCircle, Circle } from 'lucide-react';

interface TaskItemProps {
  task: {
    id: string;
    text: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  const getPriorityClass = (priority: 'low' | 'medium' | 'high') =>
    priorityColors[priority] || 'bg-gray-100 text-gray-800'; // Fallback for unexpected values

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-2 transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        {/* Toggle Task Completion */}
        <button
          onClick={() => onToggle(task.id)}
          className="text-gray-500 hover:text-green-500 transition-colors"
          aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {task.completed ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>

        {/* Task Details */}
        <div className="flex flex-col">
          <span
            className={`${task.completed ? 'line-through text-gray-400' : 'text-gray-700'
              }`}
          >
            {task.text}
          </span>
          <span
            className={`text-xs px-2 py-1 rounded-full ${getPriorityClass(
              task.priority
            )} inline-block mt-1`}
            aria-label={`${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority`}
          >
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
          </span>
        </div>
      </div>

      {/* Delete Task */}
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-400 hover:text-red-500 transition-colors"
        aria-label="Delete task"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TaskItem;