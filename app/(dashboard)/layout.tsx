import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
("bg-[#071a15]");

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-purple-dark relative">
      <div className="hidden h-full w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[100] bg-purple-dark border-r-[1px] border-r-stone-200/10">
        <Sidebar />
      </div>

      <Navbar />
      <main className="md:pl-72 dark:bg-purple-dark h-full ml-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
