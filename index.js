var courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];
var inputData = [null, 200];
var filterCourses = function (coursesList, range) {
    return coursesList.filter(function (_a) {
        var prices = _a.prices;
        return prices[0] <= range[0] || prices[1] >= range[1];
    });
};
console.log(filterCourses(courses, inputData));
