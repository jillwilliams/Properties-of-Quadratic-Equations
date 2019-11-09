const myProblem = ( ) => {
    return "The vertex is at (-3, 1). The y-intercept is (0, 8). The parabola opens upward since the value of a is one. The vertex is a minimum value because the parabola opens upward and it is the lowest point of the graph."
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
};

const myProblem2 = ( ) => {
    return "The vertex is at (-5, -4). The y-intercept is (0, 21). The parabola opens upward since the value of a is one. The vertex is a minimum value because the parabola opens upward and it is the lowest point of the graph."
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
};
const myProblem3 = ( ) => {
    return "The vertex is at (-0.5, 12.5). The y-intercept is (0, 12). The parabola opens down since the value of a is negative. The vertex is a maximum value because the parabola opens downward and it is the highest point of the graph."
};
const myCalc3 = () => {
    document.getElementById("demo3").innerHTML = myProblem3();
};