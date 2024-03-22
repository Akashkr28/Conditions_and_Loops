function gradeStudents(marks) {
    if (marks > 90) {
        return "A Grade";
    } else if (marks >= 70 && marks <= 90) {
        return "B Grade";
    } else if (marks >= 50 && marks < 70) {
        return "C Grade";
    } else {
        return "F Grade";
    }
}

// Example usage:
console.log(gradeStudents(95));  // Output: A Grade
console.log(gradeStudents(80));  // Output: B Grade
console.log(gradeStudents(60));  // Output: C Grade
console.log(gradeStudents(40));  // Output: F Grade
