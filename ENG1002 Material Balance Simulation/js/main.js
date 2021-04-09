"use strict"
let buttonPressed = "Influent";



function updateTable1() {
    let sg1Ref = document.getElementById("sg1");
    let sg2Ref = document.getElementById("sg2");
    let sg3Ref = document.getElementById("sg3");
    let s1Ref = document.getElementById("s1");
    let s2Ref = document.getElementById("s2");
    let s3Ref = document.getElementById("s3");
    let c1Ref = document.getElementById("c1");
    let c2Ref = document.getElementById("c2");
    let c3Ref = document.getElementById("c3");
    let g1Ref = document.getElementById("g1");
    let g2Ref = document.getElementById("g2");
    let g3Ref = document.getElementById("g3");
    let cp1Ref = document.getElementById("cp1");
    let cp2Ref = document.getElementById("cp2");
    let cp3Ref = document.getElementById("cp3");
    let n1Ref = document.getElementById("n1");
    let n2Ref = document.getElementById("n2");
    let n3Ref = document.getElementById("n3");
    let vo1Ref = document.getElementById("vo1");
    let vo2Ref = document.getElementById("vo2");
    let vo3Ref = document.getElementById("vo3");

    let sg1 = sg1Ref.value;
    let s1 = s1Ref.value;
    let c1 = c1Ref.value;
    let g1 = g1Ref.value;
    let cp1 = cp1Ref.value;
    let n1 = n1Ref.value;
    let vo1 = vo1Ref.value;

    let sgE = 0.973;
    let sE = 0;
    let cE = 0;
    let gE = 1;
    let cpE = 0.66;
    let nE = 0.875;
    let voE = 0.272;

    let sg2 = sgE * sg1;
    let s2 = sE * s1;
    let c2 = cE * c1;
    let g2 = gE * g1;
    let cp2 = cpE * cp1;
    let n2 = nE * n1;
    let vo2 = voE * vo1;

    let sg3 = (1 - sgE) * sg1;
    let s3 = (1 - sE) * s1;
    let c3 = (1 - cE) * c1;
    let g3 = (1 - gE) * g1;
    let cp3 = (1 - cpE) * cp1;
    let n3 = (1 - nE) * n1;
    let vo3 = (1 - voE) * vo1;

    sg2Ref.textContent = Number(sg2.toPrecision(3));
    s2Ref.textContent = Number(s2.toPrecision(3));
    c2Ref.textContent = Number(c2.toPrecision(3));
    g2Ref.textContent = Number(g2.toPrecision(3));
    cp2Ref.textContent = Number(cp2.toPrecision(3));
    n2Ref.textContent = Number(n2.toPrecision(3));
    vo2Ref.textContent = Number(vo2.toPrecision(3));

    sg3Ref.textContent = Number(sg3.toPrecision(3));
    s3Ref.textContent = Number(s3.toPrecision(3));
    c3Ref.textContent = Number(c3.toPrecision(3));
    g3Ref.textContent = Number(g3.toPrecision(3));
    cp3Ref.textContent = Number(cp3.toPrecision(3));
    n3Ref.textContent = Number(n3.toPrecision(3));
    vo3Ref.textContent = Number(vo3.toPrecision(3));
}

function updateTable2() {
    let sg1Ref = document.getElementById("sg12");
    let sg2Ref = document.getElementById("sg22");
    let sg3Ref = document.getElementById("sg32");
    let s1Ref = document.getElementById("s12");

    let s3Ref = document.getElementById("s32");
    let c1Ref = document.getElementById("c12");
    
    let c3Ref = document.getElementById("c32");
    let g1Ref = document.getElementById("g12");
    let g2Ref = document.getElementById("g22");
    let g3Ref = document.getElementById("g32");
    let cp1Ref = document.getElementById("cp12");
    let cp2Ref = document.getElementById("cp22");
    let cp3Ref = document.getElementById("cp32");
    let n1Ref = document.getElementById("n12");
    let n2Ref = document.getElementById("n22");
    let n3Ref = document.getElementById("n32");
    let vo1Ref = document.getElementById("vo12");
    let vo2Ref = document.getElementById("vo22");
    let vo3Ref = document.getElementById("vo32");

    let sg2 = sg2Ref.value;
    
    let g2 = g2Ref.value;
    let cp2 = cp2Ref.value;
    let n2 = n2Ref.value;
    let vo2 = vo2Ref.value;

    let sgE = 0.973;
    let sE = 0;
    let cE = 0;
    let gE = 1;
    let cpE = 0.66;
    let nE = 0.875;
    let voE = 0.272;

    let sg1 = sg2 / sgE;
    let s1 = "X";
    let c1 = "Y";
    let g1 = g2 / gE;
    let cp1 = cp2 / cpE;
    let n1 = n2 / nE;
    let vo1 = vo2 / voE;

    let sg3 = sg2 / sgE * (1 - sgE);
    let s3 = "X";
    let c3 = "Y";
    let g3 = g2 / gE * (1 - gE);
    let cp3 = cp2 / cpE * (1 - cpE);
    let n3 = n2 / nE * (1 - nE);
    let vo3 = vo2 / voE * (1 - voE);

    sg1Ref.textContent = Number(sg1.toPrecision(3));
    s1Ref.textContent = s1;
    c1Ref.textContent = c1;
    g1Ref.textContent = Number(g1.toPrecision(3));
    cp1Ref.textContent = Number(cp1.toPrecision(3));
    n1Ref.textContent = Number(n1.toPrecision(3));
    vo1Ref.textContent = Number(vo1.toPrecision(3));

    sg3Ref.textContent = Number(sg3.toPrecision(3));
    s3Ref.textContent = s3;
    c3Ref.textContent = c3;
    g3Ref.textContent = Number(g3.toPrecision(3));
    cp3Ref.textContent = Number(cp3.toPrecision(3));
    n3Ref.textContent = Number(n3.toPrecision(3));
    vo3Ref.textContent = Number(vo3.toPrecision(3));
}

function updateTable3() {
    let sg1Ref = document.getElementById("sg13");
    let sg2Ref = document.getElementById("sg23");
    let sg3Ref = document.getElementById("sg33");
    let s1Ref = document.getElementById("s13");
    let s2Ref = document.getElementById("s23");
    let s3Ref = document.getElementById("s33");
    let c1Ref = document.getElementById("c13");
    let c2Ref = document.getElementById("c23");
    let c3Ref = document.getElementById("c33");
    let g1Ref = document.getElementById("g13");
    let g2Ref = document.getElementById("g23");

    let cp1Ref = document.getElementById("cp13");
    let cp2Ref = document.getElementById("cp23");
    let cp3Ref = document.getElementById("cp33");
    let n1Ref = document.getElementById("n13");
    let n2Ref = document.getElementById("n23");
    let n3Ref = document.getElementById("n33");
    let vo1Ref = document.getElementById("vo13");
    let vo2Ref = document.getElementById("vo23");
    let vo3Ref = document.getElementById("vo33");

    let sg3 = sg3Ref.value;
    let s3 = s3Ref.value;
    let c3 = c3Ref.value;
    
    let cp3 = cp3Ref.value;
    let n3 = n3Ref.value;
    let vo3 = vo3Ref.value;

    let sgE = 0.973;
    let sE = 0;
    let cE = 0;
    let gE = 1;
    let cpE = 0.66;
    let nE = 0.875;
    let voE = 0.272;

    let sg1 = sg3 / (1 - sgE);
    let s1 = s3 / (1 - sE);
    let c1 = c3 / (1 - cE);
    let g1 = "X";
    let cp1 = cp3 / (1 - cpE);
    let n1 = n3 / (1 - nE);
    let vo1 = vo3 / (1 - voE);

    let sg2 = sg3 / (1 - sgE) * sgE;
    let s2 = s3 / (1 - sE) * sE;
    let c2 = c3 / (1 - cE) * cE;
    let g2 = "X";
    let cp2 = cp3 / (1 - cpE) * cpE;
    let n2 = n3 / (1 - nE) * nE;
    let vo2 = vo3 / (1 - voE) * voE;

    sg2Ref.textContent = Number(sg2.toPrecision(3));
    s2Ref.textContent = Number(s2.toPrecision(3));
    c2Ref.textContent = Number(c2.toPrecision(3));
    g2Ref.textContent = g2;
    cp2Ref.textContent = Number(cp2.toPrecision(3));
    n2Ref.textContent = Number(n2.toPrecision(3));
    vo2Ref.textContent = Number(vo2.toPrecision(3));

    sg1Ref.textContent = Number(sg1.toPrecision(3));
    s1Ref.textContent = Number(s1.toPrecision(3));
    c1Ref.textContent = Number(c1.toPrecision(3));
    g1Ref.textContent = g1;
    cp1Ref.textContent = Number(cp1.toPrecision(3));
    n1Ref.textContent = Number(n1.toPrecision(3));
    vo1Ref.textContent = Number(vo1.toPrecision(3));
}

function openTable(type) {
    if (type == "Influent") {
        document.getElementById("tableInfluent").style.display = "inline";
        document.getElementById("tableWaste").style.display = "none";
        document.getElementById("tableEffluent").style.display = "none";
        document.getElementById("buttonInfluent").style.backgroundColor = "#ddd";
        document.getElementById("buttonWaste").style.backgroundColor = "#ffffff";
        document.getElementById("buttonEffluent").style.backgroundColor = "#ffffff";
        return
    }

    if (type == "Waste") {
        document.getElementById("tableInfluent").style.display = "none";
        document.getElementById("tableWaste").style.display = "inline";
        document.getElementById("tableEffluent").style.display = "none";
        document.getElementById("buttonInfluent").style.backgroundColor = "#ffffff";
        document.getElementById("buttonWaste").style.backgroundColor = "#ddd";
        document.getElementById("buttonEffluent").style.backgroundColor = "#ffffff";
        return
    }

    if (type == "Effluent") {
        document.getElementById("tableInfluent").style.display = "none";
        document.getElementById("tableWaste").style.display = "none";
        document.getElementById("tableEffluent").style.display = "inline";
        document.getElementById("buttonInfluent").style.backgroundColor = "#ffffff";
        document.getElementById("buttonWaste").style.backgroundColor = "#ffffff";
        document.getElementById("buttonEffluent").style.backgroundColor = "#ddd";
        return
    }
}

function influentButton() {
    buttonPressed = "Influent";
    updateTable1();
}

function wasteButton() {
    buttonPressed = "Waste";
    updateTable2();
}

function effluentButton() {
    buttonPressed = "Effluent";
    updateTable3();
}

function tableUpdater() {
    if (buttonPressed == "Influent") {
        updateTable1();
        return
    }

    if (buttonPressed == "Waste") {
        updateTable2();
        return
    }

    if (buttonPressed == "Effluent") {
        updateTable3();
        return
    }
}

setInterval(tableUpdater, 100);