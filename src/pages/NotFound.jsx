const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-4xl font-bold">Page Not Found</h2>
      <p className="mt-4 text-gray-700">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">Go back to Home</a>
    </div>
  );
};

export default NotFound;