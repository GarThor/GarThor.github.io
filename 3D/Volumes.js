function OnLoad() {
    let CubeInputs = document.getElementById("Cube_Inputs");
    let CylinderInputs = document.getElementById("Cylinder_Inputs");
    CubeInputs.style.visibility = "hidden";
    CylinderInputs.style.visibility = "hidden";
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Dom done");
    ChangePrimative();
});

function Show(obj) {
    if (obj.style.visibility == "hidden" || obj.style.visibility == "") {
        obj.style.visibility = "visible";
        obj.style.height = "auto";
        obj.style.width = "auto";
    }
}

function Hide(obj) {
    if (obj.style.visibility == "visible" ||
        obj.style.visibility == "") {
        obj.style.visibility = "hidden";
        obj.style.height = 0;
        obj.style.width = 0;
    }

}

function ChangePrimative() {
    console.log("loaded");
    var InPrimitive = document.getElementById("Primitive").value;
    document.getElementById("Debug").innerHTML = "You selected: " + InPrimitive;

    let CubeInputs = document.getElementById("Cube_Inputs");
    let CylinderInputs = document.getElementById("Cylinder_Inputs");

    console.log("foobar!");

    switch (InPrimitive) {
        case "cylinder":
            console.log("case cylinder");
            console.log(CubeInputs.style)
            Show(CylinderInputs);
            Hide(CubeInputs);

            break;
        case "cube":
            console.log("case cube");
            Hide(CylinderInputs);
            Show(CubeInputs);

            break;
    }
}