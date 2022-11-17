$( "button.continue" ).html( "Next Step..." )


var hiddenBox = $( "#banner-message" );
$( "#button-container button" ).on( "click", function( event ) {
    hiddenBox.show();
});


$.ajax({
    url: "/api/getWeather",
    data: {
        zipcode: 97201
    },
    success: function( result ) {
        $( "#content-contianer" ).html( "<strong>" + result + "</strong> degrees" );
    }
});


var Product = document.getElementById("Product");
    var small = document.getElementsByClassName("small-img");
    var demo = document.querySelectorAll(".d");
    function box() {
        demo.forEach(demo => demo.classList.remove('active'));
        this.classList.add('active');
        for (let i = 0; i <= 4; i++) {
            small[i].onclick = function () {
                Product.src = small[i].src;
            }
        }
    }
    demo.forEach(demo => demo.addEventListener('click', box));
    // for (let i = 0; i <= 4; i++) {
    //     small[i].onclick = function () {
    //         Product.src = small[i].src;
    //     }
    // }
    var num_item = 1;
    var price_total = 3890;
    let boxx = 0;
    var numt =  0;
    $(document).ready(function () {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            num_item -= 1;
            if (num_item <= 0) {
                num_item = 1;
            }
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            num_item += 1;
            return false;
        });
    });

    function On() {
        var x = document.getElementById("c-cart");
        var y = document.getElementById("c-2");
        x.classList.add("animate-cart");
        y.classList.add("go-left");
        x.classList.remove("move-out-right");
        y.classList.remove("move-out-left");
    }
    function cart() {
        // slideeeeeeeeeeeeeeeeeeeeeeeeeeeee //
        var x = document.getElementById("c-cart");
        var y = document.getElementById("c-2");
        x.classList.add("animate-cart");
        y.classList.add("go-left");
        x.classList.remove("move-out-right");
        y.classList.remove("move-out-left");
        // close - slideeeeeeeeeeeeeeeeeeeeeeeeeeeee //
        var text = document.createTextNode("Keychron K2 V.2 Wireless Hot-swappable Mechanical Keyboard");
        var g1 = document.getElementsByName('group-1');
        var g2 = document.getElementsByName('group-2');
        var g3 = document.getElementsByName('group-3');
        var mid = document.getElementById("mid");
        var br = document.createElement("br");
        var hr = document.createElement("hr");
        var big_box = document.createElement("div");

        big_box.classList.add("detail-cart");
        big_box.id = "detail-big";
        mid.appendChild(big_box);
        // create box inner right-cart //
        var div_detail = document.createElement("div");
        var div_price = document.createElement("div");
        var div_input = document.createElement("div");
        var ptag = document.createElement("h5");
        var ptag2 = document.createElement("p");
        var price = document.createElement("span");
        var big_right = document.createElement("div");
        big_right.classList.add("right-cart");
        big_right.id = "cart-right";
        big_right.appendChild(div_detail);
        ptag.id = "de-cart";
        price.id = "price-cart";
        ptag2.id = "item-value"
        ptag.appendChild(text);
        div_detail.classList.add("detail-add-cart");
        div_detail.id = "detail-add";
        div_price.classList.add("price-cart-b");
        div_input.classList.add("number-cart")
        div_input.id = "num-box";
        div_price.appendChild(div_input);
        div_price.appendChild(price);
        div_detail.appendChild(ptag);
        div_detail.appendChild(ptag2);
        div_detail.appendChild(div_price);
        div_detail.appendChild(br);
        //
        // create box inner right-cart //
        for (var i = 0; i < g1.length; i++) {
            if (g1[i].checked) {
                var text = g1[i].value;
                var t = document.createTextNode(text+" / ");
                ptag2.appendChild(t);
            }
        }
        for (var i = 0; i < g2.length; i++) {
            if (g2[i].checked) {
                var text = g2[i].value;
                var t = document.createTextNode(text+" / ");
                ptag2.appendChild(t);
            }
        }
        for (var i = 0; i < g3.length; i++) {
            if (g3[i].checked) {
                var text = g3[i].value;
                var t = document.createTextNode(text);
                ptag2.appendChild(t);
            }
        }
        // ---------------------cal---------------------- //
        // $(document).ready(function () {
        //     $('.num2').prop('disabled', true);
        //     $(document).on('click', '.plux', function () {
        //         $('.num2').val(parseInt($('.num2').val()) + 1);
        //     });
        //     $(document).on('click', '.min', function () {
        //         $('.num2').val(parseInt($('.num2').val()) - 1);
        //         if ($('.num2').val() == 0) {
        //             $('.num2').val(1);
        //             big_box.remove();
        //         }
        //     });
        // });


        //--------------------ทำปุ่มเพิ่มของ--------------------//
        var oper1 = document.createElement("span");
        var oper2 = document.createElement("span");
        var amount = document.createElement("span");
        var pp = document.createTextNode("+");
        var mm = document.createTextNode("-");
        oper1.classList.add("min");
        oper2.classList.add("plux");
        amount.classList.add("num2");
        // amount.type = "text";
        // amount.value = num_item;
        amount.innerHTML = num_item;
        amount.id = "amount";
        oper1.appendChild(mm);
        oper2.appendChild(pp);
        div_input.appendChild(oper1);
        div_input.appendChild(amount);
        div_input.appendChild(oper2);
        //--------------------ทำปุ่มเพิ่มของ--------------------//
        // -------------------------------cal----------------------- //
        boxx += num_item * price_total;
        var total = document.getElementById("total");
        total.innerHTML = boxx + ".00 B";
        numt += num_item;
        var l1 = document.getElementById("line1");
        var sub = document.getElementById("sub1")
        $(document).ready(function () {
            oper1.onclick = function() {
                var num = amount.innerHTML;
                num -= 1;
                numt -= 1;
                boxx -= 3890;
                if ((numt <= 0) || (num <= 0 )) {
                    big_box.remove();
                }
                else if(numt == 0){
                    boxx = 0;
                }
                amount.innerHTML = num;

                total.innerHTML = boxx + ".00 B";
            };
            oper2.onclick = function() {
                var num = parseInt(amount.innerHTML);
                num += 1;
                numt += 1;
                boxx += 3890;
                amount.innerHTML = num;
                total.innerHTML = boxx + ".00 B";

            };
        });
        // $(document).ready(function () {
        //     $('.min').click(function () {
        //         var $input = $(this).parent().find('input');
        //         var num = parseInt($input.val()) - 1;

        //         numt -= 1;
        //         boxx -= 3890;
        //         if ((numt <= 0) || (num <= 0 )) {
        //             big_box.remove();
        //         }
        //         else if(numt == 0){
        //             boxx = 0;
        //         }
        //         $input.val(num);

        //         total.innerHTML = boxx + ".00 B" +numt;
        //     });
        //     $('.plux').click(function () {
        //         var $input = $(this).parent().find('input');
        //         var num = parseInt($input.val()) + 1;
        //         numt += 1;
        //         $input.val(num);

        //         boxx += 3890;
        //         total.innerHTML = boxx + ".00 B";

        //     });
        // });
        // --------------------------------close cal -------------------------- //

        var p_price = document.createTextNode("3,890.00 B")
        price.appendChild(p_price);

        // ----------------------pic-------------------- //

        var cart_left = document.createElement("div");
        cart_left.classList.add("left-cart");
        var pic = document.createElement("div");
        pic.classList.add("img-add");
        pic.id = "img-cart-add";
        cart_left.appendChild(pic);
        // var pic = document.getElementById("img-cart-add");
        var ele = document.createElement("img");
        if (g1[0].checked && g2[0].checked) {
            ele.src = "img/k2-red.png";
            pic.appendChild(ele);
        }
        else if (g1[0].checked && g2[1].checked) {
            ele.src = "img/k2-blue-black.png";
            pic.appendChild(ele);
        }
        else if (g1[0].checked && g2[2].checked) {
            ele.src = "img/k2-brown.png";
            pic.appendChild(ele);
        }
        else if (g1[1].checked && g2[0].checked) {
            ele.src = "img/red-li.jpg";
            pic.appendChild(ele);
        }
        else if (g1[1].checked && g2[1].checked) {
            ele.src = "img/k2-bblue.png";
            pic.appendChild(ele);
        }
        else if (g1[1].checked && g2[2].checked) {
            ele.src = "img/brown-li.jpg";
            pic.appendChild(ele);
        }
        big_box.appendChild(cart_left);
        big_box.appendChild(big_right);

    }
    function Change() {
        var x = document.getElementById("c-cart");
        var y = document.getElementById("c-2");
        x.classList.add("move-out-right");
        y.classList.add("move-out-left");
        x.classList.remove("animate-cart");
        y.classList.remove("go-left");
    }
