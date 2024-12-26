class LibraryAccount {
    public accountId: string;
    public owner: string;
    private booksBorrowed: number;
    private penaltyAmount: number;

    constructor(accountId: string, owner: string) {
        this.accountId = accountId;
        this.owner = owner;
        this.booksBorrowed = 0; // Default value
        this.penaltyAmount = 0; // Default penalty amount
    }

    public borrowBook(count: number): void {
        if (this.booksBorrowed + count > 10) {
            console.log(`Cannot borrow ${count} books. Borrowing limit exceeded!`);
        } else {
            this.booksBorrowed += count;
            console.log(
                `${this.owner} borrowed ${count} book(s). Total books borrowed: ${this.booksBorrowed}`
            );
        }
    }

    public returnBook(count: number): void {
        if (count > this.booksBorrowed) {
            console.log(`Error: Cannot return more books than borrowed.`);
        } else {
            this.booksBorrowed -= count;
            console.log(
                `${this.owner} returned ${count} book(s). Total books borrowed: ${this.booksBorrowed}`
            );
        }
    }

    public showPenalty(): void {
        console.log(`Total penalty amount for ${this.owner} is $${this.penaltyAmount}.`);
    }

    private updatePenalty(amount: number): void {
        this.penaltyAmount += amount;
        console.log(`Penalty updated. Current penalty: $${this.penaltyAmount}.`);
    }

    public applyPenaltyForLateReturn(): void {
        this.updatePenalty(5); // Increase penalty by $5 for late return
        console.log(`${this.owner} incurred a penalty of $5 for late book return.`);
    }
}

// Create an object of the LibraryAccount class
const myLibraryAccount = new LibraryAccount("1234", "John");

// Borrow books
myLibraryAccount.borrowBook(4); // Should succeed
myLibraryAccount.borrowBook(7); // Should log a warning (limit exceeded)

// Return books
myLibraryAccount.returnBook(2); // Should succeed
myLibraryAccount.returnBook(5); // Should log an error (cannot return more than borrowed)

// Apply penalty for late return
myLibraryAccount.applyPenaltyForLateReturn(); // Adds $5 penalty

// Show current penalty
myLibraryAccount.showPenalty();

