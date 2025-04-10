import React from 'react';
import TaskItem from './TaskItem';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {
  // Empty state
  if (tasks.length === 0) {
    return (
      <div
        className="text-center py-8 text-gray-500"
        aria-live="polite" // Notify screen readers dynamically
        role="status" // Provide semantic meaning for the empty state
      >
        <p className="mb-2">No tasks yet. Add one to get started!</p>
        <span role="img" aria-label="Clipboard">
          📝
        </span>
      </div>
    );
  }

  // Render task list
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;