declare module 'mykad' {
    /**
     * Checks if a date is before another date, disregarding the year.
     * @param before The date to check.
     * @param max The date to compare against.
     * @returns True if `before` is earlier than `max`, false otherwise.
     */
    export function dateIsBefore(before: Date, max: Date): boolean;

    /**
     * Converts a year, month, and day code into a Date object.
     * Handles special cases like the year 1900 and February 29th.
     * @param year The year as a string (e.g., "00" for 2000).
     * @param month The month as a number (1-12).
     * @param day The day as a number (1-31).
     * @returns A Date object or NaN if the date is invalid.
     */
    export function codeToDate(year: string, month: number, day: number): Date | undefined;

    /**
     * Determines the gender based on the last digit of the MyKad number.
     * @param code The last digit of the MyKad number.
     * @returns "female" if the code is even, "male" if odd.
     */
    export function codeToGender(code: number): 'female' | 'male';

    /**
     * Extracts the parts of a MyKad number using a regex.
     * @param icNum The MyKad number as a string.
     * @returns An array of matched parts.
     * @throws An error if the MyKad number format is invalid.
     */
    export function extractParts(icNum: string): RegExpMatchArray;

    /**
     * Validates a MyKad number.
     * @param icNum The MyKad number as a string.
     * @returns True if the MyKad number is valid, false otherwise.
     */
    export function isValid(icNum: string): boolean;

    /**
     * Parses a MyKad number into its components.
     * @param icNum The MyKad number as a string.
     * @returns An object containing the birth date, birth place, and gender.
     */
    export function parse(icNum: string): {
        birthDate: Date | undefined;
        birthPlace: string;
        gender: 'female' | 'male';
    };

    /**
     * Formats a MyKad number into a standard format (e.g., "000000-00-0000").
     * @param icNum The MyKad number as a string.
     * @returns The formatted MyKad number.
     */
    export function format(icNum: string): string;

    /**
     * Removes formatting (hyphens) from a MyKad number.
     * @param icNum The MyKad number as a string.
     * @returns The unformatted MyKad number.
     */
    export function unformat(icNum: string): string;

    /**
     * Generates a random MyKad number.
     * @returns A randomly generated MyKad number.
     */
    export function generateRandom(): string;
}