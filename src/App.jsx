import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Partners from './pages/Partners';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import './index.css';

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
            <h1 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry for the inconvenience. Please try refreshing the page.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blogdetail" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> {/* Catch-all route */}
        </Routes>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

export default App;