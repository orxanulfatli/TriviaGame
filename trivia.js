




let game = {
    score: 0,
    questions: [
        {
            q: 'Baki haranin paytaxtidir',
            answer: ['Azerbaycan', 'Fransa', 'Ingiltere'],
            correctAnswer: 'Azerbaycan',
        },

        {
            q: 'Baki haranin paytaxtidir',
            answer: ['Fransa', 'Ingiltere', 'Azerbaycan'],
            correctAnswer: 'Azerbaycan'
        },

        {
            q: 'Baki haranin paytaxtidir',
            answer: ['Ingiltere', 'Azerbaycan', 'Fransa'],
            correctAnswer: 'Azerbaycan'
        },
    ],
    correct: 0,
    incorrect: 0,
    tl: 120,

    timer: function () {
        $('#saat').html(game.tl)
        game.tl--;
        if (game.tl === 0) {
            game.done();
        }
        setTimeout(game.timer, 1000)

    },
    printinfo: function () {
        var star=false
        game.timer()
        for (let i = 0; i < this.questions.length; i++) {
            let s = $('#goster')
            let a = this.questions[i].q;
            let n = $("<h2>" + a + '</h2>');

            s.append(n);
            for (let j = 0; j < this.questions[i].answer.length; j++) {
                var c = this.questions[i].answer[j]
                let ans = $('<input/>').attr({ type: 'radio', value: 'cvb' + i, 'data-answer': c,'data-question':i }).addClass('cavablar')

                let l = $("<label>")
                l.html(c)

                // console.log(ans.attr('data-answer'))
                // console.log(ans.attr('data-name'))

                s.append(ans)
                s.append(l)


            }

        }

    },
    done: function () {

        let inputlar = $('.cavablar:checked')
        // let sual=$('input').attr('data-question')
        // let cavab=$('input').attr('data-answer')
        
        inputlar.each(function (i) {
            if ($(this).attr('data-answer') === game.questions[i].correctAnswer) {
                game.correct++

            } else {
                game.incorrect++
            }
        })
    
        this.result();
    },
    result: function () {
        $("#goster").remove();
        $('#start').remove();
        $('#done').remove();
        $('body').append($('<h2>END GAME</h2>'));
        $('body').append($('<div>Correct Answers=>>' + game.correct + '</div>'));
        $('body').append($('<div>Incorrect Answers=>> ' + game.incorrect + '</div>'));

    }
}

$("#start").on('click', function () {
    game.printinfo()
    $('#start').remove()

    
})
$('#done').on('click', function () {
    game.done()
})

