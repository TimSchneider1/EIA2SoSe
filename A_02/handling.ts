namespace A02{
    window.addEventListener("load", handling);
   
    function divBox(_mouse: MouseEvent) {

       
        let span: HTMLElement | null = document.getElementById("span0");
        let xvalue: number = _mouse.clientX;
        let yvalue: number = _mouse.clientY;

        let offsetX: number = _mouse.clientX +5;
        let offsetY: number = _mouse.clientY+5;

        if (span != null) {
            span.innerText = "Mouseposition: X: " + xvalue + ", Y: " + yvalue + _mouse.target;

            span.style.left = offsetX + "px";
            span.style.top = offsetY + "px";
        }

    }

    function handling() {

        document.addEventListener("mousemove", divBox);
        document.addEventListener("click", showData);
        document.addEventListener("keyup", showData);
        document.body.addEventListener("click", showData);
        document.body.addEventListener("keyup", showData);
        document.getElementById("div0")!.addEventListener("click", showData);
        document.getElementById("div0")!.addEventListener("keyup", showData);
        document.getElementById("div1")!.addEventListener("click", showData);
        document.getElementById("div1")!.addEventListener("keyup", showData);
    }

    function showData(_event: Event) {

        console.log(_event.target, _event.currentTarget, _event.type, _event);

    }
}