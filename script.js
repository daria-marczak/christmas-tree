function drawTree(heightOfTree) {

    for (var i = 1; i <= heightOfTree; i++) {
        var star = "";
        for (var j = 0; j < i; j++) {
            star += "*";
        }
        console.log(star);
    }
}

drawTree(10);
