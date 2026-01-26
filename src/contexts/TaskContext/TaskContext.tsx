import { createContext } from 'react';

import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';

interface TaskContextProps {
  state: TaskStateModel;
}

const initialContextValue = {
  state: initialTaskState,
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
