"use client"

import { useForm } from "@tanstack/react-form"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import { supabase } from "@/lib/supabase-client"

import Logo from "@/public/logo.png"
import { Button } from "@/components/ui/button"
import { InputField } from "@/components/ui/input"
import { Title } from "@/components/ui/title"
import { Subtitle } from "@/components/ui/subtitle"

export default function ForgotPasswordPage() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value }) => {
      const { error } = await supabase.auth.resetPasswordForEmail(value.email, {
        redirectTo: `${window.location.origin}/reset-password`, // Adjust as needed for deep linking
      })

      if (!error) {
        toast.success("Password reset link sent", {
          description: "Check your email inbox.",
        })
      } else {
        toast.error("Something went wrong!", {
          description: error.message,
        })
      }
    },
  })

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <Image src={Logo} alt="FreshFold Logo" width={80} height={80} />
        </div>

        <Title type="sm" text="Forgot Password" />
        <Subtitle text="Enter your email to reset your password" />

        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Email is required"
                if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format"
              },
            }}>
            {field => (
              <InputField
                label="Email"
                type="email"
                placeholder="Email"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          </form.Field>

          <form.Subscribe>
            {formState => (
              <Button type="submit" className="w-full" onClick={form.handleSubmit} disabled={!formState.canSubmit || formState.isSubmitting}>
                {formState.isSubmitting ? "Sending..." : "Send Reset Email"}
              </Button>
            )}
          </form.Subscribe>
        </form>

        <div className="text-sm text-blue-500 space-y-1 mt-4 text-center">
          <p>
            <Link href="/signup" className="hover:underline">
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
          <p>
            <Link href="/login" className="hover:underline">
              Already have an account? Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
