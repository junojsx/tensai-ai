const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-500">
      {children}
    </div>
  );
};

export default AuthLayout;
