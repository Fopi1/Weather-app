export const generateAltText = (iconPath: string | undefined) => {
  if (!iconPath) {
    return "undefined";
  }
  const iconName = iconPath.split("/").pop()?.split(".")[0] || "icon";

  return iconName
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};
