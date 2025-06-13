"use client"

import Image from "next/image"
import Link from "next/link"
import { Title } from "@/components/ui/title"
import { Subtitle } from "@/components/ui/subtitle"
import { Button } from "@/components/ui/button"
import Success from "@/public/success-checkmark.png"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { supabase } from "@/lib/supabase-client"
import { toast } from "sonner"

export default function EmailConfirmationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const code = searchParams.get("code")

  useEffect(() => {
    const handleAuthCallback = async () => {
      if (!code) return
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        toast.error("Authentication failed", { description: error.message })
        router.replace("/login")
      } else {
        toast.success("Successfully signed in!")
        router.replace("/dashboard")
      }
    }

    handleAuthCallback()
  }, [router, code])
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900 px-6 text-center">
      {/* Success Icon */}
      <Image src={Success} alt="FreshFold" className="w-24 h-24" />

      {/* Title */}
      <Title type="sm" text="Email Confirmed" />

      {/* Message */}
      <Subtitle text="Your email has been successfully verified. You can now log in to your account and start placing orders." />

      {/* Continue Button */}
      <Link href="/login">
        <Button variant="default" className="mt-4">
          Continue to Login
        </Button>
      </Link>
    </main>
  )
}
