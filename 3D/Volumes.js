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
        case "cube":
            console.log("case cube");
            Hide(CylinderInputs);
            Show(CubeInputs);

            break;
        case "cylinder":
            console.log("case cylinder");
            console.log(CubeInputs.style)
            Show(CylinderInputs);
            Hide(CubeInputs);

            break;
    }
}

function ChangeMoldBoxUnits() {
    // TBD: hook me up later!
}

function ChangeMoldVolumeUnits() {
    // TBD!
}

function CalculateVolumes() {
    console.log("Calculating splines!");

    let Volume = 0;
    let Units = "null";

    // Do the volume calculation, and set units based on selected primative
    var InPrimitive = document.getElementById("Primitive").value;
    switch (InPrimitive) {
        case "cube": {
            console.log("cubic mold box");

            let X = document.getElementById("X").value;
            let Y = document.getElementById("Y").value;
            let Z = document.getElementById("Z").value;

            Volume = X * Y * Z;

            let UnitObj = document.getElementById("CubeMoldBoxUnits");
            Units = UnitObj.options[UnitObj.selectedIndex].getAttribute('name');;
        } break;
        case "cylinder": {
            console.log("cylindric mold box");

            let Radius = document.getElementById("Radius").value;
            let Height = document.getElementById("Height").value;

            Volume = Math.TAU * Radius * Height;

            let UnitObj = document.getElementById("CylinderMoldBoxUnits");
            Units = UnitObj.options[UnitObj.selectedIndex].getAttribute('name');;
        } break;
    }

    console.log("Units = ", Units);
    console.log("Volume = ", Volume);

    // Make the units match!
    switch (Units) {
        case "inch":
            Units = "cubic-inch";
            break;
        case "cm":
            Units = "cubic-cm";
            break;
    }

    console.log("Volume Units = ", Units);

    document.getElementById("MoldVolumeUnits").selectedIndex = Units;
    document.getElementById("SiliconeUnits").selectedIndex = Units;
    document.getElementById("MoldVolume").value = Volume;

    let ObjectVolume = document.getElementById("ObjVol").value;
    let SiliconeVolume = Volume - ObjectVolume;
    document.getElementById("SiliconeVolume").value = SiliconeVolume;
}