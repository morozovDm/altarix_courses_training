interface Palindrome { 
    generatePalindrome(): string;
}

class SuperPalindrome implements Palindrome{
    private currentMessage: string;

    constructor(message: string) {
        this.currentMessage = message;
     }

    generatePalindrome(): string { 
        return "".concat(this.currentMessage.substring(0, this.currentMessage.length - 1), this.currentMessage.split('').reverse().join(''))
    }
}

let customPalindrome = new SuperPalindrome('abcd');
console.log(customPalindrome.generatePalindrome());
