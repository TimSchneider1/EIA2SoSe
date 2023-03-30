var A01;
(function (A01) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "Die Karte des Rumtreibers", "Dementoren"];
    let arrayOne = [];
    let arrayTwo = [];
    let arrayThree = [];
    console.log();
    for (let i = 6; i <= 0; i--) {
        let paragraph = getVerse(arrayOne, arrayTwo, arrayThree);
        console.log(paragraph);
        console.log();
    }
    function getVerse(_subjects, _predicates, _objects) {
        let x = Math.floor(Math.random() * 6);
        let y = Math.floor(Math.random() * 6);
        let z = Math.floor(Math.random() * 6);
        let poem;
        poem = _subjects.splice(x, 1)[0] + " " + _predicates.splice(y, 1)[0] + " " + _objects.splice(z, 1)[0];
        return poem;
    }
})(A01 || (A01 = {}));
//# sourceMappingURL=structure.js.map