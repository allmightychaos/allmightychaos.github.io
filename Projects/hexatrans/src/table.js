var tableBody = document.getElementById('table-body');
// create a for loop, that appends <tr><td>{percentage-1}</td><td>{value-from-getResult()}</td></tr> to the table body
for (var i = 100; i >= 0; i--) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    td1.textContent = i + '%';
    td2.textContent = getResult(i);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tableBody.appendChild(tr);
}

function getResult(value) {
    if (value == 100) {
        return 'FF';
    } else if (value == 99) {
        return 'FC';
    } else if (value == 98) {
        return 'FA';
    } else if (value == 97) {
        return 'F7';
    } else if (value == 96) {
        return 'F5';
    } else if (value == 95) {
        return 'F2';
    } else if (value == 94) {
        return 'F0';
    } else if (value == 93) {
        return 'ED';
    } else if (value == 92) {
        return 'EB';
    } else if (value == 91) {
        return 'E8';
    } else if (value == 90) {
        return 'E6';
    } else if (value == 89) {
        return 'E3';
    } else if (value == 88) {
        return 'E0';
    } else if (value == 87) {
        return 'DE';
    } else if (value == 86) {
        return 'DB';
    } else if (value == 85) {
        return 'D9';
    } else if (value == 84) {
        return 'D6';
    } else if (value == 83) {
        return 'D4';
    } else if (value == 82) {
        return 'D1';
    } else if (value == 81) {
        return 'CF';
    } else if (value == 80) {
        return 'CC';
    } else if (value == 79) {
        return 'C9';
    } else if (value == 78) {
        return 'C7';
    } else if (value == 77) {
        return 'C4';
    } else if (value == 76) {
        return 'C2';
    } else if (value == 75) {
        return 'BF';
    } else if (value == 74) {
        return 'BD';
    } else if (value == 73) {
        return 'BA';
    } else if (value == 72) {
        return 'B8';
    } else if (value == 71) {
        return 'B5';
    } else if (value == 70) {
        return 'B3';
    } else if (value == 69) {
        return 'B0';
    } else if (value == 68) {
        return 'AD';
    } else if (value == 67) {
        return 'AB';
    } else if (value == 66) {
        return 'A8';
    } else if (value == 65) {
        return 'A6';
    } else if (value == 64) {
        return 'A3';
    } else if (value == 63) {
        return 'A1';
    } else if (value == 62) {
        return '9E';
    } else if (value == 61) {
        return '9C';
    } else if (value == 60) {
        return '99';
    } else if (value == 59) {
        return '96';
    } else if (value == 58) {
        return '94';
    } else if (value == 57) {
        return '91';
    } else if (value == 56) {
        return '8F';
    } else if (value == 55) {
        return '8C';
    } else if (value == 54) {
        return '8A';
    } else if (value == 53) {
        return '87';
    } else if (value == 52) {
        return '85';
    } else if (value == 51) {
        return '82';
    } else if (value == 50) {
        return '80';
    } else if (value == 49) {
        return '7D';
    } else if (value == 48) {
        return '7A';
    } else if (value == 47) {
        return '78';
    } else if (value == 46) {
        return '75';
    } else if (value == 45) {
        return '73';
    } else if (value == 44) {
        return '70';
    } else if (value == 43) {
        return '6E';
    } else if (value == 42) {
        return '6B';
    } else if (value == 41) {
        return '69';
    } else if (value == 40) {
        return '66';
    } else if (value == 39) {
        return '63';
    } else if (value == 38) {
        return '61';
    } else if (value == 37) {
        return '5E';
    } else if (value == 36) {
        return '5C';
    } else if (value == 35) {
        return '59';
    } else if (value == 34) {
        return '57';
    } else if (value == 33) {
        return '54';
    } else if (value == 32) {
        return '52';
    } else if (value == 31) {
        return '4F';
    } else if (value == 30) {
        return '4D';
    } else if (value == 29) {
        return '4A';
    } else if (value == 28) {
        return '47';
    } else if (value == 27) {
        return '45';
    } else if (value == 26) {
        return '42';
    } else if (value == 25) {
        return '40';
    } else if (value == 24) {
        return '3D';
    } else if (value == 23) {
        return '3B';
    } else if (value == 22) {
        return '38';
    } else if (value == 21) {
        return '36';
    } else if (value == 20) {
        return '33';
    } else if (value == 19) {
        return '30';
    } else if (value == 18) {
        return '2E';
    } else if (value == 17) {
        return '2B';
    } else if (value == 16) {
        return '29';
    } else if (value == 15) {
        return '26';
    } else if (value == 14) {
        return '24';
    } else if (value == 13) {
        return '21';
    } else if (value == 12) {
        return '1F';
    } else if (value == 11) {
        return '1C';
    } else if (value == 10) {
        return '1A';
    } else if (value == 9) {
        return '17';
    } else if (value == 8) {
        return '14';
    } else if (value == 7) {
        return '12';
    } else if (value == 6) {
        return '0F';
    } else if (value == 5) {
        return '0D';
    } else if (value == 4) {
        return '0A';
    } else if (value == 3) {
        return '08';
    } else if (value == 2) {
        return '05';
    } else if (value == 1) {
        return '03';
    } else if (value == 0) {
        return '00';
    }
}