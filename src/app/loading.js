export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
    
      <div className="relative">
        <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
      </div>
      
 
      <h2 className="text-xl font-semibold text-gray-700 animate-pulse">
        Loading data...
      </h2>
      <p className="text-gray-500 text-sm">Please wait a moment.</p>
    </div>
  );
}