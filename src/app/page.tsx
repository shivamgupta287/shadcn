import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#111]">
      {/* Left section with testimonial */}
      <div className="flex-1 relative p-8">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-semibold text-white">Acme Inc</span>
        </div>

        {/* Testimonial positioned at bottom */}
        <div className="absolute bottom-8">
          <blockquote className="text-lg mb-2 text-white">
            "This library has saved me countless hours of work and helped me
            deliver stunning designs to my clients faster than ever before."
          </blockquote>
          <cite className="text-sm text-gray-400">Sofia Davis</cite>
        </div>
      </div>

      {/* Right section with auth form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Create a user account
            </h1>
            <p className="text-sm text-gray-400">
              Enter your email below to create your account
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Input type="email" placeholder="name@example.com" className="w-full bg-[#1a1a1a] border-0 text-white placeholder:text-gray-500"/>
            </div>
            <Button className="w-full bg-white text-black hover:bg-gray-200">Sign in with Email</Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-[#333]" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#111] px-2 text-gray-400">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  className="w-full border-[#333] text-white hover:bg-[#222] hover:border-[#444]"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Sign in with GitHub
                </Button>
              </SignInButton>
            </SignedOut>
          </div>

          <p className="text-center text-sm text-gray-400">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-white"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-white"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
