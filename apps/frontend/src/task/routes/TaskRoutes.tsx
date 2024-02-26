import { Navigate, Route, Routes } from "react-router-dom";
import {
  AddTaskPage,
  CalendarPage,
  DoneTasksPage,
  HomePage,
  ProfilePage,
} from "../pages";
import { TaskPage } from "../pages/TaskPage";

export const TaskRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/calendar' element={<CalendarPage />} />
      <Route path='/add' element={<AddTaskPage />} />
      <Route path='/done' element={<DoneTasksPage />} />
      <Route path='/:id' element={<TaskPage />} />
      <Route path='/profile' element={<ProfilePage />} />

      <Route path='/*' element={<Navigate to={"/"} />} />
    </Routes>
  );
};
