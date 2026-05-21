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
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { validateEmail } from "@/helper/validateEmail";
import { validatePassword } from "@/helper/validatePassword";
import { validateFile } from "@/helper/validateFile";

type Role = "jobseeker" | "employer";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  role: Role;
  avatar: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
  role?: string;
  avatar?: string;
  submit?: string;
}

interface FormUiState {
  loading: boolean;
  showPassword: boolean;
  success: boolean;
  avatarPreview: string;
  errors: FormErrors;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    role: "" as Role,
    avatar: null,
  });

  const [formUiState, setFormUiState] = useState<FormUiState>({
    loading: false,
    showPassword: false,
    success: false,
    avatarPreview: "",
    errors: {},
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const fieldName = name as keyof FormErrors;

    if (formUiState.errors[fieldName]) {
      setFormUiState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          [fieldName]: "",
        },
      }));
    }
  };

  const handleRoleChange = (role: Role) => {
    setFormData((prev) => ({
      ...prev,
      role,
    }));

    if (formUiState.errors.role) {
      setFormUiState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          role: "",
        },
      }));
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const error = validateFile(file);

    if (error) {
      setFormUiState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          avatar: error,
        },
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      avatar: file,
    }));

    const reader = new FileReader();

    reader.onload = (event) => {
      setFormUiState((prev) => ({
        ...prev,
        avatarPreview: event.target?.result as string,
        errors: {
          ...prev.errors,
          avatar: "",
        },
      }));
    };

    reader.readAsDataURL(file);
  };

  const validateForm = () => {
    const errors: FormErrors = {
      fullName: formData.fullName.trim() ? "" : "Full name is required",
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      role: formData.role ? "" : "Please select a role",
    };

    const filteredErrors: FormErrors = {};

    Object.keys(errors).forEach((key) => {
      const errorKey = key as keyof FormErrors;

      if (errors[errorKey]) {
        filteredErrors[errorKey] = errors[errorKey];
      }
    });

    setFormUiState((prev) => ({
      ...prev,
      errors: filteredErrors,
    }));

    return Object.keys(filteredErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    setFormUiState((prev) => ({
      ...prev,
      loading: true,
    }));

    console.log(formData);
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center px-4 py-15">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-gray-100 p-4 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>

          <p className="text-gray-500 mt-2">
            Join thousands of professionals finding their dream jobs.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>

            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  formUiState.errors.fullName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            {formUiState.errors.fullName && (
              <p className="text-red-500 text-sm flex items-center mt-1">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formUiState.errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  formUiState.errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            {formUiState.errors.email && (
              <p className="text-red-500 text-sm flex items-center mt-1">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formUiState.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

              <input
                type={formUiState.showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a strong password"
                className={`w-full pl-10 pr-12 py-3 rounded-lg border ${
                  formUiState.errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />

              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                onClick={() =>
                  setFormUiState((prev) => ({
                    ...prev,
                    showPassword: !prev.showPassword,
                  }))
                }
              >
                {formUiState.showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {formUiState.errors.password && (
              <p className="text-red-500 text-sm flex items-center mt-1">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formUiState.errors.password}
              </p>
            )}
          </div>

          {/* Avatar Upload */}
          <div>
            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700 mb-2">
              Profile Picture (Optional)
            </label>

            <div className="flex items-center gap-x-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                {formUiState.avatarPreview ? (
                  <img
                    src={formUiState.avatarPreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-8 h-8 text-gray-400" />
                )}
              </div>

              <div className="flex-1">
                <input
                  type="file"
                  id="avatar"
                  accept=".jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleAvatarChange}
                />

                <label
                  htmlFor="avatar"
                  className="cursor-pointer bg-gray-100 rounded-lg px-4 py-2.5 flex items-center gap-x-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Photo</span>
                </label>

                <p className="text-xs text-gray-500 mt-1">JPG, JPEG, or PNG (max 5MB)</p>
              </div>
            </div>

            {formUiState.errors.avatar && (
              <p className="text-red-500 text-sm flex items-center mt-1">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formUiState.errors.avatar}
              </p>
            )}
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">I am a *</label>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleRoleChange("jobseeker")}
                type="button"
                className={`p-4 rounded-lg border-2 transition-all ${
                  formData.role === "jobseeker"
                    ? "border-blue-500 text-blue-700 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <UserCheck className="w-8 h-8 mx-auto mb-2" />

                <p className="font-medium">Job Seeker</p>

                <p className="text-xs text-gray-500">Looking for opportunities</p>
              </button>

              <button
                onClick={() => handleRoleChange("employer")}
                type="button"
                className={`p-4 rounded-lg border-2 transition-all ${
                  formData.role === "employer"
                    ? "border-blue-500 text-blue-700 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Building2 className="w-8 h-8 mx-auto mb-2" />

                <p className="font-medium">Employer</p>

                <p className="text-xs text-gray-500">Hiring Talent</p>
              </button>
            </div>

            {formUiState.errors.role && (
              <p className="text-red-500 text-sm flex items-center mt-1">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formUiState.errors.role}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={formUiState.loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-45 disabled:cursor-not-allowed"
          >
            {formUiState.loading ? "Creating Account..." : "Create Account"}
          </button>

          {formUiState.errors.submit && (
            <p className="text-red-500 text-sm flex items-center mt-1">
              <AlertCircle className="w-4 h-4 mr-1" />
              {formUiState.errors.submit}
            </p>
          )}

          <div className="text-center mt-8 text-sm text-gray-600">
            Already have an account?
            <Link href="/login" className="text-blue-600 hover:underline font-medium">
              {" "}
              Sign in here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
