
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BaseLayout } from "@/layouts/BaseLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <BaseLayout>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-cloud-muted mb-4">Oops! Page not found</p>
          <a href="/" className="text-cloud-primary hover:text-cloud-primary/90 underline">
            Return to Home
          </a>
        </div>
      </div>
    </BaseLayout>
  );
};

export default NotFound;
