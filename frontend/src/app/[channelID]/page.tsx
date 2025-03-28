'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Chatbox from "@/components/chatbox";

const page = () => {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <div>
          <AppSidebar />
        </div>
        <div className="w-full">
          <Chatbox />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default page;
