import DashboardComponents from '@/components/dashboard/Dashboard';
import MainLayout from '@/components/layout/MainLayout';
// import Provider from '@/context/Provider';
const Dashboard = () => {
  return (
    <div>
      <MainLayout>
        <DashboardComponents />
      </MainLayout>
    </div>
  );
};

export default Dashboard;
