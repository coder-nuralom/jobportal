export const validatePassword = (password: string) => {
  if (!password.trim()) {
    return "Password is required.";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }

  return "";
};
