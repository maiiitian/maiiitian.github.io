$('div.scroll-down a').on('click',function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },
        "slow");
    }
});

// $(document).ready(function ($) {
    // $(".scroll-down").click(function (event) {
    //     event.preventDefault();
    //     $('html,body').animate({scrollTop: $(this.hash).offset().top}, "slow");
    // });
// });
