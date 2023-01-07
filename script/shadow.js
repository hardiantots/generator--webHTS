let shadow = document.getElementById("shadow__view");
let shape = document.getElementById("shape__view");
let textCode = document.getElementById("text__code");
let setInput = document.querySelectorAll(".settings__shadow input");
let setNeuro = document.querySelectorAll(".settings__neuro input");

setInput.forEach((input) => input.addEventListener("input", generateShadow));
setNeuro.forEach((input) => input.addEventListener("input", generateNeuro));

function generateShadow(){
    let horizontalShadow = document.getElementById("horizontal__shadow").value;
    let verticalShadow = document.getElementById("vertical__shadow").value;
    let blurRadius = document.getElementById("blur__radius").value;
    let spreadRadius = document.getElementById("spread__radius").value;
    let shadowColor = document.getElementById("shadow__color").value;
    let shadowOpacity = document.getElementById("shadow__opacity").value;
    let insetShadow = document.getElementById("inset__shadow").checked;
    let numberH = document.getElementById("number__horizontal");
    let numberBlur = document.getElementById("number__blur");
    let numberV = document.getElementById("number__vertical");
    let numberSpread = document.getElementById("number__spread");
    let numberColor = document.getElementById("number__color");
    let numberOpacity = document.getElementById("number__opacity");

    numberH.textContent = `${horizontalShadow} px`;
    numberBlur.textContent = `${blurRadius} px`;
    numberV.textContent = `${verticalShadow} px`;
    numberSpread.textContent = `${spreadRadius} px`;
    numberColor.textContent = `${changeHextoRgba(shadowColor, shadowOpacity)}`;
    numberOpacity.textContent = `${shadowOpacity}`;

    let boxShadow = insetShadow
    ? `inset ${horizontalShadow}px ${verticalShadow}px ${blurRadius}px ${spreadRadius}px ${changeHextoRgba(
        shadowColor,
        shadowOpacity
      )}`
    : `${horizontalShadow}px ${verticalShadow}px ${blurRadius}px ${spreadRadius}px ${changeHextoRgba(
        shadowColor,
        shadowOpacity
      )}`;
    
    shadow.style.boxShadow = boxShadow ;

    textCode.textContent = `box-shadow: ${boxShadow};`;
}

function generateNeuro(){
    let sizeShape = document.getElementById("size__shape").value;
    let radiusShape = document.getElementById("radius__shape").value;
    let distanceShadow = document.getElementById("distance__shadow").value;
    let blurShadow = document.getElementById("blur__shadow").value;
    let colorShape = document.getElementById("color__shape").value;
    let viewBack = document.getElementById("viewneuro__container");
    let numberSize = document.getElementById("number__size");
    let numberRadius = document.getElementById("number__radius");
    let numberDistance = document.getElementById("number__distance");
    let numberBlur = document.getElementById("number__blur2");
    let numberColor = document.getElementById("number__color2");

    numberSize.textContent = `${sizeShape} px`;
    numberRadius.textContent = `${radiusShape} px`;
    numberDistance.textContent = `${distanceShadow} px`;
    numberBlur.textContent = `${blurShadow} px`;
    numberColor.textContent = `${colorShape}`;

    let shapeNeuro = `
    border-radius: ${radiusShape}px;
    width: ${sizeShape}px;
    height: ${sizeShape}px;
    background-color: ${colorShape};
    box-shadow: ${distanceShadow}px ${distanceShadow}px ${blurShadow}px #00000078,
    ${-distanceShadow}px ${-distanceShadow}px ${blurShadow}px #FFFFFF26;`

    let shadowNeuro = `${distanceShadow}px ${distanceShadow}px ${blurShadow}px #00000078,
    ${-distanceShadow}px ${-distanceShadow}px ${blurShadow}px #FFFFFF26;`

    shape.style.cssText = shapeNeuro;
    viewBack.style.cssText = `background-color: ${colorShape}`;

    document.getElementById("text__code__neuro").innerHTML =
    `border-radius: ${radiusShape}px;<br>
    background: ${colorShape};<br>
    box-shadow: ${shadowNeuro}`
}

function changeHextoRgba(shadowColor, shadowOpacity){
    let r = parseInt(shadowColor.substr(1,2), 16);
    let g = parseInt(shadowColor.substr(3,2), 16);
    let b = parseInt(shadowColor.substr(5,2), 16);

    return `rgba(${r}, ${g}, ${b}, ${shadowOpacity})`;
}

function copyCode(){
    textCode.select();
    textCode.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textCode.value)
        .then(()=>{
            alert("Code Copied to Clipboard");
        })
        .catch(() => {
            alert("Something went wrong");
        });  
}

function copyCodeNeuro(IdClipboard){
    let textCode = document.createElement("input");
    textCode.setAttribute("value", document.getElementById(IdClipboard).innerText);
    
    document.body.appendChild(textCode);
    
    textCode.select();
    textCode.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textCode.value)
        .then(()=>{
            alert("Code Copied to Clipboard");
        })
        .catch(() => {
            alert("Something went wrong");
        });  
    
    document.body.removeChild(textCode);
  }


window.onload = generateShadow();
window.onload = generateNeuro();

