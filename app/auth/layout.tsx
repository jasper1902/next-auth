const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 items-center pt-8 sm:pt-10 md:pt-12 lg:pt-16">
      {children}
    </div>
  );
};

export default AuthLayout;
