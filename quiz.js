function submitQuiz() {

    let score = 0;
    let total = 5;

    let resultsHTML = "";

    // Q1
    let q1 = document.getElementById("q1").value.toLowerCase();
    if (q1 === "malicious") {
        score++;
        resultsHTML += "<p style='color:green;'>Q1 Correct</p>";
    } else {
        resultsHTML += "<p style='color:red;'>Q1 Incorrect (Answer: malicious)</p>";
    }

    // Q2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "b") {
        score++;
        resultsHTML += "<p style='color:green;'>Q2 Correct</p>";
    } else {
        resultsHTML += "<p style='color:red;'>Q2 Incorrect (Answer: Virus)</p>";
    }

    // Q3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "b") {
        score++;
        resultsHTML += "<p style='color:green;'>Q3 Correct</p>";
    } else {
        resultsHTML += "<p style='color:red;'>Q3 Incorrect (Answer: Pretending to be someone else)</p>";
    }

    // Q4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "b") {
        score++;
        resultsHTML += "<p style='color:green;'>Q4 Correct</p>";
    } else {
        resultsHTML += "<p style='color:red;'>Q4 Incorrect (Answer: Group of infected computers)</p>";
    }

    // Q5
    let q5 = document.querySelectorAll('input[name="q5"]:checked');
    let answers = Array.from(q5).map(el => el.value);

    if (answers.includes("virus") && answers.includes("worm") && !answers.includes("vpn")) {
        score++;
        resultsHTML += "<p style='color:green;'>Q5 Correct</p>";
    } else {
        resultsHTML += "<p style='color:red;'>Q5 Incorrect (Answers: Virus & Worm)</p>";
    }

    let percent = (score / total) * 100;

    let finalResult = percent >= 70 ? "PASS" : "FAIL";

    document.getElementById("results").innerHTML = `
        <h2>Result: ${finalResult}</h2>
        <h3>Score: ${score}/${total} (${percent}%)</h3>
        ${resultsHTML}
    `;
}
