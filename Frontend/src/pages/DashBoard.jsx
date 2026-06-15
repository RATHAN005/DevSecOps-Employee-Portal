import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <MainLayout>

      <div className="grid grid-cols-3 gap-5">

        <StatCard
          title="Employees"
          value="150"
        />

        <StatCard
          title="Attendance"
          value="95%"
        />

        <StatCard
          title="Leave Balance"
          value="12"
        />

      </div>

    </MainLayout>
  );
}

export default Dashboard;