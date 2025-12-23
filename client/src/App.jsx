import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";
import Sales from "./Pages/Sales";
import Expenses from "./Pages/Expenses";
import Loans from "./Pages/Loans";
import Reports from "./Pages/Reports";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="sales" element={<Sales />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="loans" element={<Loans />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
}

export default App;
