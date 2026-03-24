import { Button } from "./components/ui/button"
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
function App() {

  return (
    <>
     <header>
        <Show when="signed-out">
          <SignInButton>
              <Button variant="outline">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="outline">Sign Up</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default App
