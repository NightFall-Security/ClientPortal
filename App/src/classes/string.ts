export class Str {

    /**
     * Check if a string is null or empty.
     * @param s 
     * @returns 
     */
    public static isNullOrEmpty = (s:(string | null)) => typeof(s) !== "string" || s.trim() == '';
}