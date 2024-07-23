const studentNames = {
    1: "ABISHEK S",
    2: "AKASH KUMAR",
    3: "ARAVIND",
    4: "ARUN",
    5: "ASFAR UMAR",
    6: "BALA SANKAR S",
    7: "BARANI B",
    8: "BAVISHA S",
    9: "BOOBALAKRISHNAN P",
    10: "BOOPALAN S",
    11: "DARSINI C M",
    12: "DEEPIKA A M",
    13: "DEEPIKA V",
    14: "DEVADHARSHINI S",
    15: "DHANUSH K",
    16: "DHARSHAN M",
    17: "ENIYAVAN R",
    18: "GAYATHRI R",
    19: "GAYATHRI S",
    20: "GOBIKRISHNA P",
    21: "GOKUL K",
    22: "GOKULAKANNAN S V",
    23: "GOWRI SHANKAR K",
    24: "HARSAN M",
    25: "HEPHZIBAH A",
    26: "KABILAN K",
    27: "KAMAL RAJ N Y",
    28: "KAVYA SRI A",
    29: "KRISHNA T",
    30: "LIKITHA R",
    31: "MADHU SHREE U",
    32: "MAHALINGESH J",
    33: "MATHEW FERNAND I",
    34: "MOHAMMED HABEEB S",
    35: "MOHANKUMAR P",
    36: "NAVEEN K",
    37: "NAVEEN RAJ V",
    38: "NOORUL BASHRI U",
    39: "PRATHISHA S",
    40: "PRIYADHARSHINI B",
    41: "RAMANUJAM R T",
    42: "RAMYA S",
    43: "RISHI A",
    44: "RITHIKA K",
    45: "SAKTHIVEL S",
    46: "SAMUEL JEBARAJ W",
    47: "SIVASUPRIYA A",
    48: "SOWMIYA S",
    49: "SREE ADVAITHA M",
    50: "SREEVATHSAN K G",
    51: "SRI VENKATESAN P",
    52: "SUBHASRILEKHA K",
    53: "SUDHARSAN P",
    54: "SWARNA LATHA G",
    55: "SWETHA C",
    56: "THAILAMBALNAYAKI V",
    57: "UDHAYAKUMAR M",
    58: "VARSHA S",
    59: "VARSHINI P",
    60: "VARUN K",
    61: "VIGNESH R",
    62: "YASWANTH V",
    301: "DHANRAJ S",
    302: "DINESH V S",
    305: "SHESHATHRI S",
    303: "ILANGO D",
    304: "MADHAN KUMAR R"
    // Add the rest of the student names here
};


let leave = [];
let onDuty = [];
let Late = [];
len=Object.keys(studentNames).length
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
    leave = indices;
    updateMessage(`Leave recorded for indices: ${leave.join(", ")}`);
    document.getElementById("leave-input").style.display = "none";
}

function recordOnDuty() {
    const input = document.getElementById("on-duty-input-field").value;
    const indices = input.split(" ").map(Number);
    onDuty = indices;
    updateMessage(`On Duty recorded for indices: ${onDuty.join(", ")}`);
    document.getElementById("on-duty-input").style.display = "none";  
}

function recordLateComers() {
    const input = document.getElementById("LateComers-input-field").value;
    const indices = input.split(" ").map(Number);
    Late = indices;
    updateMessage(`Late Comers recorded for indices: ${Late.join(", ")}`);
    document.getElementById("LateComers-input").style.display = "none";
}

function printAttendance() {
    const presentCount = len - leave.length;
    const absentCount = leave.length;
    const attendancePercentage = (presentCount / len) * 100;

    const now = new Date();
    let greeting = "Good Morning";
    if (now.getHours() >= 12) {
        greeting = "Good Afternoon";
    }

    let report = `
${greeting} Sir, Today's Attendance

Date: ${now.toLocaleDateString()}
Class: IV- B.Tech (CSBS)
Total Strength: ${len}
No. of Present: ${presentCount}
No. of Absent: ${absentCount}

`
if(leave.length>=1)
{
report+="\nAbsentees\n";

    for (let i = 0; i < leave.length; i++) {
        const index = leave[i];
        report += `\t${i + 1}. ${studentNames[index]}\n`;
    }
}
    if(onDuty.length>=1)
    {
    report += "\nOn-duty Students:\n";
    for (let i = 0; i < onDuty.length; i++) {
        const index = onDuty[i];
        report += `\t${i + 1}. ${studentNames[index]}\n`;
    }}
    if(Late.length>=1)
    {
    report += "\nLate Comers:\n";
    for (let i = 0; i < Late.length; i++) {
        const index = Late[i];
        report += `\t${i + 1}. ${studentNames[index]}\n`;
    }
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
