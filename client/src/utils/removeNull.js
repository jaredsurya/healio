export function removeNull(data) {
  if (Array.isArray(data)) {
    return data.map(removeNull);
  }
  if (typeof data === "object" && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        removeNull(value)
      ])
    );
  }
  return data === null ? "" : data;
}