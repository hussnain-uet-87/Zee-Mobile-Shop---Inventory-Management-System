import { NavLink } from "react-router-dom";
import {
  ShoppingCart,
  Wallet,
  HandCoins,
  BarChart3,
} from "lucide-react";

const linkBase =
  "flex items-center gap-3 px-4 py-2 rounded-lg transition text-slate-700";

const active =
  "bg-indigo-100 text-indigo-700 font-semibold";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white border-r p-4 space-y-2">
      <NavLink
        to="/dashboard/sales"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : "hover:bg-slate-100"}`
        }
      >
        <ShoppingCart size={18} />
        Sales Management
      </NavLink>

      <NavLink
        to="/dashboard/expenses"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : "hover:bg-slate-100"}`
        }
      >
        <Wallet size={18} />
        Expenses
      </NavLink>

      <NavLink
        to="/dashboard/loans"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : "hover:bg-slate-100"}`
        }
      >
        <HandCoins size={18} />
        Loans
      </NavLink>

      <NavLink
        to="/dashboard/reports"
        className={({ isActive }) =>
          `${linkBase} ${isActive ? active : "hover:bg-slate-100"}`
        }
      >
        <BarChart3 size={18} />
        Reports
      </NavLink>
    </aside>
  );
}
