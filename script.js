const studentNames = [
    "demo",
    "ABISHEK S",
    "AKASH KUMAR",
    "ARAVIND",
    "ARUN",
    "ASFAR UMAR",
    "BALA SANKAR S",
    "BARANI B",
    "BAVISHA S",
    "BOOBALAKRISHNAN P",
    "BOOPALAN S",
    "DARSINI C M",
    "DEEPIKA A M",
    "DEEPIKA V",
    "DEVADHARSHINI S",
    "DHANUSH K",
    "DHARSHAN M",
    "ENIYAVAN R",
    "GAYATHRI R",
    "GAYATHRI S",
    "GOBIKRISHNA P",
    "GOKUL K",
    "GOKULAKANNAN S V",
    "GOWRI SHANKAR K",
    "HARSAN M",
    "HEPHZIBAH A",
    "KABILAN K",
    "KAMAL RAJ N Y",
    "KAVYA SRI A",
    "KRISHNA T",
    "LIKITHA R",
    "MADHU SHREE U",
    "MAHALINGESH J",
    "MATHEW FERNAND I",
    "MOHAMMED HABEEB S",
    "MOHANKUMAR P",
    "NAVEEN K",
    "NAVEEN RAJ V",
    "NOORUL BASHRI U",
    "PRATHISHA S",
    "PRIYADHARSHINI B",
    "RAMANUJAM R T",
    "RAMYA S",
    "RISHI A",
    "RITHIKA K",
    "SAKTHIVEL S",
    "SAMUEL JEBARAJ W",
    "SIVASUPRIYA A",
    "SOWMIYA S",
    "SREE ADVAITHA M",
    "SREEVATHSAN K G",
    "SRI VENKATESAN P",
    "SUBHASRILEKHA K",
    "SUDHARSAN P",
    "SWARNA LATHA G",
    "SWETHA C",
    "THAILAMBALNAYAKI V",
    "UDHAYAKUMAR M",
    "VARSHA S",
    "VARSHINI P",
    "VARUN K",
    "VIGNESH R",
    "YASWANTH V",
    "DHANRAJ S",
    "DINESH",
    "SHESHATHRI",
    "ILANGO",
    "MADHAN KUMAR"
    // Add the rest of the student names here
];

let leave = [];
let onDuty = [];
let Late = [];

function recordAttendance(type) {
    if (type === "Leave") {
        document.getElementById("leave-input").style.display = "block";
        document.getElementById("on-duty-input").style.display = "none";
        document.getElementById("LateComers-input").style.display = "none";
    } else if (type === "On-duty") {
        document.getElementById("on-duty-input").style.display = "block";
        document.getElementById("leave-input").style.display = "none";
        document.getElementById("LateComers-input").style.display = "none";
    } else if (type === "LateComers") {
        document.getElementById("LateComers-input").style.display = "block";
        document.getElementById("on-duty-input").style.display = "none";
        document.getElementById("leave-input").style.display = "none";
    }
    
    updateMessage(`Recording ${type}...`);
}

function recordLeave() {
    const input = document.getElementById("leave-input-field").value;
    const indices = input.split(" ").map(Number);
    leave = indices.filter(index => index >= 0 && index < studentNames.length);
    updateMessage(`Leave recorded for indices: ${leave.join(", ")}`);
    document.getElementById("leave-input").style.display = "none";
}

function recordOnDuty() {
    const input = document.getElementById("on-duty-input-field").value;
    const indices = input.split(" ").map(Number);
    onDuty = indices.filter(index => index >= 0 && index < studentNames.length);
    updateMessage(`On Duty recorded for indices: ${onDuty.join(", ")}`);
    document.getElementById("on-duty-input").style.display = "none";  
}

function recordLateComers() {
    const input = document.getElementById("LateComers-input-field").value;
    const indices = input.split(" ").map(Number);
    Late = indices.filter(index => index >= 0 && index < studentNames.length);
    updateMessage(`Late Comers recorded for indices: ${Late.join(", ")}`);
    document.getElementById("LateComers-input").style.display = "none";
}

function printAttendance() {
    const presentCount = studentNames.length - leave.length;
    const absentCount = leave.length;
    const attendancePercentage = (presentCount / studentNames.length) * 100;

    const now = new Date();
    let greeting = "Good Morning";
    if (now.getHours() >= 12) {
        greeting = "Good Afternoon";
    }

    let report = `
${greeting} Sir, Today's Attendance

Date: ${now.toLocaleDateString()}
Class: III- B.Tech (CSBS)
Total Strength: ${studentNames.length}
No. of Present: ${presentCount}
No. of Absent: ${absentCount}

Absentees:
`;
    for (let i = 0; i < leave.length; i++) {
        const index = leave[i];
        report += `\t${i + 1}. ${studentNames[index]}\n`;
    }
    report += "\nOn-duty Students:\n";
    for (let i = 0; i < onDuty.length; i++) {
        const index = onDuty[i];
        report += `\t${i + 1}. ${studentNames[index]}\n`;
    }
    report += "\nLate Comers:\n";
    for (let i = 0; i < Late.length; i++) {
        const index = Late[i];
        report += `\t${i + 1}. ${studentNames[index]}\n`;
    }
    report += `
Percentage: ${attendancePercentage.toFixed(2)}%

Thank you Sir.`;

    document.getElementById("attendance-report").innerText = report;
}


function updateMessage(message) {
    document.getElementById("message").innerText = message;
}

function copyReport() {
    const reportText = document.getElementById("attendance-report").innerText;
    navigator.clipboard.writeText(reportText);
    alert("Attendance report copied to clipboard!");
}

function shareOnWhatsApp() {
    const reportText = document.getElementById("attendance-report").innerText;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(reportText)}`;
    window.open(whatsappURL, "_blank");
}

function toggleHelp() {
    const helpText = document.getElementById("help-text");
    const leaveInput = document.getElementById("leave-input");
    const onDutyInput = document.getElementById("on-duty-input");
    const LateComersInput = document.getElementById("LateComers-input");

    if (helpText.style.display === "none") {
        helpText.style.display = "block";
        leaveInput.style.display = "none";
        onDutyInput.style.display = "none";
        LateComersInput.style.display = "none";
    } else {
        helpText.style.display = "none";
    }
}
