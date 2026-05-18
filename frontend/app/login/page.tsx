"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, AlertCircle, Loader2 } from "lucide-react";

// Form data type
interface FormDataState {
  email: string;
  password: string;
  rememberMe: boolean;
}

// Error object type
interface FormErrors {
  email?: string;
  password?: string;
  submit?: string;
}

// UI state type
interface FormUiState {
  loading: boolean;
  showPassword: boolean;
  success: boolean;
  errors: FormErrors;
}

const Page = () => {
  // User input data
  const [formData, setFormData] = useState<FormDataState>({
    email: "",
    password: "",
    rememberMe: false,
  });

  // UI related states
  const [formState, setFormState] = useState<FormUiState>({
    loading: false,
    showPassword: false,
    success: false,
    errors: {},
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Remove error while typing
    const fieldName = name as keyof FormErrors;

    if (formState.errors[fieldName]) {
      setFormState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          [fieldName]: "",
        },
      }));
    }
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return "Email is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const validatePassword = (password: string): string => {
    if (!password.trim()) {
      return "Password is required.";
    }

    if (password.length < 6) {
      return "Password must be at least 6 characters.";
    }

    return "";
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    };

    // Remove empty errors
    Object.keys(errors).forEach((key) => {
      const errorKey = key as keyof FormErrors;

      if (!errors[errorKey]) {
        delete errors[errorKey];
      }
    });

    // Set errors
    setFormState((prev) => ({
      ...prev,
      errors,
    }));

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form first
    const isValid = validateForm();

    if (!isValid) return;

    // Start loading
    setFormState((prev) => ({
      ...prev,
      loading: true,
      errors: {},
    }));

    try {
      // Fake API delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form Submitted:", formData);

      // Success
      setFormState((prev) => ({
        ...prev,
        loading: false,
        success: true,
      }));
    } catch (error: any) {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        errors: {
          submit: error?.response?.data?.message || "Something went wrong. Please try again.",
        },
      }));
    }
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center px-4 py-15">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>

        {/* Submit Error */}
        {formState.errors.submit && (
          <div className="mb-5 rounded-lg bg-red-100 border border-red-300 px-4 py-3 text-red-700 text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            {formState.errors.submit}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-12 pr-4 py-3 rounded-lg border outline-none transition-all text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500
                  
                  ${formState.errors.email ? "border-red-500" : "border-gray-300"}
                `}
              />
            </div>

            {formState.errors.email && (
              <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {formState.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type={formState.showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-12 pr-12 py-3 rounded-lg border outline-none transition-all text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500
                  
                  ${formState.errors.password ? "border-red-500" : "border-gray-300"}
                `}
              />

              {/* Show / Hide Button */}
              <button
                type="button"
                onClick={() =>
                  setFormState((prev) => ({
                    ...prev,
                    showPassword: !prev.showPassword,
                  }))
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                {formState.showPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>

            {formState.errors.password && (
              <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {formState.errors.password}
              </p>
            )}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 cursor-pointer"
              />

              <span>Remember me</span>
            </label>

            <Link href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formState.loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-95 transition-opacity disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
          >
            {formState.loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline font-medium">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
