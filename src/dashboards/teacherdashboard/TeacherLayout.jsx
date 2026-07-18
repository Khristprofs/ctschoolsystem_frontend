import { Outlet } from "react-router-dom";
import TeacherSidebar from "./Siderbar";

const TeacherLayout = () => {

  return (
    <div className="flex min-h-screen">

      <TeacherSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>

    </div>
  );
};

export default TeacherLayout;