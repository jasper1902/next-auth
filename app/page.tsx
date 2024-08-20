import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <Card className="py-20 px-6 shadow-md bg-opacity-50">
        <CardHeader>
          <h1
            className={cn(
              "text-6xl font-semibold drop-shadow-md ",
              font.className
            )}
          >
            🔐 Auth
          </h1>
        </CardHeader>
        <CardContent>
          <p className=" text-lg">A simple authentication service</p>
        </CardContent>
        <CardFooter>
          <div className="mx-auto">
            <LoginButton asChild>
              <Button size="lg">Sign in</Button>
            </LoginButton>
          </div>
        </CardFooter>
      </Card>
      <div className="space-y-6 text-center"></div>
    </main>
  );
}
