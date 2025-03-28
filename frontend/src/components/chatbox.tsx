import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SidebarTrigger } from "./ui/sidebar";

const Chatbox = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] w-full">
      <div className="p-4 bg-gray-200 border-b flex items-center gap-4">
        <SidebarTrigger />
        <h2 className="font-bold">Conversation</h2>
      </div>

      {/* Messages */}
      <div className="overflow-y-auto p-4 bg-gray-100">
        <p>history</p>
      </div>

      <div className="flex items-center justify-center bg-white border-t">
        <div className="flex items-center gap-2 p-4 w-[30%]">
          <Input type="text" placeholder="Type your message..." className="" />
          <Button variant="outline" size="icon">
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
