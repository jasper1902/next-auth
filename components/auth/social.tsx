"use client";

import { FcGoogle } from "react-icons/fc";
import {
  FaGithub,
  FaDiscord,
  FaFacebook,
  FaSpotify,
  FaTwitch,
  FaBattleNet,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useSearchParams } from "next/navigation";

const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (
    provider:
      | "google"
      | "github"
      | "discord"
      | "facebook"
      | "spotify"
      | "twitch"
      | "battlenet"
  ) => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center justify-between flex-wrap w-full gap-2">
      <Button
        size="lg"
        variant="outline"
        className="flex-1"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="flex-1"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="flex-1"
        onClick={() => onClick("discord")}
      >
        <FaDiscord className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="flex-1"
        onClick={() => onClick("facebook")}
      >
        <FaFacebook className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="flex-1"
        onClick={() => onClick("spotify")}
      >
        <FaSpotify className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="flex-1"
        onClick={() => onClick("twitch")}
      >
        <FaTwitch className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="flex-1"
        onClick={() => onClick("battlenet")}
      >
        <FaBattleNet className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
