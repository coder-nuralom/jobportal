"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Upload,
  Eye,
  EyeOff,
  UserCheck,
  Building2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  avater: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  role?: string;
  avater?: string;
  submit?: string;
}

interface FormUiState {
  loading: boolean;
  showPassword: boolean;
  success: boolean;
  errors: FormErrors;
}

const page = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    avater: null,
  });

  const [formState, setFormState] = useState<FormUiState>({
    loading: false,
    showPassword: false,
    success: false,
    errors: {},
  });

  const handleInputChange = () => {};
  const handleRoleChange = () => {};
  const handleAvaterChange = () => {};
  const validateEmail = () => {};
  const validatePassword = () => {};
  const validateForm = () => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center px-4 py-15">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p className="text-sm text-gray-600">
            Join thousands of professionals finding their dream jobs.
          </p>
        </div>

        <form action="" className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${formState.errors.fullName ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
              />
            </div>
            {formState.errors.fullName && (
              <p className="text-red-500 text-sm flex items-center mt-1">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formState.errors.fullName}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${formState.errors.fullName ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
              />
            </div>
            {formState.errors.fullName && (
              <p className="text-red-500 text-sm flex items-center mt-1">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formState.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-2">
              Password *
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a strong password"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${formState.errors.fullName ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                onClick={() =>
                  setFormState((prev) => ({ ...prev, showPassword: !prev.showPassword }))
                }
              >
                {formState.showPassword ? <EyeOff className="" /> : <Eye className="" />}
              </button>
            </div>
            {formState.errors.password && (
              <p className="text-red-500 text-sm flex items-center mt-1">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formState.errors.password}
              </p>
            )}
          </div>

          {/* Avatar Upload */}
        </form>
      </div>
    </div>
  );
};

export default page;
