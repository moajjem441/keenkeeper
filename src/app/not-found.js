import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      {/* বড় একটি আইকন বা সংখ্যা */}
      <h1 className="text-9xl font-extrabold text-emerald-600 tracking-widest">404</h1>
      
      <div className="bg-emerald-500 text-white px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      
      <h2 className="mt-6 text-3xl font-bold text-gray-800">Something is missing</h2>
      <p className="mt-4 text-gray-500 mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link 
        href="/" 
        className="px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}