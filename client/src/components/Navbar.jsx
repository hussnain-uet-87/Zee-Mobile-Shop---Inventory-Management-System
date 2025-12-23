import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-bold text-slate-800">
        Zee Mobile Shop
      </h1>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </header>
  );
}
