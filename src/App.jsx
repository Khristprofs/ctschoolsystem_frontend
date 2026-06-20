import { Routes, Route } from "react-router-dom";
import Layout from "./components/nav/Layout";
import Home from "./components/Home";
import Login from "./auth/Login";
import Signup from "./auth/SignUp";
// public pages
import KnowAboutUs from "./components/navpages/KnowUs";
import MissionAndPhilosophy from "./components/navpages/Mission";
import FacultyStaff from "./components/navpages/Faculty&Staff";
import AdmissionRequirement from "./components/navpages/AdmissionRequirement";
import InternationalStudent from "./components/navpages/InternationalStudent";
import AcademicPrograms from "./components/navpages/AcademicPrograms";
import LowerSchool from "./components/navpages/LowerSchool";
import Primary from "./components/navpages/Primary";
import JuniorSecondarySchool from "./components/navpages/Junior";
import SeniorSecondarySchool from "./components/navpages/Senior";
import StudentWellbeing from "./components/navpages/Wellbeing";
import CollegeCounseling from "./components/navpages/CollegeCounselling";
import ClubsAndSocieties from "./components/navpages/Club&Socities";
import SportsAndGames from "./components/navpages/Sports&Games";
import EventsAndActivities from "./components/navpages/Events&Activities";

import AdminLayout from "./dashboards/admindashboard/AdminLayout";
import DashboardHome from "./dashboards/admindashboard/DashboardHome";
import ProtectedRoute from "./routes/ProtectedRoute";
import UsersAdmin from "./dashboards/admindashboard/UsersAdmin";
import UserView from "./dashboards/admindashboard/UserView";
import EditUser from "./dashboards/admindashboard/EditUser";
import CreateUser from "./dashboards/admindashboard/CreateUser";
import StudentsAdmin from "./dashboards/admindashboard/StudentAdmin";
import ViewStudent from "./dashboards/admindashboard/StudentView";
import EditStudent from "./dashboards/admindashboard/EditStudent";
import CreateStudent from "./dashboards/admindashboard/CreateStudent";
import TeacherAdmin from "./dashboards/admindashboard/TeacherAdmin";
import ViewTeacher from "./dashboards/admindashboard/TeacherView";
import EditTeacher from "./dashboards/admindashboard/EditTeacher";
import CreateTeacher from "./dashboards/admindashboard/CreateTeacher";
import Academics from "./dashboards/admindashboard/Academics";
import ViewLevel from "./dashboards/admindashboard/LevelView";
import EditLevel from "./dashboards/admindashboard/EditLevel";
import LevelsAdmin from "./dashboards/admindashboard/LevelAdmin";
import CreateLevel from "./dashboards/admindashboard/CreateLevel";
import SubjectsAdmin from "./dashboards/admindashboard/SubjectAdmin";
import ViewSubject from "./dashboards/admindashboard/SubjectView";
import EditSubject from "./dashboards/admindashboard/EditSubject";
import CreateSubject from "./dashboards/admindashboard/CreateSubject";
import AttendanceAdmin from "./dashboards/admindashboard/AttendanceAdmin";
import ViewAttendance from "./dashboards/admindashboard/AttendanceView";
import EditAttendance from "./dashboards/admindashboard/EditAttendance";
import CreateAttendance from "./dashboards/admindashboard/CreateAttendance";
import TestAdmin from "./dashboards/admindashboard/TestAdmin";
import TestView from "./dashboards/admindashboard/TestView";
import EditTest from "./dashboards/admindashboard/EditTest";
import CreateTest from "./dashboards/admindashboard/CreateTest";
import QuizAdmin from "./dashboards/admindashboard/QuizAdmin";
import QuizView from "./dashboards/admindashboard/QuizView";
import EditQuiz from "./dashboards/admindashboard/EditQuiz";
import CreateQuiz from "./dashboards/admindashboard/CreateQuiz";
import ExamAdmin from "./dashboards/admindashboard/ExamAdmin";
import ExamView from "./dashboards/admindashboard/ExamView";
import EditExam from "./dashboards/admindashboard/EditExam";
import CreateExam from "./dashboards/admindashboard/CreateExam";
import AssessmentItemAdmin from "./dashboards/admindashboard/AssessmentItemAdmin";
import AssessmentItemView from "./dashboards/admindashboard/AssessmentItemView";
import EditAssessmentItem from "./dashboards/admindashboard/EditAssessmentItem";
import CreateAssessmentItem from "./dashboards/admindashboard/CreateAssessmentItem";
import AssessmentAdmin from "./dashboards/admindashboard/AssessmentAdmin";
import AssessmentView from "./dashboards/admindashboard/AssessmentView";
import EditAssessment from "./dashboards/admindashboard/EditAssessment";
import CreateAssessment from "./dashboards/admindashboard/CreateAssessment";
import StudentLayout from "./dashboards/studentdashboard/StudentLayout";
import StudentDashboardHome from "./dashboards/studentdashboard/DashboardHome"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="knowaboutus" element={<KnowAboutUs />} />
        <Route path="missionandphilosophy" element={<MissionAndPhilosophy />} />
        <Route path="facultystaff" element={<FacultyStaff />} />
        <Route path="admissionrequirement" element={<AdmissionRequirement />} />
        <Route path="internationalstudent" element={<InternationalStudent />} />
        <Route path="acedemicprograms" element={<AcademicPrograms />} />
        <Route path="lowerschool" element={<LowerSchool />} />
        <Route path="primary" element={<Primary />} />
        <Route path="junior" element={<JuniorSecondarySchool />} />
        <Route path="senior" element={<SeniorSecondarySchool />} />
        <Route path="wellbeing" element={<StudentWellbeing />} />
        <Route path="collegecounseling" element={<CollegeCounseling />} />
        <Route path="club-society" element={<ClubsAndSocieties />} />
        <Route path="sports-game" element={<SportsAndGames />} />
        <Route path="event-activities" element={<EventsAndActivities />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* ADMIN DASHBOARD (PROTECTED) */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute
            allowedRoles={["Admin"]}
          >
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="users" element={<UsersAdmin />} />
        <Route path="/admin/users/:id" element={<UserView />} />
        <Route path="/admin/users/:id/edit" element={<EditUser />} />
        <Route path="/admin/users/create" element={<CreateUser />} />
        <Route path="/admin/students" element={<StudentsAdmin />} />
        <Route path="/admin/students/:id" element={<ViewStudent />} />
        <Route path="/admin/students/edit/:id" element={<EditStudent />} />
        <Route path="/admin/students/create" element={<CreateStudent />} />
        <Route path="/admin/teachers" element={<TeacherAdmin />} />
        <Route path="/admin/teachers/:id" element={<ViewTeacher />} />
        <Route path="/admin/teachers/edit/:id" element={<EditTeacher />} />
        <Route path="/admin/teachers/create" element={<CreateTeacher />} />
        <Route path="/admin/academics" element={<Academics />} />
        <Route path="/admin/academics/levels" element={<LevelsAdmin />} />
        <Route path="/admin/academics/levels/:id" element={<ViewLevel />} />
        <Route path="/admin/academics/levels/edit/:id" element={<EditLevel />} />
        <Route path="/admin/academics/levels/create" element={<CreateLevel />} />
        <Route path="/admin/academics/subjects" element={<SubjectsAdmin />} />
        <Route path="/admin/academics/subjects/:id" element={<ViewSubject />} />
        <Route path="/admin/academics/subjects/edit/:id" element={<EditSubject />} />
        <Route path="/admin/academics/subjects/create" element={<CreateSubject />} />

        <Route path="/admin/academics/attendance" element={<AttendanceAdmin />} />
        <Route path="/admin/academics/attendance/:id" element={<ViewAttendance />} />
        <Route path="/admin/academics/attendance/edit/:id" element={<EditAttendance />} />
        <Route path="/admin/academics/attendance/create" element={<CreateAttendance />} />

        <Route path="/admin/academics/tests" element={<TestAdmin />} />
        <Route path="/admin/academics/tests/:id" element={<TestView />} />
        <Route path="/admin/academics/tests/edit/:id" element={<EditTest />} />
        <Route path="/admin/academics/tests/create" element={<CreateTest />} />

        <Route path="/admin/academics/quizzes" element={<QuizAdmin />} />
        <Route path="/admin/academics/quizzes/:id" element={<QuizView />} />
        <Route path="/admin/academics/quizzes/edit/:id" element={<EditQuiz />} />
        <Route path="/admin/academics/quizzes/create" element={<CreateQuiz />} />

        <Route path="/admin/academics/exams" element={<ExamAdmin />} />
        <Route path="/admin/academics/exams/:id" element={<ExamView />} />
        <Route path="/admin/academics/exams/edit/:id" element={<EditExam />} />
        <Route path="/admin/academics/exams/create" element={<CreateExam />} />

        <Route path="/admin/academics/assessment-items" element={<AssessmentItemAdmin />} />
        <Route path="/admin/academics/assessment-items/:id" element={<AssessmentItemView />} />
        <Route path="/admin/academics/assessment-items/edit/:id" element={<EditAssessmentItem />} />
        <Route path="/admin/academics/assessment-items/create" element={<CreateAssessmentItem />} />

        <Route path="/admin/assessments" element={<AssessmentAdmin />} />
        <Route path="/admin/assessments/:id" element={<AssessmentView />} />
        <Route path="/admin/assessments/edit/:id" element={<EditAssessment />} />
        <Route path="/admin/assessments/create" element={<CreateAssessment />} />
      </Route>

      <Route
        path="/student"
        element={
          <ProtectedRoute
            allowedRoles={["Student"]}
          >
            <StudentLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<StudentDashboardHome />} />
      </Route>
    </Routes>
  );
}

export default App;