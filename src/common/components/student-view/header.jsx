import { AuthContext } from "@/context/auth-context";
import { LogOut } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="flex items-center justify-between p-4 border-b relative">
      <div className="flex items-center space-x-4">
        <Link to="/home" className="flex items-center hover:text-black">
          <span className="font-extrabold md:text-xl text-[14px]">
            NANA LMS
          </span>
        </Link>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses");
            }}
            className="text-[14px] md:text-[16px] font-medium"
          >
            Explore All Courses
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex gap-4 items-center">
          <div
            onClick={() => navigate("/student-courses")}
            className="flex cursor-pointer items-center gap-3"
          >
            <span className="font-extrabold md:text-xl text-[14px]">
              My Courses
            </span>
          </div>
          <Button variant="primary" onClick={handleLogout}>
            Sign Out <LogOut className="ml-3" size={15} />
          </Button>
        </div>
      </div>
    </header>
  );
}

export default StudentViewCommonHeader;
