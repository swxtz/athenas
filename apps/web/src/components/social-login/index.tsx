import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export function SocialLogin() {
  return (
    <div className="">
      <Button variant={"ghost"} className="w-full"><FaGithub /></Button>
    </div>
  );
}