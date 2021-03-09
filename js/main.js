// click_emotion_show
let emotionArray = ['(; _ ;)', '(^ V ^)?', '# = #', '(! . !)', '(* v *)', '$ ^ $'];
document.body.addEventListener('click', function (e) {
    let span = document.createElement('emotion');
    emotionArray.push(span.innerHTML = emotionArray.shift())
    span.style.left = e.pageX - 10 + 'px'
    span.style.top = e.pageY - 10 + 'px'

    setTimeout(() => span.remove(), 500)

    this.appendChild(span)
})



//scroll_down
$('div.scroll-down a').click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, "slow");
});



//mit-head-rotate
let x = 180;
let y = 0;
$(".mit-head").mouseenter(function () {

    $(".mit-head").css("transform", "rotate("+ x +"deg)");
    console.log(x); 
    x += 360;
});
$(".mit-head").mouseleave(function () {
    
    y += 360;
    $(".mit-head").css("transform", "rotate(" + y + "deg)");
    console.log(y+"y"); 

});





