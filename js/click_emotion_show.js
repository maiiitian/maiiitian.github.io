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


