interface Palindrome { 
    generatePalindrome(): string;
}

class SuperPalindrome implements Palindrome{

    constructor(private currentMessage: string) {}

    generatePalindrome(): string { 
        return `${this.currentMessage.substring(0, this.currentMessage.length - 1)}${this.currentMessage.split('').reverse().join('')}`
    }
}

const customPalindrome = new SuperPalindrome('abcd');
console.log(customPalindrome.generatePalindrome());