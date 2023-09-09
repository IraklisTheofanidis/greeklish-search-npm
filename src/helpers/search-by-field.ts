import { conversionToGreekLish } from './conversion-to-greeklish';

/**
 * Searches for a sanitized term within a sanitized field.
 * 
 * @param {string} term - The search term.
 * @param {string} field - The field to search within.
 * @returns {boolean} - True if the term is found in the field, otherwise false.
 */

export function searchByField(term: string, field: string): boolean {
    const sanitizedTerm = conversionToGreekLish(term);
    const sanitizedField = conversionToGreekLish(field);
    return sanitizedField.includes(sanitizedTerm);
}