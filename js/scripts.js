
function ajaxGET(url, callback) {

    const xhr = new XMLHttpRequest();

    // knock knock
    let value = null;

    //console.log("xhr", xhr);
    xhr.onload = function () {
        value = this.responseText;
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            //console.log('responseText:' + xhr.responseText);

            // callback function
            value = this.responseText;
            callback(this.responseText);

        } else {
            console.log(this.status);
        }
    }
    xhr.open("GET", url);
    xhr.send();

}

document.querySelector("#btn1").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "";
        document.getElementById("movie1").innerHTML = str;
        document.getElementById("movie1").style.display = "none";
    });
});

document.querySelector("#btn2").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "";
        document.getElementById("movie2").innerHTML = str;
        document.getElementById("movie2").style.display = "none";
    });
});

document.querySelector("#btn3").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "";
        document.getElementById("movie3").innerHTML = str;
        document.getElementById("movie3").style.display = "none";
    });
});

document.querySelector("#btn4").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "";
        document.getElementById("movie4").innerHTML = str;
        document.getElementById("movie4").style.display = "none";
    });
});

document.querySelector("#btn5").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "";
        document.getElementById("movie5").innerHTML = str;
        document.getElementById("movie5").style.display = "none";
    });
});

document.querySelector("#btn6").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "";
        document.getElementById("movie6").innerHTML = str;
        document.getElementById("movie6").style.display = "none";
    });
});

document.querySelector("#btn7").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "";
        document.getElementById("movie7").innerHTML = str;
        document.getElementById("movie7").style.display = "none";
    });
});

document.querySelector("#btn8").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "";
        document.getElementById("movie8").innerHTML = str;
        document.getElementById("movie8").style.display = "none";
    });
});

document.querySelector("#btn9").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "";
        document.getElementById("movie9").innerHTML = str;
        document.getElementById("movie9").style.display = "none";
    });
});

document.querySelector("#btn10").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "";
        document.getElementById("movie10").innerHTML = str;
        document.getElementById("movie10").style.display = "none";
    });
});

document.querySelector("#btn11").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=html", function (data) {
        let str = "";
        document.getElementById("movie11").innerHTML = str;
        document.getElementById("movie11").style.display = "none";
    });
});

document.querySelector("#btn12").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=html1", function (data) {
        let str = "";
        document.getElementById("movie12").innerHTML = str;
        document.getElementById("movie12").style.display = "none";
    });
});

document.querySelector("#btn13").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=html2", function (data) {
        let str = "";
        document.getElementById("movie13").innerHTML = str;
        document.getElementById("movie13").style.display = "none";
    });
});

document.querySelector("#btn14").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=html3", function (data) {
        let str = "";
        document.getElementById("movie14").innerHTML = str;
        document.getElementById("movie14").style.display = "none";
    });
});

document.querySelector("#btn15").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=html4", function (data) {
        let str = "";
        document.getElementById("movie15").innerHTML = str;
        document.getElementById("movie15").style.display = "none";
    });
});

document.querySelector("#btn16").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=html5", function (data) {
        let str = "";
        document.getElementById("movie16").innerHTML = str;
        document.getElementById("movie16").style.display = "none";
    });
});

document.querySelector("#btn17").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=html6", function (data) {
        let str = "";
        document.getElementById("movie17").innerHTML = str;
        document.getElementById("movie17").style.display = "none";
    });
});

document.querySelector("#btn18").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=html7", function (data) {
        let str = "";
        document.getElementById("movie18").innerHTML = str;
        document.getElementById("movie18").style.display = "none";
    });
});

document.querySelector("#btn19").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=html8", function (data) {
        let str = "";
        document.getElementById("movie19").innerHTML = str;
        document.getElementById("movie19").style.display = "none";
    });
});

document.querySelector("#btn20").addEventListener("focusout", function (e) {
    ajaxGET("/movies?format=html9", function (data) {
        let str = "";
        document.getElementById("movie20").innerHTML = str;
        document.getElementById("movie20").style.display = "none";
    });
});

document.querySelector("#btn1").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<div>";
            let item = parsedData[0];
            str += "<h1>" + item["Moviename"] + "</h1><br><p>" + item["Genre"] + " &#8226; " +  item["Duration"]  + " &#8226; " + item["Rated"]  + "<p><br><h3>Description:</h3><p>" + item["Description"] + "<p><p><br>"
            + "<video id = \"trailer1\" width = \"200\" height = \"100\" autoplay><source src= \"\\videos\\Avengers.mp4\" type=\"video/mp4\" controls></video>";
        str += "</div>";
        document.getElementById("movie1").innerHTML = str;
        document.getElementById("movie1").style.display = "inline-block";
    });

    
});

document.querySelector("#btn2").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<div>";
            let item = parsedData[1];
            str += "<h1>" + item["Moviename"] + "</h1><br><p>" + item["Genre"] + " &#8226; " +  item["Duration"]  + " &#8226; " + item["Rated"]  + "<p><br><h3>Description:</h3><p>" + item["Description"] + "<p><p><br>"
            + "<video id = \"trailer2\" width = \"200\" height = \"100\" autoplay><source src= \"\\videos\\Whiplash.mp4\" type=\"video/mp4\" controls></video>";
        document.getElementById("movie2").innerHTML = str;
        document.getElementById("movie2").style.display = "inline-block";
    });

    
});
document.querySelector("#btn3").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<div>";
            let item = parsedData[2];
            str += "<h1>" + item["Moviename"] + "</h1><br><p>" + item["Genre"] + " &#8226; " +  item["Duration"]  + " &#8226; " + item["Rated"]  + "<p><br><h3>Description:</h3><p>" + item["Description"] + "<p><p><br>"
            + "<video id = \"trailer3\" width = \"200\" height = \"100\" autoplay><source src= \"\\videos\\Thelegomovie.mp4\" type=\"video/mp4\" controls></video>";
        document.getElementById("movie3").innerHTML = str;
        document.getElementById("movie3").style.display = "inline-block";
    });

    
});

document.querySelector("#btn4").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<div>";
            let item = parsedData[3];
            str += "<h1>" + item["Moviename"] + "</h1><br><p>" + item["Genre"] + " &#8226; " +  item["Duration"]  + " &#8226; " + item["Rated"]  + "<p><br><h3>Description:</h3><p>" + item["Description"] + "<p><p><br>"
            + "<video id = \"trailer4\" width = \"200\" height = \"100\" autoplay><source src= \"\\videos\\Goodwillhunting.mp4\" type=\"video/mp4\" controls></video>";
        document.getElementById("movie4").innerHTML = str;
        document.getElementById("movie4").style.display = "inline-block";
    });

    
});

document.querySelector("#btn5").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<div>";
            let item = parsedData[4];
            str += "<h1>" + item["Moviename"] + "</h1><br><p>" + item["Genre"] + " &#8226; " +  item["Duration"]  + " &#8226; " + item["Rated"]  + "<p><br><h3>Description:</h3><p>" + item["Description"] + "<p><p><br>"
            + "<video id = \"trailer5\" width = \"200\" height = \"100\" autoplay><source src= \"\\videos\\Rushhour.mp4\" type=\"video/mp4\" controls></video>";
        document.getElementById("movie5").innerHTML = str;
        document.getElementById("movie5").style.display = "inline-block";
    });

    
});

document.querySelector("#btn6").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<div>";
            let item = parsedData[5];
            str += "<h1>" + item["Moviename"] + "</h1><br><p>" + item["Genre"] + " &#8226; " +  item["Duration"]  + " &#8226; " + item["Rated"]  + "<p><br><h3>Description:</h3><p>" + item["Description"] + "<p><p><br>"
            + "<video id = \"trailer6\" width = \"200\" height = \"100\" autoplay><source src= \"\\videos\\Spiderman.mp4\" type=\"video/mp4\" controls></video>";
        document.getElementById("movie6").innerHTML = str;
        document.getElementById("movie6").style.display = "inline-block";
    });

    
});

document.querySelector("#btn7").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<div>";
            let item = parsedData[6];
            str += "<h1>" + item["Moviename"] + "</h1><br><p>" + item["Genre"] + " &#8226; " +  item["Duration"]  + " &#8226; " + item["Rated"]  + "<p><br><h3>Description:</h3><p>" + item["Description"] + "<p><p><br>"
            + "<video id = \"trailer7\" width = \"200\" height = \"100\" autoplay><source src= \"\\videos\\Goodfellas.mp4\" type=\"video/mp4\" controls></video>";
        document.getElementById("movie7").innerHTML = str;
        document.getElementById("movie7").style.display = "inline-block";
    });

    
});

document.querySelector("#btn8").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<div>";
            let item = parsedData[7];
            str += "<h1>" + item["Moviename"] + "</h1><br><p>" + item["Genre"] + " &#8226; " +  item["Duration"]  + " &#8226; " + item["Rated"]  + "<p><br><h3>Description:</h3><p>" + item["Description"] + "<p><p><br>"
            + "<video id = \"trailer8\" width = \"200\" height = \"100\" autoplay><source src= \"\\videos\\Wolf.mp4\" type=\"video/mp4\" controls></video>";
        document.getElementById("movie8").innerHTML = str;
        document.getElementById("movie8").style.display = "inline-block";
    });

    
});

document.querySelector("#btn9").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<div>";
            let item = parsedData[8];
            str += "<h1>" + item["Moviename"] + "</h1><br><p>" + item["Genre"] + " &#8226; " +  item["Duration"]  + " &#8226; " + item["Rated"]  + "<p><br><h3>Description:</h3><p>" + item["Description"] + "<p><p><br>"
            + "<video id = \"trailer9\" width = \"200\" height = \"100\" autoplay><source src= \"\\videos\\Superbad.mp4\" type=\"video/mp4\" controls></video>";
        document.getElementById("movie9").innerHTML = str;
        document.getElementById("movie9").style.display = "inline-block";
    });

    
});

document.querySelector("#btn10").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=json", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<div>";
            let item = parsedData[9];
            str += "<h1>" + item["Moviename"] + "</h1><br><p>" + item["Genre"] + " &#8226; " +  item["Duration"]  + " &#8226; " + item["Rated"]  + "<p><br><h3>Description:</h3><p>" + item["Description"] + "<p><p><br>"
            + "<video id = \"trailer10\" width = \"200\" height = \"100\" autoplay><source src= \"\\videos\\Green Book.mp4\" type=\"video/mp4\" controls></video>";
        document.getElementById("movie10").innerHTML = str;
        document.getElementById("movie10").style.display = "inline-block";
    });

    
});



document.querySelector("#btn11").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=html", function (data) {
       

        document.getElementById("movie11").innerHTML = data;
        document.getElementById("movie11").style.display = "inline-block";
    });
});

document.querySelector("#btn12").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=html1", function (data) {
       
        
        document.getElementById("movie12").innerHTML = data;
        document.getElementById("movie12").style.display = "inline-block";
    });
});

document.querySelector("#btn13").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=html2", function (data) {
       
        
        document.getElementById("movie13").innerHTML = data;
        document.getElementById("movie13").style.display = "inline-block";
    });
});

document.querySelector("#btn14").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=html3", function (data) {
       
        
        document.getElementById("movie14").innerHTML = data;
        document.getElementById("movie14").style.display = "inline-block";
    });
});

document.querySelector("#btn15").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=html4", function (data) {
       
        
        document.getElementById("movie15").innerHTML = data;
        document.getElementById("movie15").style.display = "inline-block";
    });
});

document.querySelector("#btn16").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=html5", function (data) {
       
        
        document.getElementById("movie16").innerHTML = data;
        document.getElementById("movie16").style.display = "inline-block";
    });
});

document.querySelector("#btn17").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=html6", function (data) {
       
        
        document.getElementById("movie17").innerHTML = data;
        document.getElementById("movie17").style.display = "inline-block";
    });
});

document.querySelector("#btn18").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=html7", function (data) {
       
        
        document.getElementById("movie18").innerHTML = data;
        document.getElementById("movie18").style.display = "inline-block";
    });
});

document.querySelector("#btn19").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=html8", function (data) {
       
        
        document.getElementById("movie19").innerHTML = data;
        document.getElementById("movie19").style.display = "inline-block";
    });
});

document.querySelector("#btn20").addEventListener("focusin", function (e) {
    ajaxGET("/movies?format=html9", function (data) {
       
        
        document.getElementById("movie20").innerHTML = data;
        document.getElementById("movie20").style.display = "inline-block";
    });
});

//This was an attempt at a dropdown-menu gave up to work on other implmentations
//document.querySelector("#dropdown-menu").addEventListener("click", function(e ){
   // ajaxGET("/movies?format=html10", function (data) {
    //console.log(data);

    //document.getElementById("dropdown").innerHTML = data;
    //});
//});

















    

    
