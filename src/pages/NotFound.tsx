import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { House } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="hero-grid flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
        </div>

        <h2 className="text-2xl font-semibold mb-3">Page not found</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
        >
          <House className="h-5 w-5" />
          Return To Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
