"use client";

import Heading from "@/components/ui/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
//10mins

import { formSchema } from "./constants";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      prompt: "",
    },
  });

  return (
    <div>
      <Heading
        title="Conversation"
        description="This is the conversation page"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8"></div>
    </div>
  );
};

export default ConversationPage;
