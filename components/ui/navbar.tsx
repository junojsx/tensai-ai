import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const Navbar = () => {
  return (
    <div className="flex-items-center p-4">
      Menu
      <Link
        href="/sign-in"
        className="border-2 border-solid p-2 m-2 rounded-lg bg-blue-700 text-white"
      >
        {" "}
      </Link>
    </div>
  );
};

export default Navbar;
