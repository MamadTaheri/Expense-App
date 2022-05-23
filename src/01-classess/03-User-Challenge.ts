/**
 * -----------------------------
 * Challenge 1: Classes
 * -----------------------------
 * 1. Create a User class.
 * 2. Add a firstName, lastName, and email property.
 * 3. Add a get to return fullName.
 * 4. Add a method to check if your email param matches the user's current email.
 */

export class User {
    _firstName: string;
    _lastName: string;
    _email: string;
    
    constructor(firstName: string, lastName: string, email: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
    }

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    doesEmailMatch(email: string): boolean {
        return this._email === email;
    }
    
}