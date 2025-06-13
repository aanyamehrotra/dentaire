import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft, Smile } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dental-bg-primary">
      <Navigation />
      <main>
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-dental-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Smile className="w-12 h-12 text-dental-primary" />
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-dental-primary mb-6">
                404
              </h1>

              <h2 className="text-3xl font-bold text-dental-text-primary mb-6">
                Oops! Page Not Found
              </h2>

              <p className="text-xl text-dental-text-secondary mb-8 leading-relaxed">
                The page you're looking for seems to have gone missing, just
                like a lost tooth! But don't worry, we can help you find your
                way back to a healthy smile.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="btn-primary">
                    <Home className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="btn-outline"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Button>
              </div>

              <div className="mt-12 p-8 bg-dental-bg-secondary rounded-2xl">
                <h3 className="text-xl font-bold text-dental-text-primary mb-4">
                  Need Help Finding Something?
                </h3>
                <p className="text-dental-text-secondary mb-6">
                  Our team is here to help you navigate our website and find the
                  dental care information you need.
                </p>
                <Link to="/contact">
                  <Button className="btn-secondary">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
