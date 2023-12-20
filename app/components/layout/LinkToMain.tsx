import { Link } from "@remix-run/react";

const LinkToMain = () => {
  return (
    <Link to="#main-content" className="sr-only">
      Skip to main content.
    </Link>
  );
}

export default LinkToMain;