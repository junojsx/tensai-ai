import { SignOutButton, UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-500">Dashboard Page</h1>
      <UserButton />
    </>
  );
};

export default DashboardPage;
