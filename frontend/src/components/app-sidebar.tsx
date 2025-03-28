import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useUserState } from "@/store/User";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

export function AppSidebar() {
  const { username } = useUserState();
  return (
    <Sidebar className="bg-amber-50">
      <SidebarHeader className="pt-4 pl-4">
        <UserRow name={username} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <Button variant={"outline"} className="mb-2">
          Exit
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

const UserRow = ({ name }: { name: string }) => {
  
  const nameSplit = name.split(' ')
  const initials = nameSplit.length > 1 ? nameSplit[0][0] + nameSplit[1][0] : nameSplit[0][0]
  return (
    <div className="flex gap-2 items-center">
      <Avatar>
        <AvatarFallback className="bg-white border-2">{initials}</AvatarFallback>
      </Avatar>
      <h3 className="font-bold">{name}</h3>
    </div>
  );
};
