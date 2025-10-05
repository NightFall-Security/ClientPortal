export class Input {
    /**
     * Checking max len value on a input.
     * @param text 
     * @param length 
     * @returns 
     */
    static checkMaxLen = (text:string, length:number):boolean => text.length < length;


    /**
     * Checking payload len.
     * @param min 
     * @param max 
     * @param payload 
     * @returns 
     */
    public static checkLen = (min:number, max:number, payload:string):boolean => payload.length > min && payload.length < max;

    /**
     * Check for xss injections
     * @param input 
     * @returns 
     */
    static detectXSS(input: string): boolean {
        const pattern = /<script.*?>.*?<\/script>|javascript:|on\w+=".*?"/gi;
        return pattern.test(input);
    }

    /**
     * Check for sql injections.
     * @param input 
     * @returns 
     */
    static detectSQLInjection(input: string): boolean {
        const pattern = /('|--|;|\/\*|\*\/|xp_|exec|union|select|insert|delete|update|drop|alter)/i;
        return pattern.test(input);
    }

    /**
     * Check for a malicious payload.
     * @param payload 
     * @returns 
     */
    static checkForMaliciousPayload = (...payload:Array<string>):boolean => {
        for(let i = 0; i < payload.length; i++)
            if(this.detectSQLInjection(payload[i]) || this.detectXSS(payload[i]))
                return true;

        return false;
    };

    /**
     * Sanitizing input values preventing SQL injections.
     * @param input 
     * @returns 
     */
    static sanitize(input: string): string {
        // Protection contre les injections XSS
        const sanitizedInput = input.replace(/<[^>]*>?/gm, ''); // Supprimer toutes les balises HTML
    
        // Protection contre les injections SQL (échappement des caractères dangereux)
        const sqlSafeInput = sanitizedInput
            .replace(/\\/g, "\\\\")
            .replace(/'/g, "''")
            .replace(/"/g, '\\"')
            .replace(/\x00/g, "\\0")
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\x1a/g, "\\Z");
    
        return sqlSafeInput;
    }
}