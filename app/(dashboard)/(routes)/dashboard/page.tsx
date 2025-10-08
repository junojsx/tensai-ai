"use client"; //we have to use client for interactive components

const tools = [
  {
    label: "Chat",
    icon: "MessageSquare",
    href: "/converesation",
    color: "text-violet-500/10 bg-sky-500/20",
  },
];
const DashboardPage = () => {
  return (
    <>
      <div className="mb-8 space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Tensai AI Assistant
        </h1>
        <h2 className="text-sm text-muted-foreground font-light md:text-lg text-center">
          Chat with your personal AI assistant.
        </h2>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <a href={tool.href}></a>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
