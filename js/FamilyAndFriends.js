function dropData() {
    let ffData = "js/FriendsAndFamily.json";
    let http_request = new XMLHttpRequest();
    try {
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();

    } catch (e) {
        // Internet Explorer Browsers
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // Something went wrong
                alert("Your browser broke!");
            }
        }
    }
    http_request.onreadystatechange = function () {
        if(http_request.readyState == 4) {
            let jsonObj = JSON.parse(http_request.responseText);
            let dropSel = document.getElementById("dropSel").value;
            let lnameSel = document.getElementById("lnameSel").value;
            let relationSel = document.getElementById("relationSel").value;
            let fname = "";
            for(let i = 0; i < jsonObj.people.length; i++) {
                // Checks only for first name selection and nothing else.
                if(jsonObj.people[i].name == dropSel && lnameSel == 0 && relationSel == 0) {
                    fname += "<div class=\"text-left border-top flex-row\"><p>First Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].name + "</span></p>";
                    fname += "<p>Last Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].lname + "</span></p>";
                    fname += "<p>Relation: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].relation + "</span></p></div>";
                }
                // Checks all three selections.
                else if(jsonObj.people[i].lname == lnameSel && jsonObj.people[i].relation == relationSel && jsonObj.people[i].name == dropSel) {
                    fname += "<div class=\"text-left border-top flex-row\"><p>First Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].name + "</span></p>";
                    fname += "<p>Last Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].lname + "</span></p>";
                    fname += "<p>Relation: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].relation + "</span></p></div>";
                }
                // Checks only for last name selection and nothing else.
                else if(jsonObj.people[i].lname == lnameSel && relationSel == 0 && dropSel == 0) {
                    fname += "<div class=\"text-left border-top flex-row\"><p>First Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].name + "</span></p>";
                    fname += "<p>Last Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].lname + "</span></p>";
                    fname += "<p>Relation: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].relation + "</span></p></div>";
                }
                //Checks for a selection in last name and relation, but not first name.
                else if(jsonObj.people[i].lname == lnameSel && jsonObj.people[i].relation == relationSel && dropSel == 0) {
                    fname += "<div class=\"text-left border-top flex-row\"><p>First Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].name + "</span></p>";
                    fname += "<p>Last Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].lname + "</span></p>";
                    fname += "<p>Relation: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].relation + "</span></p></div>";
                }
                // Checks only for the relation selected and shows associated properties.
                else if(jsonObj.people[i].relation == relationSel && dropSel == 0 && lnameSel == 0) {
                    fname += "<div class=\"text-left border-top flex-row\"><p>First Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].name + "</span></p>";
                    fname += "<p>Last Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].lname + "</span></p>";
                    fname += "<p>Relation: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].relation + "</span></p></div>";
                }
                // If nothing is selected or all values are equal to 0 then show the whole list.
                else if(dropSel == 0 && lnameSel == 0 && relationSel == 0) {
                    fname += "<div class=\"text-left border-top flex-row\"><p>First Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].name + "</span></p>";
                    fname += "<p>Last Name: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].lname + "</span></p>";
                    fname += "<p>Relation: <span class=\"text-light font-weight-bold\">" + jsonObj.people[i].relation + "</span></p></div>";
                }
            }
            document.getElementById("fname").innerHTML = fname;
        }
    }       
    http_request.open("GET", ffData, true);
    http_request.send();
}
window.addEventListener("load", () => {
    var data_file = "js/FriendsAndFamily.json";
    var http_request = new XMLHttpRequest();

    try {
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();

    } catch (e) {
        // Internet Explorer Browsers
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // Something went wrong
                alert("Your browser broke!");
            }
        }
    }
    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4) {
            let jsonObj = JSON.parse(http_request.responseText);
            let fname = "<optgroup label=\"First Name\"><option value='0'>--</option>";
            document.getElementById("lnameSel").innerHTML += "<optgroup label=\"Last Name\"><option value='0'>--</option>";
            document.getElementById("relationSel").innerHTML += "<optgroup label=\"Relation\"><option value='0'>--</option>";
            for (let i = 0; i < jsonObj.people.length; i++) {
               fname += "<option value='" + jsonObj.people[i].name +"'> " + jsonObj.people[i].name + " </option>";

               //Checks the options for duplicates and if they're a duplicate record it adds nothing.
               if(document.getElementById("lnameSel").innerHTML.includes(jsonObj.people[i].lname) == false) {
                document.getElementById("lnameSel").innerHTML += "<option value='" + jsonObj.people[i].lname +"'> " + jsonObj.people[i].lname + " </option>";
                }
                if (document.getElementById("relationSel").innerHTML.includes(jsonObj.people[i].relation) == false) {
                    document.getElementById("relationSel").innerHTML += "<option value='" + jsonObj.people[i].relation +"'> " + jsonObj.people[i].relation + " </option>";
                }
            }
            document.getElementById("dropSel").innerHTML = fname + "</optgroup>";
            document.getElementById("lnameSel").innerHTML += "</optgroup>";
            document.getElementById("relationSel").innerHTML += "</optgroup>";
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
})