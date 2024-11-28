import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">404</h1>
        <h2 className="text-2xl">Page Not Found</h2>
        <div className="text-4xl my-8">¯\_(ツ)_/¯</div>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;