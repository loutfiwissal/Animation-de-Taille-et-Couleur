$(document).ready(function(){
    // var carre=document.getElementById("square");
    $square = $('#square')
    var size=100
    color = "blue"
    var colors = ['red','red', 'green', 'yellow'];
    var index = 0;
    $('#growButton').click(function(){
        size += 20;
        $square.css('width', size + 'px');
        $square.css('height', size + 'px');
    })
    $("#shrinkButton").click(function(){
        size -= 20;
        $square.css('width', size + 'px');
        $square.css('height', size + 'px');
    })
    $("#colorButton").click(function(){
        index = (index + 1);
         $square.css('background-color', colors[index]);

        // $square.css('height', size + 'px');
    })
    
})