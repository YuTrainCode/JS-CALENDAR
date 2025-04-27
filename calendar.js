console.log("Début Partie 0");

function generatePartie0() {
    const container = document.getElementById("partie0");
    const table = document.createElement("table");
    const row = document.createElement("tr");

    for (let day = 1; day <= 31; day++) {
        const td = document.createElement("td");
        td.textContent = day;
        row.appendChild(td);
    }

    table.appendChild(row);
    container.appendChild(table);
}

generatePartie0();

console.log("Fin Partie 0");


// Partie 1
console.log("Début Partie 1");

function generatePartie1() {
    const container = document.getElementById("partie1");
    const table = document.createElement("table");
    let current_day = 1;

    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const td = document.createElement("td");
            if (current_day <= 31) {
                td.textContent = current_day;
                current_day++;
            } else {
                td.textContent = "";
            }
            row.appendChild(td);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
}

generatePartie1();

console.log("Fin Partie 1");


// Partie 2
console.log("Début Partie 2");

function generatePartie2() {
    const container = document.getElementById("partie2");
    const table = document.createElement("table");
    let current_day = 1;

    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const td = document.createElement("td");
            if (current_day <= 31) {
                td.textContent = current_day;
                current_day++;
            } else {
                td.textContent = "";
            }
            row.appendChild(td);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
}

generatePartie2();

console.log("Fin Partie 2");


// Partie 3
console.log("Début Partie 3");

function generateMonth(containerId, max_days) {
    const container = document.getElementById(containerId);
    const table = document.createElement("table");
    let current_day = 1;

    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const td = document.createElement("td");
            if (current_day <= max_days) {
                td.textContent = current_day;
                current_day++;
            } else {
                td.textContent = "";
            }
            row.appendChild(td);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
}

generateMonth("partie3", 28);

console.log("Fin Partie 3");


// Partie 4
console.log("Début Partie 4");

const month_max_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const month_names = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

function generateTableHTML(max_days) {
    let table = '<table>';
    let current_day = 1;
    for (let i = 0; i < 5; i++) {
        table += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (current_day <= max_days) {
                table += '<td>' + current_day + '</td>';
                current_day++;
            } else {
                table += '<td></td>';
            }
        }
        table += '</tr>';
    }
    table += '</table>';
    return table;
}

const calendarDiv = document.getElementById("calendar");

for (let i = 0; i < month_max_days.length; i++) {
    const monthDiv = document.createElement("div");
    monthDiv.className = "month";

    const title = document.createElement("h3");
    title.textContent = month_names[i];

    monthDiv.appendChild(title);
    monthDiv.innerHTML += generateTableHTML(month_max_days[i]);
    calendarDiv.appendChild(monthDiv);
}

console.log("Fin Partie 4");


// Partie 5
console.log("Début Partie 5");

const calendarDiv5 = document.getElementById("calendar5");

for (let i = 0; i < month_max_days.length; i++) {
    const monthDiv = document.createElement("div");
    monthDiv.className = "month";

    const title = document.createElement("h3");
    title.textContent = month_names[i];

    monthDiv.appendChild(title);
    monthDiv.innerHTML += generateTableHTML(month_max_days[i]);
    calendarDiv5.appendChild(monthDiv);
}

// Maintenant seulement dans calendar5 -> on surligne aujourd'hui
const today = new Date();
const today_date = today.getDate();
const today_month = today.getMonth();

const months5 = calendarDiv5.getElementsByClassName("month");

if (months5[today_month]) {
    const month = months5[today_month];
    const tds = month.getElementsByTagName("td");

    for (let i = 0; i < tds.length; i++) {
        if (parseInt(tds[i].textContent) === today_date) {
            tds[i].classList.add("today");
            break;
        }
    }
}

console.log("Fin Partie 5");

