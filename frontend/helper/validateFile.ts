export const validateFile = (file: File): string => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

  if (!allowedTypes.includes(file.type)) {
    return "Only JPG, JPEG, and PNG files are allowed";
  }

  if (file.size > 5 * 1024 * 1024) {
    return "File size must be less than 5MB";
  }

  return "";
};
