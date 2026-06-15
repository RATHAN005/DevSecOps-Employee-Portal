import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div
      className="
      flex
      min-h-screen
      bg-slate-100
      dark:bg-slate-900
    "
    >
      <Sidebar />

      <div className="flex-1 lg:ml-0">

        <Navbar />

        <main className="p-6">
          {children}
        </main>

      </div>
    </div>
  );
}

export default MainLayout;