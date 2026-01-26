import { useState, type ReactNode } from 'react';

import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';

interface TaskContextProviderProps {
  children: ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  return (
    <TaskContext.Provider value={{ state }}>{children}</TaskContext.Provider>
  );
}
