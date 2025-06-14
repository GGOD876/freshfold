"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "@tanstack/react-form"
import { supabase } from "@/lib/supabase-client"
import { Button } from "@/components/ui/button"
import { InputField } from "@/components/ui/input"
import Image from "next/image"
import Logo from "@/public/logo.png"
import { toast } from "sonner"
import { Title } from "@/components/ui/title"
import { Subtitle } from "@/components/ui/subtitle"
import { useEffect } from "react"

export default function ResetPasswordPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const code = searchParams.get("code")

  useEffect(() => {
    const handleAuthCallback = async () => {
      if (!code) return
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.log(error.message)
        toast.error("Authentication failed", {
          description: error.message,
          duration: 5000,
          onAutoClose: () => router.replace("/login"),
          onDismiss: () => router.replace("/login"),
        })
      }
    }

    handleAuthCallback()
  }, [router, code])
  const form = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: async ({ value }) => {
      const { error } = await supabase.auth.updateUser({ password: value.newPassword })

      if (error) {
        toast.error("Password update failed", { description: error.message })
      } else {
        form.reset()
        toast.success("Password updated successfully", {
          duration: 5000,
          onAutoClose: () => router.replace("/login"),
          onDismiss: () => router.replace("/login"),
        })
      }
    },
  })

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 flex flex-col items-center justify-center px-4 py-20 text-slate-900 dark:text-white">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <Image src={Logo} alt="FreshFold" className="w-24 h-24" />
        </div>

        <Title type="sm" text="Reset Password" />

        <Subtitle text="Enter and confirm your new password" />

        <form
          className="space-y-4"
          onSubmit={e => {
            e.preventDefault()
            form.handleSubmit()
          }}>
          <form.Field
            name="newPassword"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Please enter a value."
                if (value.length < 6) return "Password must be at least 6 characters"
              },
            }}>
            {field => (
              <InputField
                label="New Password"
                type="password"
                placeholder="New Password"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          </form.Field>

          <form.Field
            name="confirmPassword"
            validators={{
              onChange: ({ value, fieldApi }) => {
                if (!value) return "Please enter a value."
                if (value !== fieldApi.form.state.values.newPassword) return "Passwords do not match"
              },
            }}>
            {field => (
              <InputField
                label="Confirm Password"
                type="password"
                placeholder="Confirm Password"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                error={field.state.meta.errors?.[0]}
              />
            )}
          </form.Field>

          <form.Subscribe>
            {formState => (
              <Button type="submit" disabled={!formState.canSubmit || formState.isSubmitting} className="w-full max-w-md">
                {formState.isSubmitting ? "Updating..." : "Update Password"}
              </Button>
            )}
          </form.Subscribe>
        </form>
      </div>
    </main>
  )
}
