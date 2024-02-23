
const otazka = document.querySelector(".question")
otazka.textContent = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon."

let odpoved = prompt("Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon:")
const answerText = document.querySelector(".answer__text")
answerText.textContent = odpoved 

if(odpoved === "Bell"){
    const spravne = document.querySelector(".answer")
    spravne.classList.add("answer--correct")
} else if(odpoved !== "Bell"){
    const spatne = document.querySelector(".answer")
    spatne.classList.add("answer--wrong")
}

