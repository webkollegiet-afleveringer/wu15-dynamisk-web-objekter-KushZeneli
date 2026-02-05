// Array af studerende
let students = [
    {
        name: "Sofie",
        age: 25,
        course: "Webudvikler"
    },
    {
        name: "Lukas",
        age: 22,
        course: "Mediegrafiker"
    },
    {
        name: "Emil",
        age: 28,
        course: "Teknisk designer"
    }
];

// Hent div'en fra HTML
let studentListDiv = document.querySelector(".student-list");

// Gennemgå students-arrayet med forEach
students.forEach(student => {
    // Opret en ny div til hver studerende
    let studentDiv = document.createElement("div");
    
    // Tilføj klassen "student"
    studentDiv.classList.add("student");
    
    // Opret h2 element for navn
    let studentHeadline = document.createElement("h2");
    studentHeadline.textContent = student.name;
    
    // Opret p element for alder og uddannelse
    let studentInfo = document.createElement("p");
    studentInfo.textContent = `Alder: ${student.age}, Uddannelse: ${student.course}`;
    
    // Tilføj h2 og p til studentDiv
    studentDiv.append(studentHeadline, studentInfo);
    
    // Tilføj studentDiv til studentListDiv
    studentListDiv.appendChild(studentDiv);
});
