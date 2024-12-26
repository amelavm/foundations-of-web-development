var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base Class: LibraryAccount
var LibraryAccount = /** @class */ (function () {
    function LibraryAccount(accountId, owner) {
        this.accountId = accountId;
        this.owner = owner;
        this.booksBorrowed = 0; // Default value
    }
    LibraryAccount.prototype.borrowBook = function (count) {
        this.booksBorrowed += count;
        console.log("".concat(this.owner, " borrowed ").concat(count, " book(s). Total: ").concat(this.booksBorrowed));
    };
    LibraryAccount.prototype.returnBook = function (count) {
        this.booksBorrowed -= count;
        console.log("".concat(this.owner, " returned ").concat(count, " book(s). Total: ").concat(this.booksBorrowed));
    };
    LibraryAccount.prototype.getBorrowedBooks = function () {
        return this.booksBorrowed;
    };
    LibraryAccount.prototype.updatePenalty = function (amount) {
        console.log("Penalty updated by ".concat(amount, "."));
    };
    return LibraryAccount;
}());
// Subclass: StudentAccount
var StudentAccount = /** @class */ (function (_super) {
    __extends(StudentAccount, _super);
    function StudentAccount(accountId, owner, grade) {
        var _this = _super.call(this, accountId, owner) || this; // Call the parent class constructor
        _this.grade = grade;
        return _this;
    }
    StudentAccount.prototype.borrowBook = function (count) {
        if (this.booksBorrowed + count > 10) {
            console.log("Cannot borrow ".concat(count, " books. Borrowing limit exceeded!"));
        }
        else {
            _super.prototype.borrowBook.call(this, count);
        }
    };
    StudentAccount.prototype.showGrade = function () {
        console.log("".concat(this.owner, "'s grade is ").concat(this.grade, "."));
    };
    return StudentAccount;
}(LibraryAccount));
// Testing the Implementation
// Create a StudentAccount instance
var studentAccount = new StudentAccount("1234", "John", "A");
// Borrow books
studentAccount.borrowBook(4); // Should succeed
studentAccount.borrowBook(7); // Should log a warning (limit exceeded)
// Return books
studentAccount.returnBook(2); // Should succeed
// Display total borrowed books (using protected method indirectly)
console.log("Total borrowed books: ".concat(studentAccount['booksBorrowed'])); // Accessing the protected property
// Display student's grade
studentAccount.showGrade(); // Should log the grade
