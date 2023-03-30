namespace A01{
    let subjects:string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates:string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects:string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "Die Karte des Rumtreibers", "Dementoren"];

    let arrayOne:string [] = [];
    let arrayTwo:string [] = [];
    let arrayThree:string [] = [];

    console.log()


    for (let i = 6; i<=0; i--){
        let paragraph:string = getVerse(arrayOne, arrayTwo, arrayThree);
        console.log(paragraph)
        console.log()
    } 

    function getVerse(_subjects:string[], _predicates:string[], _objects:string[]):string{
        let x:number = Math.floor(Math.random() * 6);
        let y:number = Math.floor(Math.random() * 6);
        let z:number = Math.floor(Math.random() * 6);

        let poem:string;

        poem = _subjects.splice(x,1)[0]+" "+_predicates.splice(y,1)[0]+" "+_objects.splice(z,1)[0];

        return poem;

    }
}