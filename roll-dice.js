function RollDice()
{
    document.getElementById("attackerOne").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("attackerTwo").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("attackerThree").value = Math.floor(Math.random() * 6) + 1;

    document.getElementById("defenderOne").value = Math.floor(Math.random() * 6) + 1;
    document.getElementById("defenderTwo").value = Math.floor(Math.random() * 6) + 1;
}