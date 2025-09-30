import './globals.css';

export const metadata = {
  title: 'CampusLink',
  description: 'University Club Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f8fafc] text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}