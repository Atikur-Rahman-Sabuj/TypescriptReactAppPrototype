//required validator for form input
export const required = (value) => (value || typeof value === "number" ? undefined : "This field is required");
