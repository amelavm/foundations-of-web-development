function greet2(name: string, age?: number): string {
    const actualAge: number = age ?? 18;
    return `Hello, ${name}. You are ${actualAge} years old.`;
}

const filterOdds = (numbers: number[]): number[] => numbers.filter(num => num % 2 !== 0);

interface User {
    id: number;
    name: string;
    email: string;
}

const displayUser = (user: User): void => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
};

function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function capitalizeWords(sentence: string): string {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Example Usage
console.log(greet("Alice"));
console.log(filterOdds([1, 2, 3, 4, 5]));
const user2: User = { id: 1, name: "John Doe", email: "john.doe@example.com" };
displayUser(user2);
console.log(isPrime(7));
console.log(capitalizeWords("hello world from typescript"));