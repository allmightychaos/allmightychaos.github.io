var transpSlider = document.getElementById('transp-slider');
var transpValue = document.getElementById('transp-value');
var colorPreview = document.getElementById('colorPreview');
var transparencyInputDiv = document.getElementById('input');
var resultHexa = document.getElementById('resultHexa');
var resultTransp = document.getElementById('resultTransp');
var resultFullOrange = document.getElementById('orange');
var resultFullBlue = document.getElementById('blue');
var resultFull = document.getElementById('resultFull');
var inputDiv = document.getElementById('input2');
var resultDiv = document.querySelector('.result');
const inputField = document.querySelector('#input2 input');

resultHexa.addEventListener('click', function() {
    navigator.clipboard.writeText("#" + resultHexa.textContent);
});

resultTransp.addEventListener('click', function() {
    navigator.clipboard.writeText(resultTransp.textContent);
});

resultFull.addEventListener('click', function() {
    navigator.clipboard.writeText(resultFull.textContent);
});

transpSlider.addEventListener('input', function() {
    changeProgress();
    getResult(transpSlider.value);

    colorPreview.style.backgroundColor = resultFull.textContent;

    transpValue.textContent = transpSlider.value;
    transparencyInputDiv.style.boxShadow = "0 4px 12px 0 rgba(0, 0, 255, .125),  0 0 8px 0 rgba(0, 0, 0, .125)";
});

inputField.addEventListener('focus', function() {
  inputDiv.style.boxShadow = "0 4px 12px 0 rgba(0, 0, 255, .125), 0 0 8px 0 rgba(0, 0, 0, .125)";
});

inputField.addEventListener('blur', function() {
  inputDiv.style.boxShadow = "0 4px 12px 0 rgba(0, 0, 0, .125), 0 0 0 0 rgba(0, 0, 0, .125)";
});

inputField.addEventListener('mouseover', function() {
    inputDiv.style.boxShadow = "0 4px 12px 0 rgba(255, 0, 0, .125), 0 0 8px 0 rgba(0, 0, 0, .125);";
});

inputField.addEventListener('input', function() {
    const validHexRegex = /^[#0-9a-fA-F]+$/;
    let hexValue = inputField.value;
    let hexValueLength = hexValue.length;

    hexValue = hexValue.toUpperCase();

    if (!validHexRegex.test(hexValue)) {
        inputField.value = hexValue.slice(0, -1);
        hexValue = inputField.value;
        hexValueLength = hexValue.length;
    }

    if (hexValue[0] != '#') {
        inputField.value = '#' + hexValue;
        hexValue = inputField.value;
        hexValueLength = hexValue.length;
    }

    if (hexValue[hexValueLength - 1] == "#" && hexValue[0] == '#' && hexValueLength > 1) {
        inputField.value = hexValue.slice(0, -1);
        hexValue = inputField.value;
        hexValueLength = hexValue.length;

        resultTransp.textContent = hexValue.substring(7, 9);
        resultFullOrange.textContent= hexValue.substring(1, 7);
        resultFullBlue.textContent  = hexValue.substring(7, 9);
    }

    if (inputField.value.length < 4) {
        colorPreview.style.backgroundColor = "#FFFFFF";    
    }
    
    if (inputField.value.length > 9) {
        inputField.value = hexValue.slice(0, -1);
    }

    inputField.addEventListener('blur', function() {
        if (inputField.value.length == 7) {
            changeValues(100);
            changeResult('FF');
        }
    });

    colorPreview.style.backgroundColor = inputField.value;
    
    colorPreview.addEventListener('click', function() {
        navigator.clipboard.writeText(inputField.value);
    });

    resultHexa.textContent      = hexValue.substring(1, 7);
    resultTransp.textContent    = hexValue.substring(7, 9);
    resultFullOrange.textContent= hexValue.substring(1, 7);
    resultFullBlue.textContent  = hexValue.substring(7, 9);

    if (inputField.value.length > 7) {
        if (hexValue[7] === 'F' && hexValue[8] === 'F') {
            changeValues(100);
        } else if (hexValue[7] === 'F' && hexValue[8] === 'C') {
            changeValues(99);
        } else if (hexValue[7] === 'F' && hexValue[8] === 'A') {
            changeValues(98);
        } else if (hexValue[7] === 'F' && hexValue[8] === '7') {
            changeValues(97);
        } else if (hexValue[7] === 'F' && hexValue[8] === '5') {
            changeValues(96);
        } else if (hexValue[7] === 'F' && hexValue[8] === '2') {
            changeValues(95);
        } else if (hexValue[7] === 'F' && hexValue[8] === '0') {
            changeValues(94);
        } else if (hexValue[7] === 'E' && hexValue[8] === 'D') {
            changeValues(93);
        } else if (hexValue[7] === 'E' && hexValue[8] === 'B') {
            changeValues(92);
        } else if (hexValue[7] === 'E' && hexValue[8] === '8') {
            changeValues(91);
        } else if (hexValue[7] === 'E' && hexValue[8] === '6') {
            changeValues(90);
        } else if (hexValue[7] === 'E' && hexValue[8] === '3') {
            changeValues(89);
        } else if (hexValue[7] === 'E' && hexValue[8] === '0') {
            changeValues(88);
        } else if (hexValue[7] === 'D' && hexValue[8] === 'E') {
            changeValues(87);
        } else if (hexValue[7] === 'D' && hexValue[8] === 'B') {
            changeValues(86);
        } else if (hexValue[7] === 'D' && hexValue[8] === '9') {
            changeValues(85);
        } else if (hexValue[7] === 'D' && hexValue[8] === '6') {
            changeValues(84);
        } else if (hexValue[7] === 'D' && hexValue[8] === '4') {
            changeValues(83);
        } else if (hexValue[7] === 'D' && hexValue[8] === '1') {
            changeValues(82);
        } else if (hexValue[7] === 'C' && hexValue[8] === 'F') {
            changeValues(81);
        } else if (hexValue[7] === 'C' && hexValue[8] === 'C') {
            changeValues(80);
        } else if (hexValue[7] === 'C' && hexValue[8] === '9') {
            changeValues(79);
        } else if (hexValue[7] === 'C' && hexValue[8] === '7') {
            changeValues(78);
        } else if (hexValue[7] === 'C' && hexValue[8] === '4') {
            changeValues(77);
        } else if (hexValue[7] === 'C' && hexValue[8] === '2') {
            changeValues(76);
        } else if (hexValue[7] === 'B' && hexValue[8] === 'F') {
            changeValues(75);
        } else if (hexValue[7] === 'B' && hexValue[8] === 'D') {
            changeValues(74);
        } else if (hexValue[7] === 'B' && hexValue[8] === 'A') {
            changeValues(73);
        } else if (hexValue[7] === 'B' && hexValue[8] === '8') {
            changeValues(72);
        } else if (hexValue[7] === 'B' && hexValue[8] === '5') {
            changeValues(71);
        } else if (hexValue[7] === 'B' && hexValue[8] === '3') {
            changeValues(70);
        } else if (hexValue[7] === 'B' && hexValue[8] === '0') {
            changeValues(69);
        } else if (hexValue[7] === 'A' && hexValue[8] === 'D') {
            changeValues(68);
        } else if (hexValue[7] === 'A' && hexValue[8] === 'B') {
            changeValues(67);
        } else if (hexValue[7] === 'A' && hexValue[8] === '8') {
            changeValues(66);
        } else if (hexValue[7] === 'A' && hexValue[8] === '6') {
            changeValues(65);
        } else if (hexValue[7] === 'A' && hexValue[8] === '3') {
            changeValues(64);
        } else if (hexValue[7] === 'A' && hexValue[8] === '1') {
            changeValues(63);
        } else if (hexValue[7] === '9' && hexValue[8] === 'E') {
            changeValues(62);
        } else if (hexValue[7] === '9' && hexValue[8] === 'C') {
            changeValues(61);
        } else if (hexValue[7] === '9' && hexValue[8] === '9') {
            changeValues(60);
        } else if (hexValue[7] === '9' && hexValue[8] === '6') {
            changeValues(59);
        } else if (hexValue[7] === '9' && hexValue[8] === '4') {
            changeValues(58);
        } else if (hexValue[7] === '9' && hexValue[8] === '1') {
            changeValues(57);
        } else if (hexValue[7] === '8' && hexValue[8] === 'F') {
            changeValues(56);
        } else if (hexValue[7] === '8' && hexValue[8] === 'C') {
            changeValues(55);
        } else if (hexValue[7] === '8' && hexValue[8] === 'A') {
            changeValues(54);
        } else if (hexValue[7] === '8' && hexValue[8] === '7') {
            changeValues(53);
        } else if (hexValue[7] === '8' && hexValue[8] === '5') {
            changeValues(52);
        } else if (hexValue[7] === '8' && hexValue[8] === '2') {
            changeValues(51);
        } else if (hexValue[7] === '8' && hexValue[8] === '0') {
            changeValues(50);
        } else if (hexValue[7] === '7' && hexValue[8] === 'D') {
            changeValues(49);
        } else if (hexValue[7] === '7' && hexValue[8] === 'A') {
            changeValues(48);
        } else if (hexValue[7] === '7' && hexValue[8] === '8') {
            changeValues(47);
        } else if (hexValue[7] === '7' && hexValue[8] === '5') {
            changeValues(46);
        } else if (hexValue[7] === '7' && hexValue[8] === '3') {
            changeValues(45);
        } else if (hexValue[7] === '7' && hexValue[8] === '0') {
            changeValues(44);
        } else if (hexValue[7] === '6' && hexValue[8] === 'E') {
            changeValues(43);
        } else if (hexValue[7] === '6' && hexValue[8] === 'B') {
            changeValues(42);
        } else if (hexValue[7] === '6' && hexValue[8] === '9') {
            changeValues(41);
        } else if (hexValue[7] === '6' && hexValue[8] === '6') {
            changeValues(40);
        } else if (hexValue[7] === '7' && hexValue[8] === 'D') {
            changeValues(39);
        } else if (hexValue[7] === '7' && hexValue[8] === 'A') {
            changeValues(38);
        } else if (hexValue[7] === '7' && hexValue[8] === '8') {
            changeValues(37);
        } else if (hexValue[7] === '7' && hexValue[8] === '5') {
            changeValues(36);
        } else if (hexValue[7] === '7' && hexValue[8] === '3') {
            changeValues(35);
        } else if (hexValue[7] === '7' && hexValue[8] === '0') {
            changeValues(34);
        } else if (hexValue[7] === '6' && hexValue[8] === 'E') {
            changeValues(33);
        } else if (hexValue[7] === '6' && hexValue[8] === 'B') {
            changeValues(32);
        } else if (hexValue[7] === '6' && hexValue[8] === '9') {
            changeValues(31);
        } else if (hexValue[7] === '6' && hexValue[8] === '6') {
            changeValues(30);
        } else if (hexValue[7] === '6' && hexValue[8] === '3') {
            changeValues(29);
        } else if (hexValue[7] === '6' && hexValue[8] === '1') {
            changeValues(28);
        } else if (hexValue[7] === '5' && hexValue[8] === 'E') {
            changeValues(27);
        } else if (hexValue[7] === '5' && hexValue[8] === 'C') {
            changeValues(26);
        } else if (hexValue[7] === '5' && hexValue[8] === '9') {
            changeValues(25);
        } else if (hexValue[7] === '5' && hexValue[8] === '7') {
            changeValues(24);
        } else if (hexValue[7] === '5' && hexValue[8] === '4') {
            changeValues(23);
        } else if (hexValue[7] === '5' && hexValue[8] === '2') {
            changeValues(22);
        } else if (hexValue[7] === '4' && hexValue[8] === 'F') {
            changeValues(21);
        } else if (hexValue[7] === '4' && hexValue[8] === 'D') {
            changeValues(20);
        } else if (hexValue[7] === '3' && hexValue[8] === '0') {
            changeValues(19);
        } else if (hexValue[7] === '2' && hexValue[8] === 'E') {
            changeValues(18);
        } else if (hexValue[7] === '2' && hexValue[8] === 'B') {
            changeValues(17);
        } else if (hexValue[7] === '2' && hexValue[8] === '9') {
            changeValues(16);
        } else if (hexValue[7] === '2' && hexValue[8] === '6') {
            changeValues(15);
        } else if (hexValue[7] === '2' && hexValue[8] === '4') {
            changeValues(14);
        } else if (hexValue[7] === '2' && hexValue[8] === '1') {
            changeValues(13);
        } else if (hexValue[7] === '1' && hexValue[8] === 'F') {
            changeValues(12);
        } else if (hexValue[7] === '1' && hexValue[8] === 'C') {
            changeValues(11);
        } else if (hexValue[7] === '1' && hexValue[8] === 'A') {
            changeValues(10);
        } else if (hexValue[7] === '1' && hexValue[8] === '7') {
            changeValues(9);
        } else if (hexValue[7] === '1' && hexValue[8] === '4') {
            changeValues(8);
        } else if (hexValue[7] === '1' && hexValue[8] === '2') {
            changeValues(7);
        } else if (hexValue[7] === '0' && hexValue[8] === 'F') {
            changeValues(6);
        } else if (hexValue[7] === '0' && hexValue[8] === 'D') {
            changeValues(5);
        } else if (hexValue[7] === '0' && hexValue[8] === 'A') {
            changeValues(4);
        } else if (hexValue[7] === '0' && hexValue[8] === '8') {
            changeValues(3);
        } else if (hexValue[7] === '0' && hexValue[8] === '5') {
            changeValues(2);
        } else if (hexValue[7] === '0' && hexValue[8] === '3') {
            changeValues(1);
        } else if (hexValue[7] === '0' && hexValue[8] === '0') {
            changeValues(0);
        }
    }
});

function changeProgress() {
    var value = transpSlider.value;
    transpSlider.style.background = "linear-gradient(to right, #0000ff20 " + value + "%, #fff " + value + "% )";
}

function changeProgress2(value) {
    transpSlider.style.background = "linear-gradient(to right, #0000ff20 " + value + "%, #fff " + value + "% )";
}

function changeValues(values) {
    transpValue.textContent = values;
    transpSlider.value = values;
    changeProgress2(values);
} 

function changeResult(hexValue) {
    resultTransp.textContent    = hexValue;
    resultFullBlue.textContent = hexValue;
}

function setValue() {
    transpSlider.value = 50;
    inputField.value = '';
}

function getResult(value) {
    if (value == 100) {
        changeResult('FF');
    } else if (value == 99) {
        changeResult('FC');
    } else if (value == 98) {
        changeResult('FA');
    } else if (value == 97) {
        changeResult('F7');
    } else if (value == 96) {
        changeResult('F5');
    } else if (value == 95) {
        changeResult('F2');
    } else if (value == 94) {
        changeResult('F0');
    } else if (value == 93) {
        changeResult('ED');
    } else if (value == 92) {
        changeResult('EB');
    } else if (value == 91) {
        changeResult('E8');
    } else if (value == 90) {
        changeResult('E6');
    } else if (value == 89) {
        changeResult('E3');
    } else if (value == 88) {
        changeResult('E0');
    } else if (value == 87) {
        changeResult('DE');
    } else if (value == 86) {
        changeResult('DB');
    } else if (value == 85) {
        changeResult('D9');
    } else if (value == 84) {
        changeResult('D6');
    } else if (value == 83) {
        changeResult('D4');
    } else if (value == 82) {
        changeResult('D1');
    } else if (value == 81) {
        changeResult('CF');
    } else if (value == 80) {
        changeResult('CC');
    } else if (value == 79) {
        changeResult('C9');
    } else if (value == 78) {
        changeResult('C7');
    } else if (value == 77) {
        changeResult('C4');
    } else if (value == 76) {
        changeResult('C2');
    } else if (value == 75) {
        changeResult('BF');
    } else if (value == 74) {
        changeResult('BD');
    } else if (value == 73) {
        changeResult('BA');
    } else if (value == 72) {
        changeResult('B8');
    } else if (value == 71) {
        changeResult('B5');
    } else if (value == 70) {
        changeResult('B3');
    } else if (value == 69) {
        changeResult('B0');
    } else if (value == 68) {
        changeResult('AD');
    } else if (value == 67) {
        changeResult('AB');
    } else if (value == 66) {
        changeResult('A8');
    } else if (value == 65) {
        changeResult('A6');
    } else if (value == 64) {
        changeResult('A3');
    } else if (value == 63) {
        changeResult('A1');
    } else if (value == 62) {
        changeResult('9E');
    } else if (value == 61) {
        changeResult('9C');
    } else if (value == 60) {
        changeResult('99');
    } else if (value == 59) {
        changeResult('96');
    } else if (value == 58) {
        changeResult('94');
    } else if (value == 57) {
        changeResult('91');
    } else if (value == 56) {
        changeResult('8F');
    } else if (value == 55) {
        changeResult('8C');
    } else if (value == 54) {
        changeResult('8A');
    } else if (value == 53) {
        changeResult('87');
    } else if (value == 52) {
        changeResult('85');
    } else if (value == 51) {
        changeResult('82');
    } else if (value == 50) {
        changeResult('80');
    } else if (value == 49) {
        changeResult('7D');
    } else if (value == 48) {
        changeResult('7A');
    } else if (value == 47) {
        changeResult('78');
    } else if (value == 46) {
        changeResult('75');
    } else if (value == 45) {
        changeResult('73');
    } else if (value == 44) {
        changeResult('70');
    } else if (value == 43) {
        changeResult('6E');
    } else if (value == 42) {
        changeResult('6B');
    } else if (value == 41) {
        changeResult('69');
    } else if (value == 40) {
        changeResult('66');
    } else if (value == 39) {
        changeResult('63');
    } else if (value == 38) {
        changeResult('61');
    } else if (value == 37) {
        changeResult('5E');
    } else if (value == 36) {
        changeResult('5C');
    } else if (value == 35) {
        changeResult('59');
    } else if (value == 34) {
        changeResult('57');
    } else if (value == 33) {
        changeResult('54');
    } else if (value == 32) {
        changeResult('52');
    } else if (value == 31) {
        changeResult('4F');
    } else if (value == 30) {
        changeResult('4D');
    } else if (value == 29) {
        changeResult('4A');
    } else if (value == 28) {
        changeResult('47');
    } else if (value == 27) {
        changeResult('45');
    } else if (value == 26) {
        changeResult('42');
    } else if (value == 25) {
        changeResult('40');
    } else if (value == 24) {
        changeResult('3D');
    } else if (value == 23) {
        changeResult('3B');
    } else if (value == 22) {
        changeResult('38');
    } else if (value == 21) {
        changeResult('36');
    } else if (value == 20) {
        changeResult('33');
    } else if (value == 19) {
        changeResult('30');
    } else if (value == 18) {
        changeResult('2E');
    } else if (value == 17) {
        changeResult('2B');
    } else if (value == 16) {
        changeResult('29');
    } else if (value == 15) {
        changeResult('26');
    } else if (value == 14) {
        changeResult('24');
    } else if (value == 13) {
        changeResult('21');
    } else if (value == 12) {
        changeResult('1F');
    } else if (value == 11) {
        changeResult('1C');
    } else if (value == 10) {
        changeResult('1A');
    } else if (value == 9) {
        changeResult('17');
    } else if (value == 8) {
        changeResult('14');
    } else if (value == 7) {
        changeResult('12');
    } else if (value == 6) {
        changeResult('0F');
    } else if (value == 5) {
        changeResult('0D');
    } else if (value == 4) {
        changeResult('0A');
    } else if (value == 3) {
        changeResult('08');
    } else if (value == 2) {
        changeResult('05');
    } else if (value == 1) {
        changeResult('03');
    } else if (value == 0) {
        changeResult('00');
    }
}