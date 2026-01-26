import { createContext, useContext, type ReactNode } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

interface TaskContextProps {
  state: TaskStateModel;
}

const initialContextValue = {
  state: initialState,
};

const TaskContext = createContext<TaskContextProps>(initialContextValue);

interface TaskContextProviderProps {
  children: ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  return (
    <TaskContext.Provider value={initialContextValue}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
