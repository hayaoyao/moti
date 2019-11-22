   $(function () {
        var $top;
        function tutop() {
            $top = $('.data').offset().top - 600;
        }
        tutop();
        $(window).resize(function () {
            tutop();
        });
        var c = true;
        $(window).scroll(function () {
            if ($(window).scrollTop() > $top && c) {

                c = false;
                $('.statistics').each(function () {
                    $(".count").appear(function () {
                        var counter = $(this).attr('data-start') * 1;

                        $(this).countTo({
                            from: 1,
                            to: counter,
                            speed: 1000,
                            refreshInterval: 60,
                        });
                    });
                });
            }

        });
        $('#more').click(function(){
        	$('.honorBox').css({'height':'auto','overflow':'visible'});
        	$('#more').hide();
        })
    });
