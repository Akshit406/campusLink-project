import '../globals.css';
import CoordinatorNavbar from '../components/CoordinatorNavbar';
import CoordinatorSidebar from '../components/CoordinatorSidebar';

export const metadata = {
  title: 'Coordinator - CampusLink',
  description: 'Coordinator Dashboard for CampusLink',
};

export default function CoordinatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f8fafc]">
        <div className="flex min-h-screen">
          <CoordinatorSidebar />
          <div className="flex-1 flex flex-col">
            <CoordinatorNavbar />
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}