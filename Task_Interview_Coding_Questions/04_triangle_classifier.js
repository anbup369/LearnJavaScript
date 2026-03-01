// ✅ Triangle Classifier:


// Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.


console.log("Triangle Classifier\n")
let sideA, sideB, sideC;
sideA = 11;
sideB = 12;
sideC = 10;

if (sideA == sideB && sideA == sideC && sideB == sideC) {
    console.log("Triangle is equilateral");
} else if (sideA == sideB || sideA == sideC || sideB == sideC) {
    console.log("Triangle is isosceles");
} else {
    console.log("Triangle is scalene");
}