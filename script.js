const studentNames = {
    1: "ADITYA J R",
    2: "AKASH V",
    3: "ANUSUYA P B",
    4: "ASHIQ S",
    5: "BHARATH R A",
    6: "DEEPADHARSHAN B",
    7: "DEEPAK KUMAR G S",
    8: "DEVAVARNINI V M",
    9: "DHINAKAR S",
    10: "DHIVISHA S",
    11: "DINESH S J",
    12: "DIVAKAR Y N",
    13: "DIVYA P",
    14: "ELANKAVI M",
    15: "GIRI R",
    16: "GOKUL KANNA V",
    17: "HARIHARAN V",
    18: "HARINI SRI S L",
    19: "HARITHA O",
    20: "HASHINI M",
    21: "JAGADESH R",
    22: "JANANI T",
    23: "KAMESH J",
    24: "KANIKA S",
    25: "KATHIRAVAN M M",
    26: "KAVIN RAJ N",
    27: "KAVINRAJ VENKATACHALAM",
    28: "KEERTHI R",
    29: "KIRUTHIKA V",
    30: "KISHORE R",
    31: "KOWSIKA R",
    32: "KRISHNAVENISREE D",
    33: "MADHUMITA R",
    34: "MADHUMITHAA R S",
    35: "MALINI P",
    36: "MONICA D",
    37: "MOULEESWARAN G",
    38: "NOWFIYA S",
    39: "PARVESSHRAJH S",
    40: "POORNITHA E R",
    41: "PRAKASH B",
    42: "PRASANNA C",
    43: "PREETHI K",
    44: "RAHAVA PRASANNA SA",
    45: "RAKESH E",
    46: "RAMPRASANTH S",
    47: "SAKTHI S",
    48: "SAMYUKTHA SRI H M",
    49: "SHANMUGA SUNDARAM S",
    50: "SHOBANA B",
    51: "SUBRAMANIYA BHARATHI S",
    52: "SUJIT KUMAR K",
    53: "THANGA KUMARAN R",
    54: "THARUN R",
    55: "THARUN RAJ E",
    56: "VARUNPRASAD V",
    57: "VIMALRAJ P",
    58: "YUVAN SHANKAR M",
    301: "DRAVID S",
    302: "GIRI PRAKASH G",
    303: "KARTHIKEYAN R",
    304: "PRAKASH B",
    305: "SURYA B"
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
