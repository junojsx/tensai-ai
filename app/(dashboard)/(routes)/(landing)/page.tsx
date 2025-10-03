import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <h1>Landing Page</h1>
      <div className="m-4 p-4 space-x-4">
        <Link
          href="/sign-in"
          className="border-2 border-solid p-2 m-2 rounded-lg bg-blue-700 text-white"
        >
          Log In
        </Link>
        <Link
          href="/sign-up"
          className="border-2 border-solid p-2 m-2 rounded-lg bg-blue-700 text-white"
        >
          Register
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
