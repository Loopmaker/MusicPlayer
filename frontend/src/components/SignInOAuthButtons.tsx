import { useSignIn } from "@clerk/react";
import { Button } from "./ui/button";

const SignInOAuthButtons = () => {
  const { signIn } = useSignIn() as any ;
 

  const signInWithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    })
  }

  return (
    <Button onClick={signInWithGoogle} variant={"secondary"} className="w-full text-white border-zinc-200 h-11"> 
      Sign in with Google
    </Button>
  )
}
export default SignInOAuthButtons;