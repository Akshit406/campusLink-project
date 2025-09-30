export default function Card({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 ${className}`}>
      {children}
    </div>
  );
}