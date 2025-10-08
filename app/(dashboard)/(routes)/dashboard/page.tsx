"use client"; //we have to use client for interactive components
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Icon,
  MessageSquare,
  Code2Icon,
  ImageIcon,
  Music2Icon,
  Settings2Icon,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Generate Video",
    href: "/generate-video",
    icon: VideoIcon,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    label: "Generate Image",
    href: "/generate-image",
    icon: ImageIcon,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    label: "Generate Music",
    href: "/generate-music",
    icon: Music2Icon,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    label: "Generate Code Pattern",
    href: "/generate-code-pattern",
    icon: Code2Icon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings2Icon,
    color: "text-gray-500",
    bgColor: "bg-gray-500/10",
  },
];
const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
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
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex  justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
              <ArrowRight className="w-5 h-5 ml-auto" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
