import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import DefaultPage from "./pages/common/DefaultPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ContactAdmin from "./pages/ContactAdmin/ContactAdmin";
import BugReport from "./pages/common/BugReport";
import StudentHome from "./pages/student/Home";
import CourseBrowsing from "./pages/student/CourseBrowsing";
import Profile from "./pages/student/Profile";
import TeacherHome from "./pages/teacher/Home";
import GradeUpload from "./pages/teacher/GradeUpload";
import AdminHome from "./pages/admin/Home";
import AdminEnrollmentSetting from "./pages/admin/EnrollmentSetting";
import AdminViewEditCourses from "./pages/admin/ViewEditCourses";
import AdminAddCourses from "./pages/admin/AddCourse";
import AdminViewEditUsers from "./pages/admin/ViewEditUsers";
import AdminDeleteCourse from "./pages/admin/DeleteCourse";
import AdminDeleteUser from "./pages/admin/DeleteUser";
import AdminAddUser from "./pages/admin/AddUser";
import "./style.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/student/home",
    element: <StudentHome />,
  },
  {
    path: "/teacher/home",
    element: <TeacherHome />,
  },
  {
    path: "/teacher/GradeUpload",
    element: <GradeUpload />,
  },
  {
    path: "/admin/home",
    element: <AdminHome />,
  },
  {
    path: "/admin/EnrollmentSetting",
    element: <AdminEnrollmentSetting />,
  },
  {
    path: "/admin/ViewEditCourses",
    element: <AdminViewEditCourses />,
  },
  {
    path: "/admin/ViewEditCourses/AddCourses",
    element: <AdminAddCourses />,
  },
  {
    path: "/admin/ViewEditCourses/DeleteCourses",
    element: <AdminDeleteCourse />,
  },
  {
    path: "/admin/ViewEditUsers",
    element: <AdminViewEditUsers />,
  },
  {
    path: "/admin/ViewEditUsers/AddUsers",
    element: <AdminAddUser />,
  },
  {
    path: "/admin/ViewEditUsers/DeleteUsers",
    element: <AdminDeleteUser />,
  },
  {
    path: "/student/CourseBrowsing",
    element: <CourseBrowsing />,
  },
  {
    path: "/student/profile",
    element: <Profile />,
  },
  {
    path: "/ContactAdmin",
    element: <ContactAdmin />,
  },
  {
    path: "/BugReport",
    element: <BugReport />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
