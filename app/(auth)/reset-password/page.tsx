"use client"

import { useRouter } from "next/navigation"
import { useForm } from "@tanstack/react-form"
import { supabase } from "@/lib/supabase-client"
import { Button } from "@/components/ui/button"
import { InputField } from "@/components/ui/input"
import Image from "next/image"
import Logo from "@/public/logo.png"
import { toast } from "sonner"
import { Title } from "@/components/ui/title"
import { Subtitle } from "@/components/ui/subtitle"

export default function ResetPasswordPage() {
  const router = useRouter()

  const form = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: async ({ value, formApi }) => {
      const { error } = await supabase.auth.updateUser({ password: value.newPassword })

      if (error) {
        toast.error("Password update failed", { description: error.message })
      } else {
        toast.success("Password updated successfully")
        formApi.reset()
        router.replace("/login")
      }
    },
  })

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 flex flex-col items-center justify-center px-4 py-20 text-slate-900 dark:text-white">
      <Image src={Logo} alt="FreshFold Logo" width={80} height={80} />
      <Title type="sm" text="Reset Password" />
      <Subtitle text="Enter and confirm your new password" />

      <form.Field
        name="newPassword"
        validators={{
          onChange: ({ value }) => {
            if (!value) return "Please enter a value."
            if (value.length < 6) return "Password must be at least 6 characters"
          },
        }}>
        {field => (
          <div className="mb-4 w-full max-w-md">
            <InputField
              label="New Password"
              type="password"
              placeholder="New Password"
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.[0] && <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>}
          </div>
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
          <div className="mb-6 w-full max-w-md">
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={field.state.value}
              onChange={e => field.handleChange(e.target.value)}
            />
            {field.state.meta.errors?.[0] && <p className="text-red-500 text-sm mt-1">{field.state.meta.errors[0]}</p>}
          </div>
        )}
      </form.Field>

      <form.Subscribe>
        {formState => (
          <Button onClick={form.handleSubmit} disabled={!formState.canSubmit || formState.isSubmitting} className="w-full max-w-md">
            {formState.isSubmitting ? "Updating..." : "Update Password"}
          </Button>
        )}
      </form.Subscribe>
    </main>
  )
}
