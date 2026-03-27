import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Show, SignInButton, SignUpButton, } from "@clerk/react";

const TopBar = () => {
  const isAdmin = false;
  return (
    <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/55 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">
        Vibrynth
      </div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link to="/admin">
            <LayoutDashboardIcon className="w-5 h-5 mr-2" />
            Admin Dashboard
          </Link>
        )}

        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        


      </div>
    </div>
  )
}

export default TopBar;