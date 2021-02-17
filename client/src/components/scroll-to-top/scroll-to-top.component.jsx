import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { withRouter } from "react-router-dom";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return children;
}

export default withRouter(ScrollToTop);
