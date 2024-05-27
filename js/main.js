$(document).ready(function() {

    let testimonio = 0;
    
    $("#next").click(function(){
        switch(testimonio){
            case 0:
                $("#fototestigo").attr("src", "./images/image-john.jpg");
                $("#description").html("“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”");
                $("#name").html("John Tarkpor");
                $("#job").html("Junior Front-end Developer");
                testimonio = 1;
                break;
            case 1:
                $("#fototestigo").attr("src", "./images/image-tanya.jpg");
                $("#description").html("“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”");
                $("#name").html("Tanya Sinclair");
                $("#job").html("UX Engineer");
                testimonio = 0;
                break;
        }
    });

    $("#prev").click(function(){
        switch(testimonio){
            case 0:
                $("#fototestigo").attr("src", "./images/image-john.jpg");
                $("#description").html("“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”");
                $("#name").html("John Tarkpor");
                $("#job").html("Junior Front-end Developer");
                testimonio = 1;
                break;
            case 1:
                $("#fototestigo").attr("src", "./images/image-tanya.jpg");
                $("#description").html("“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”");
                $("#name").html("Tanya Sinclair");
                $("#job").html("UX Engineer");
                testimonio = 0;
                break;
        }
    });
});