import Image from "next/image"
import Link from "next/link"
import { Title } from "@/components/ui/title"
import { Subtitle } from "@/components/ui/subtitle"
import { Button } from "@/components/ui/button"
import Success from "@/public/success-checkmark.png"

export default function EmailConfirmationPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-6 text-center">
      {/* Success Icon */}
      <Image src={Success} alt="FreshFold" className="w-24 h-24" />

      {/* Title */}
      <Title type="sm" text="Email Confirmed" />

      {/* Message */}
      <Subtitle text="Your email has been successfully verified. You can now log in to your account and start placing orders." />

      {/* Continue Button */}
      <Link href="/login" replace>
        <Button variant="default" className="mt-4">
          Continue to Login
        </Button>
      </Link>
    </main>
  )
}
