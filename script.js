function drawTree(x) {
    var i = 0;
    while (i <= 10) {
        var star = " ";

        for ( j = x ; j <= i ; j++) {
            star += "*";
        }
        console.log(star);
        i++;
    }
}

drawTree(3);
