
// initialize map : set aria-current = false & origin color to all departments
function initialize() {
    let departments = document.getElementsByTagName("path");
    for (let department of departments) {
        department.setAttribute("aria-current", "false");
        department.setAttribute("fill", "#E3E3FD");
    };
};


// close the div department_info
let department_close = document.getElementById("department_close");

department_close.addEventListener("click", function() {
    document.getElementById("department_info").style.display = "none";
    
    initialize();
});


// interactions with departments
let departments = document.getElementById("map_departments").childNodes;

departments.forEach(function(department) {

    // on mouseenter : set aria-current = false & change color to blue-france-sun-113
    department.addEventListener("mouseenter", function() {
        if(this.getAttribute("aria-current") == null) {
            this.setAttribute("aria-current", "false");
        }
        this.setAttribute("fill", "#000091");
    });
    
    // on mouseleave : set original color if aria-current != true
    department.addEventListener("mouseleave", function() {
        if(this.getAttribute("aria-current") != "true") {
            this.setAttribute("fill", "#E3E3FD");
        };
    });

    // on click :   1 set aria-current = false & origin color to all departments
    //              2 set aria-current = true & color blue-france-sun-113 to the current department clicked
    //              3 change textContent for the new department clicked
    department.addEventListener("click", function() {

        // display block in case department_info has been closed
        document.getElementById("department_info").style.display = "block";

        // 1
        initialize();
        
        // 2
        this.setAttribute("aria-current", "true");
        this.setAttribute("fill", "#000091");

        // 3
        document.getElementById("department_name").textContent = "Département (XX)";
        document.getElementById("department_text").textContent = "Description pour ce département sélectionné.";
        // (in case I have and know these contents attached of course, I firstly get their values to set and attribute them)
    });
});
