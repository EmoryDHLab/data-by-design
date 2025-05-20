import { Link } from "react-router";

const LinkToMain = () => {
  return (
    <Link to="#main-content" className="sr-only">
      Skip to main content.
    </Link>
  );
}

export default LinkToMain;