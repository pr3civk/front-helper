const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-full bg-[#0f061f]">
      {children}
    </div>
  );
};

export default AuthLayout;
