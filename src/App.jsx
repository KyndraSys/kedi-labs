import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Component, useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Home from '@pages/Home';
import About from '@pages/About';
import Programs from '@pages/Programs';
import Partners from '@pages/Partners';
import Blog from '@pages/Blog';
import BlogDetail from '@pages/BlogDetail';
import Contact from '@pages/Contact';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
           <h1 className="text-2xl font-bold text-red-600 mb-4">Temporal glitch detected!</h1>
<p className="text-gray-600 mb-4">Looks like reality blinked. Try contacting support below.</p>
<a
  href="https://wa.me/254113904796?text=%22Seems%20you%20didn%E2%80%99t%20cook%20well%20enough%2C%22%20Kedi%20Labs."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
>
  Contact Support
</a>

          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// 404 Not Found Component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <Navigate to="/" replace />
    </div>
  </div>
);

// Component to handle hash navigation and scroll restoration
const HashScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation on route change or page load
    const handleHashNavigation = () => {
      const hash = location.hash;
      if (hash) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        // If no hash, scroll to top (only on route change, not on initial load)
        if (location.pathname !== '/' || !window.location.hash) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    handleHashNavigation();
  }, [location]);

  // Handle browser back/forward with hash
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return null;
};

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/blogdetail" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/category/education" element={<Blog />} />
              <Route path="/blog/category/technology" element={<Blog />} />
              <Route path="/blog/category/partnerships" element={<Blog />} />
              <Route path="/blog/category/research" element={<Blog />} />
              <Route path="/blog/stem-education-africa" element={<BlogDetail />} />
              <Route path="/blog/digital-transformation" element={<BlogDetail />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;