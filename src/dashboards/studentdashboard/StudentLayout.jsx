import { Outlet } from "react-router-dom";
import StudentSidebar from "./Sidebar";

const StudentLayout = () => {

  return (
    <div className="flex min-h-screen">

      <StudentSidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>

    </div>
  );
};

export default StudentLayout;