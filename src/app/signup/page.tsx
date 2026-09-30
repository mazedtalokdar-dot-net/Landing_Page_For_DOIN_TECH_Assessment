"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Terminal, Eye, EyeOff, Code2, ArrowLeft, Lock, Mail, User, Sparkles, CheckCircle2 } from "lucide-react";

const signupSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number"),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms & conditions",
  }),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      termsAccepted: true,
    },
  });

  const passwordValue = watch("password", "");

  const getPasswordStrength = () => {
    if (!passwordValue) return 0;
    let score = 0;
    if (passwordValue.length >= 8) score += 33;
    if (/[A-Z]/.test(passwordValue)) score += 33;
    if (/[0-9]/.test(passwordValue)) score += 34;
    return score;
  };

  const strength = getPasswordStrength();

  const onSubmit = async (data: SignupFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setIsSubmitting(false);
    setSuccessMsg(true);
    setTimeout(() => {
      router.push("/login");
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />

      {/* Back to Home Button */}
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/20">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-neutral-950">
              <Terminal className="h-5 w-5 text-indigo-400" />
            </div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">ByteSpace</span>
        </Link>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Create your free account
        </h2>
        <p className="text-sm text-neutral-400">
          Get 3 free cloud workspaces forever. No credit card required.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl py-8 px-6 sm:px-10 shadow-2xl backdrop-blur-xl space-y-6">
          {successMsg ? (
            <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-center space-y-3">
              <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">Account Created Successfully!</h3>
              <p className="text-xs text-neutral-300">Redirecting to login portal...</p>
            </div>
          ) : (
            <>
              {/* Social Signup */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => alert("GitHub Signup Demo - Redirecting...")}
                  className="flex items-center justify-center gap-2 rounded-xl bg-neutral-800 border border-neutral-700 py-2.5 px-4 text-xs font-semibold text-neutral-200 hover:bg-neutral-750 hover:text-white transition-colors"
                >
                  <Code2 className="h-4 w-4" />
                  <span>GitHub</span>
                </button>
                <button
                  type="button"
                  onClick={() => alert("Google Signup Demo - Redirecting...")}
                  className="flex items-center justify-center gap-2 rounded-xl bg-neutral-800 border border-neutral-700 py-2.5 px-4 text-xs font-semibold text-neutral-200 hover:bg-neutral-750 hover:text-white transition-colors"
                >
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  <span>Google</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="w-full border-t border-neutral-800" />
                <span className="bg-neutral-900 px-3 text-xs font-medium text-neutral-500 uppercase">
                  Or register with email
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="Abdul Mazed"
                      className="w-full rounded-xl bg-neutral-950 border border-neutral-800 pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-400 font-medium">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Work Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="abdul.mazed@company.com"
                      className="w-full rounded-xl bg-neutral-950 border border-neutral-800 pl-10 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 font-medium">{errors.email.message}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                      <Lock className="h-4 w-4" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="At least 8 characters"
                      className="w-full rounded-xl bg-neutral-950 border border-neutral-800 pl-10 pr-10 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-500 hover:text-neutral-300"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>

                  {/* Strength Bar */}
                  {passwordValue && (
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between items-center text-[10px] text-neutral-400">
                        <span>Password Strength:</span>
                        <span className="font-semibold text-neutral-200">
                          {strength < 66 ? "Weak" : strength < 100 ? "Good" : "Strong"}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-neutral-950 rounded-full overflow-hidden border border-neutral-800">
                        <div
                          className={`h-full transition-all duration-300 ${
                            strength < 66
                              ? "bg-rose-500"
                              : strength < 100
                              ? "bg-amber-500"
                              : "bg-emerald-500"
                          }`}
                          style={{ width: `${strength}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {errors.password && (
                    <p className="mt-1 text-xs text-rose-400 font-medium">{errors.password.message}</p>
                  )}
                </div>

                {/* Terms Acceptance */}
                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    {...register("termsAccepted")}
                    className="mt-0.5 h-4 w-4 rounded bg-neutral-950 border-neutral-800 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="terms" className="ml-2 text-xs text-neutral-300 leading-tight">
                    I agree to the{" "}
                    <a href="#" className="text-indigo-400 underline">Terms of Service</a> and{" "}
                    <a href="#" className="text-indigo-400 underline">Privacy Policy</a>.
                  </label>
                </div>
                {errors.termsAccepted && (
                  <p className="text-xs text-rose-400 font-medium">{errors.termsAccepted.message}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Creating Account..." : "Create Account & Start Coding"}
                </button>
              </form>
            </>
          )}

          <p className="text-center text-xs text-neutral-400">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-indigo-400 hover:text-indigo-300">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
