$(document).ready(function() {
    let input1 = $('#input1');
    let input2 = $('#input2');

    //Empty input values and set initial classes
    input1.val("");
    input2.val("");
    input1.addClass("focused");
    input2.removeClass("focused");

    //Add or remove classes, depending on focus status, to receive buttons' input   
    input1.on('focus', () => {
        input1.addClass("focused");
        $(".focused").css('border', '10px solid purple');
        input2.removeClass("focused");
        input2.css('border', '3px solid purple');;
    })

    input1.on('input', () => {
        $('#resultP').html("");
        updateI1();
    })

    input2.on('focus', () => {
        input2.addClass("focused");
        $(".focused").css('border', '10px solid purple');
        input1.removeClass("focused");
        input1.css('border', '3px solid purple');
    })

    input2.on('input', () => {
        $('#resultP').html("");
        updateI2();
    })

    //Update variables' values and log them on screen
    function updateI1() {
        x = Number(input1.val());
        
        $('#xLog').html(x);
    };

    function updateI2() {
        y = Number(input2.val());
        
        $('#yLog').html(y);
    }

    //Asign number buttons' input to focused input field
    const numButtons = $('#numbuttonsSection').children();

    numButtons.on('click', (e) => {
        $('#resultP').html("");

        let num = e.target.innerHTML;
        
        document.querySelector('.focused').value += num;
        
        updateI1();
        updateI2();
    })
    
    //Detect buttons' symbol
    const opButtons = $('#operationButtons').children();

    opButtons.on('click', (e) => {
        let sym = e.target.innerHTML;

        $('#opLog').html(sym);

        input2.addClass("focused");
        input1.removeClass("focused");
        $(".focused").css('border', '10px solid purple');
        input1.css('border', '3px solid purple');
    })

    //Asign correct operation and provide result
    $('#resultButton').on('click', () => {
        let operator = $('#opLog').html();
        let operation = "";

        switch(operator) {
            case operator = "+":
                operation = x + y;
                break;
            case operator = "-":
                operation = x - y;
                break;
            case operator = "*":
                operation = x * y;
                break;
            case operator = "/":
                operation = x / y;
                break;
            case operator = "<sup>2</sup>":
                operation = (x * x);
                break;
            case operator = "%":
                operation = (x * y) / 100;
                break;
            default:
                operation = "Please select an operation";
        }

        $('#resultP').html("= " + operation);

        input1.val("");
        input2.val("");
    })

    //Clear function
    $("#buttonC").on('click', () => {
        input1.val("");
        input2.val("");
        $('#xLog').html("");
        $('#opLog').html("");
        $('#yLog').html("");
        $('#resultP').html("");
    })
})