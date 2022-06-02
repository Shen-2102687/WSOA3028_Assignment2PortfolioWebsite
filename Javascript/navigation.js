/*function navigate(){
    switch(document.getElementById()){
        case "Home":
            console.log("go to games");
            window.location.href = "../../Games/games.html";
            break;
    }
}

$(window).on("click", ".navBar", navigate2());

function navigate2(){
    switch(document.onclick){
        case document.getElementById('Home'):
            console.log("go to home");
            window.location.href = "../index.html";
            break;
    }
}*/

//$(window).on("click", ".navBar", navigate3());

/*function navigate3(){
    switch(document.getElementsByClassName("navBar")){
        case document.getElementById("Home"):
            console.log("go to home");
            window.location.href = "../index.html";
            break;
    }
}*/

/*function navigate2(){
    switch(document.onclick){
        case document.getElementById('Home'):
            console.log("go to home");
            window.location.href = "../index.html";
            break;
        case document.getElementById('Games'):
            window.location.href = "../../Games/games.html";
            break;
    }
}*/




/*function navigate4(){
    window.location.href = "../../Games/games.html";
}*/

/*function navigate5(pages){
    switch(document.getElementById(pages)){
        case pages == "Home":
            window.location.href = "../../Games/games.html";
            break;
    }
}*/

//let p = "x";


function navigate5(pages){
    console.log("running good");
    console.log("pages is equal to:" + pages);
    switch(pages){
        case 1:
            console.log("tostring here");
            window.location.href = "/index.html";
            break;
        case 2:
            window.location.href = "/Games/games.html";
            break;
        case 3:
            window.location.href = "Code Projects/codeProjects.html";
            break;
        case 4:
            window.location.href = "Blog/blog.html";
            break;
        case 5:
            window.location.href = "Design Doc Page/design.html";//This file referencing style works for java in github
            break; 
    }
}