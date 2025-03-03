import Sidebar from "@/components/Sidebar";
import StatsCards from "@/components/StatsCards";
import TransactionsTable from "@/components/TransactionsTable";
import SalesChart from "@/components/SalesChart";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <StatsCards />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TransactionsTable />
          <SalesChart />
        </div>
      </main>
    </div>
  );
}
