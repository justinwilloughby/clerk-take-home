import { ClerkLoaded, ClerkLoading, OrganizationSwitcher, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {

  return (
    <div className="w-[400px] mx-auto shadow-2xl rounded-lg p-4">
      <ClerkLoading>
        Loading...
      </ClerkLoading>
      <ClerkLoaded>
        <div className="w-full">
          <div className="flex flex-row items-center mb-4">
            <h1 className="text-xl font-bold flex-auto">Clerk Take Home</h1>
            <div>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <div className="flex flex-row space-x-4">
                  <SignInButton forceRedirectUrl="/organization">
                    <button className="p-2 rounded-lg bg-blue-500 text-white">Sign In</button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="p-2 rounded-lg hover:bg-neutral-300">Sign Up</button>
                  </SignUpButton>
                </div>
              </SignedOut>
            </div>            
          </div>
          <div className="min-h-[200px] flex flex-col space-y-4">
            <div>This is public content</div>
            <Link href="/onboarding" className="text-blue-500">/onboarding</Link>
            <Link href="/organization" className="text-blue-500">/organization</Link>
            <Link href="/organization-profile" className="text-blue-500">/organization-profile</Link>
          </div>
        </div>
      </ClerkLoaded>
    </div>
  );
}
