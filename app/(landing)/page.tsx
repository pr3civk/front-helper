import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-switcher";
const LandingPage = () => {
  return (
    <div>
      Landing Page Unprotected
      <Link href="/sign-in">
        <Button>Login</Button>
      </Link>
      <Link href="/sign-up">
        <Button variant={"ghost"}>Register</Button>
      </Link>
      <ModeToggle />
    </div>
  );
};

export default LandingPage;
