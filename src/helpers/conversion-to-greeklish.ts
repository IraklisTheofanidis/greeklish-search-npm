import { GreekLishMap } from '../constants/greeklish-map';

/**
 * Converts a string to its Greeklish equivalent using a predefined mapping.
 * 
 * @param {string} word - The input string to convert.
 * @returns {string} - The Greeklish equivalent of the input string.
 */

export function conversionToGreekLish(word: string): string {
    const array = word.split('');
    const sanitizedArray = array.map(letter => GreekLishMap[letter.toLowerCase()] ?? '');
    return sanitizedArray.join('');
};
