/**
 * Form validators
 */

export const isEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isRequired = (value) =>
  value !== undefined && value !== null && String(value).trim().length > 0;

export const minLength = (min) => (value) =>
  String(value).length >= min;

export const maxLength = (max) => (value) =>
  String(value).length <= max;

export const isPhone = (value) =>
  /^\+?[1-9]\d{6,14}$/.test(value.replace(/[\s\-()]/g, ""));

export const isStrongPassword = (value) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);

/**
 * Validate an entire form object against a rules map.
 * @param {object} data
 * @param {object} rules - { field: [{ validate: fn, message: string }] }
 * @returns {{ isValid: boolean, errors: object }}
 */
export const validateForm = (data, rules) => {
  const errors = {};
  for (const [field, fieldRules] of Object.entries(rules)) {
    for (const rule of fieldRules) {
      if (!rule.validate(data[field])) {
        errors[field] = rule.message;
        break;
      }
    }
  }
  return { isValid: Object.keys(errors).length === 0, errors };
};
