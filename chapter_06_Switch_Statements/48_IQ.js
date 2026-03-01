// The 'switch(true)' Hack
// -----------------------
// Usually, 'switch' looks for exact value matches. 
// But by switching on literally 'true', we force the switch statement to 
// evaluate logical expressions (like >= 95) instead of checking strict equality!
// It's an interesting alternative to a long if-else if chain.

let testScore = 85;

switch (true) {
    case (testScore >= 95):
        console.log("Outstanding — Top performer");
        break;
    case (testScore >= 85):
        console.log("Excellent — Above expectations");
        break;
    case (testScore >= 70):
        console.log("Good — Meets expectations");
        break;
    case (testScore >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory — Requires training");
}