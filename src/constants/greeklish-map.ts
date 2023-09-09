import { EnglishGreekMatches } from "./english-greek-matches";
import { EnglishLetters } from "./english-letters";
import { GreekLetters } from "./greek-letters";

/**
 * An array mapping English letters to their Greek counterparts.
 * For example, 'a' maps to 'α', 'b' maps to 'β', etc.
 */

export const GreekLishMap = {
    ...GreekLetters.reduce((x, greekChar, index) => {
        return { ...x, [greekChar]: EnglishGreekMatches[index] }
    }, {} as Record<string, string>),
    ...EnglishLetters.reduce((x, englishLetter) => {
        return { ...x, [englishLetter]: englishLetter };
    }, {} as Record<string, string>)
};