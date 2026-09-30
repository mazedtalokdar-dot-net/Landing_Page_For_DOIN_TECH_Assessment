"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { BookOpen, Eye, EyeOff, Code2, ArrowLeft, Lock, Mail, User, Sparkles, CheckCircle2 } from "lucide-react";

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
    <div className="min-h-screen bg-[#0F52FF] text-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-[#CAFF00]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#CAFF00] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CAFF00] text-[#0F52FF] shadow-lg">
            <BookOpen className="h-7 w-7 stroke-[2.5]" />
          </div>
          <span className="text-3xl font-black tracking-tight text-white">
            Byte<span className="text-[#CAFF00]">Space</span>
          </span>
        </Link>

        <h2 className="text-2xl sm:text-3xl font-black text-white">
          Create Free Student Account
        </h2>
        <p className="text-sm text-blue-100 font-medium">
          Start learning from 500+ top rated courses today
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-slate-900 space-y-6">
          {successMsg ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto" />
              <h3 className="text-lg font-extrabold text-slate-900">Registration Successful!</h3>
              <p className="text-xs text-slate-600 font-medium">Redirecting to login portal...</p>
            </div>
          ) : (
            <>
              {/* Social Signup */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => alert("GitHub Signup")}
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200 py-2.5 px-4 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <Code2 className="h-4 w-4 text-slate-800" />
                  <span>GitHub</span>
                </button>
                <button
                  type="button"
                  onClick={() => alert("Google Signup")}
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 border border-slate-200 py-2.5 px-4 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                >
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  <span>Google</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="w-full border-t border-slate-200" />
                <span className="bg-white px-3 text-xs font-bold text-slate-400 uppercase">
                  Or register with email
                </span>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="Abdul Mazed"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0F52FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 font-medium transition-colors"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-500 font-bold">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="student@bytespace.com"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 pl-10 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0F52FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 font-medium transition-colors"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-500 font-bold">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Lock className="h-4 w-4" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="At least 8 characters"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 pl-10 pr-10 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#0F52FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 font-medium transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>

                  {passwordValue && (
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                        <span>Strength:</span>
                        <span className="text-[#0F52FF]">
                          {strength < 66 ? "Weak" : strength < 100 ? "Good" : "Strong"}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                        <div
                          className={`h-full transition-all duration-300 ${
                            strength < 66
                              ? "bg-rose-500"
                              : strength < 100
                              ? "bg-amber-500"
                              : "bg-[#0F52FF]"
                          }`}
                          style={{ width: `${strength}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {errors.password && (
                    <p className="mt-1 text-xs text-rose-500 font-bold">{errors.password.message}</p>
                  )}
                </div>

                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    {...register("termsAccepted")}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#0F52FF] focus:ring-[#0F52FF]"
                  />
                  <label htmlFor="terms" className="ml-2 text-xs font-bold text-slate-600 leading-tight">
                    I agree to ByteSpace <a href="#" className="text-[#0F52FF] underline">Terms of Service</a> & <a href="#" className="text-[#0F52FF] underline">Privacy Policy</a>.
                  </label>
                </div>
                {errors.termsAccepted && (
                  <p className="text-xs text-rose-500 font-bold">{errors.termsAccepted.message}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-[#0F52FF] py-3.5 px-4 text-sm font-extrabold text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Creating Account..." : "Create Account & Start Learning"}
                </button>
              </form>
            </>
          )}

          <p className="text-center text-xs font-semibold text-slate-500">
            Already have an account?{" "}
            <Link href="/login" className="font-extrabold text-[#0F52FF] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
