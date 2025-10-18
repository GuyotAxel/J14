//Step_1

function getLatinCharacterList(text)
{
    text = text.split("");
    return(text);
}

console.log('Step 1 = ', getLatinCharacterList("Hello, world"));

//Step_2

const latinToMorse = 
{
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function translateLatinCharacter(char)
{
    if (char in latinToMorse)
    {
            return(latinToMorse[char]);
    }
}

console.log('Step 2 = ', translateLatinCharacter("A"))

//Step_3

function encode(text)
{
    let temp = getLatinCharacterList(text);
    let resultat = "";
    for (a = 0; a < temp.length; a++)
    {
        if (temp[a] === " ")
        {
            resultat += "/";
        }
        else
        {
            resultat += translateLatinCharacter(temp[a]);
            resultat += " ";
        }        
    }
    return(resultat);   
}

console.log('Step 3 = ' + encode('SOS SOS'));

//Step_4

const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
}

function getMorseCharacterList(morse)
{
    resultat = [];
    temp = "";
    for (a = 0; a <= morse.length; a++)

    if (morse[a] === " " || a === morse.length)
    {
        resultat.push(temp);
        temp = "";
    }

    else if (morse[a] === "/")
    {
        resultat.push(temp);
        resultat.push("/");
        temp = "";
    }

    else
    {
        temp += morse[a];
    }

    return(resultat);
}

//console.log(`test_getMorseCharacterList = ` + getMorseCharacterList("... --- .../... --- ..."))

function translateMorseCharacter(code)
{
    let resultat = ""
    for (a = 0; a < code.length; a++)
    {
        if (code[a] in morseToLatin)
        {
            resultat += morseToLatin[code[a]];
        }
        if (code[a] === '/')
        {
            resultat += " ";
        }
    }
    return(resultat);
};

//console.log(`test_translateMorseCharacter = ` + translateMorseCharacter(getMorseCharacterList("... --- .../... --- ...")))

function decode(morseText)
{
    let temp = [];
    let resultat = "";
    temp = getMorseCharacterList(morseText);
    resultat = translateMorseCharacter(temp);
    return(resultat);
};

console.log(`Step 4 = ` + decode("... --- .../... --- ..."));

//Step_5

const encodeInput = document.getElementById("encode");
const button = document.getElementById("latinToMorse");
button.addEventListener("click", (e) => 
{
    document.getElementById("encoded").innerHTML = encode(encodeInput.value);
});

const decodeInput = document.getElementById("decode");
const button1 = document.getElementById("morseToLatin");
button1.addEventListener("click", (e) => 
{
    document.getElementById("decoded").innerHTML = decode(decodeInput.value)
});