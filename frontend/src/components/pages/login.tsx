"use client";
import { ChangeEvent, useState } from "react";
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";

import { useUserState } from "@/store/User";

enum Type {
  JOIN,
  CREATE
}

export default function Login() {
  const [channelID, setChannelID] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const { setUsername } = useUserState()
  const router = useRouter()
  

  const onClickHandler = ( type: Type ) => {
    if (name == null || name.length < 3){
      alert('Enter a valid name')
      return
    }

    setUsername(name)

    if (type == Type.JOIN) {
      router.push('/' + channelID)
    } else {
      // Get channel ID from Backend
      router.push('/' + channelID)
    }
  }

  return (
    <main className="flex justify-center items-center h-screen">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>Chat App</CardTitle>
          <CardDescription>Join or Create a Channel</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Separator />
          <div>
            <Input
              type="text"
              placeholder="Channel ID"
              onChange={(ev: ChangeEvent<HTMLInputElement>) => {
                setChannelID(ev.target.value);
              }}
            />
            <Input
              type="text"
              placeholder="Name"
              className="mt-4"
              required
              onChange={(ev: ChangeEvent<HTMLInputElement>) => {
                setName(ev.target.value);
              }}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full" disabled={!channelID || channelID.trim() === ""} onClick={() => onClickHandler(Type.JOIN)}>
            Join!
          </Button>
          <Button className="w-full" disabled={channelID ? true : false} onClick={() => onClickHandler(Type.CREATE)}>
            Create
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
