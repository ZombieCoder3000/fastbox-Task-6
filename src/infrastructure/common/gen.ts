export function capitalize(str: string): string {
  const trimmed = str.trim();

  if (trimmed.includes(" ")) {
    return trimmed
      .toLowerCase()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}
