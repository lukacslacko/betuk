function create_svg_spline(points_and_tangents) {
    var svg = document.getElementById("svg");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    points = points_and_tangents.map(function (x) { return x[1]; });
    first_tangents = points_and_tangents.map(function (x) { return x[2]; });
    second_tangents = points_and_tangents.map(function (x) { return x[0]; });
    second_tangents = second_tangents.slice(1);
    var d = "M" + points[0][0] + " " + points[0][1];
    console.log(points, first_tangents, second_tangents);
    for (var i = 1; i < points.length; i++) {
        d += " C" + (points[i - 1][0] + first_tangents[i - 1][0]) +
            " " + (points[i - 1][1] + first_tangents[i - 1][1]) +
            ", " + (points[i][0] - second_tangents[i - 1][0]) + " " +
            (points[i][1] - second_tangents[i - 1][1]) + ", " +
            (points[i][0] + " " + points[i][1]);
    }
    path.setAttribute("d", d);
    path.setAttribute("stroke", "red");
    path.setAttribute("stroke-width", 6);
    path.setAttribute("fill", "none");
    svg.appendChild(path);
    // Draw a small circle at each point.
    for (var i = 0; i < points.length; i++) {
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", points[i][0]);
        circle.setAttribute("cy", points[i][1]);
        circle.setAttribute("r", 3);
        circle.setAttribute("fill", "black");
        svg.appendChild(circle);
    }
}

function left(a) {
    return [-a,0];
}
function right(a) {
    return [a,0];
}
function up(a) {
    return [0,-a];
}
function down(a) {
    return [0,a];
}

// Draw a simple line as svg into the div with id 'font'.
function draw_line(x1, y1, x2, y2) {
    var svg = document.getElementById("svg");
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    svg.appendChild(line);
}