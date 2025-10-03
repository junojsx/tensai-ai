import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <SignUp />
    </div>
  );
};

export default Page;
