import { Link } from "react-router";

interface Props {
  children: string;
}

const Banner = ({ children }: Props) => {
  return (
    <Link to="about#about-this-review">
      <div className="hidden md:block absolute -top-18 -left-24 bg-imagePrimary z-50 h-44 w-56 -rotate-45 pt-32 px-22 text-offwhite text-lg text-center uppercase font-powerWide">
        {children}
      </div>
    </Link>
  );
};

export default Banner;
