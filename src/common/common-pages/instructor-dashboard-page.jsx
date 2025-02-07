import { Button, Tabs } from "antd";
import { BarChart, Book, LogOut } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import InstructorCourses from "../components/instructor-view/courses";
import InstructorDashboard from "../components/instructor-view/dashboard";
import { InstructorContext } from "../context/instructor-context";
import { fetchInstructorCourseListService } from "../services";
import QuestionManager from "./instructor-quizzes-page";

const { TabPane } = Tabs;

function InstructorDashboardpage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const { instructorCoursesList, setInstructorCoursesList } =
    useContext(InstructorContext);

  async function fetchAllCourses() {
    const response = await fetchInstructorCourseListService();
    if (response?.success) setInstructorCoursesList(response?.data);
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const menuItems = [
    {
      icon: BarChart,
      label: "Dashboard",
      value: "dashboard",
      component: <InstructorDashboard listOfCourses={instructorCoursesList} />,
    },
    {
      icon: Book,
      label: "Courses",
      value: "courses",
      component: <InstructorCourses listOfCourses={instructorCoursesList} />,
    },
    {
      icon: Book,
      label: "Quizzes",
      value: "quizzes",
      component: <QuestionManager />,
    },
    {
      icon: LogOut,
      label: "Logout",
      value: "logout",
      component: null,
    },
  ];

  function handleLogout() {
    sessionStorage.clear();
    window.location.href = "/";
  }

  return (
    <div className="flex h-full min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Instructor View</h2>
          <nav>
            {menuItems.map((menuItem) => (
              <Button
                className="w-full justify-start mb-2"
                key={menuItem.value}
                type={activeTab === menuItem.value ? "primary" : "default"}
                onClick={
                  menuItem.value === "logout"
                    ? handleLogout
                    : () => setActiveTab(menuItem.value)
                }
              >
                <menuItem.icon className="mr-2 h-4 w-4" />
                {menuItem.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <Tabs activeKey={activeTab} onChange={setActiveTab}>
            {menuItems.slice(0, -1).map((menuItem) => (
              <TabPane tab={menuItem.label} key={menuItem.value}>
                {menuItem.component}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default InstructorDashboardpage;
