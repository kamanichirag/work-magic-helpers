
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to customers page when landing on the index page
    navigate("/customers");
  }, [navigate]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1>Redirecting to Customers...</h1>
    </div>
  );
};

export default Index;
