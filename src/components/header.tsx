import { createClient } from "@/utils/supabase/server";
import { Gift, UsersRound } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./footer";
import { Button } from "./ui/button";

export default async function Header() {
  const supabase = await createClient();
  // Check if user is authenticated
  const { data: user } = await supabase.auth.getUser();
  if (!user) {
    return null;
  }

  return (
    <header className="border-b">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <Link
            href={`/`}
            className="text-2xl font-bold flex items-center gap-2"
          >
            <Gift className="h-6 w-6 text-primary" />
            <span className="font-bold">Amigo Secreto</span>
          </Link>

          <nav className="flex items-center space-x-8">
            <Button>
              <Link
                href={`/home/groups/`}
                className=" text-foreground text-sm flex gap-2 items-center"
              >
                Meus grupos
                <UsersRound className="h-6 w-6" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-[1.5px] border-white"
            >
              <Link href="/home/groups/new">Novo grupo</Link>
            </Button>
          </nav>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
