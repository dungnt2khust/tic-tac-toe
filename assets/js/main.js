var playing = false;

confirmPlay();

$('#start').click(() => {
    playing = true;
    confirmPlay();
    startGame();
});

$('#restart').click(() => {
    $('.square-img').hide();
});

function startGame() {
    var i = 0;
    $('.square').click((e) => {
        if (i % 2 == 0) {
            if (!e.target.classList.contains('square-img')) {
                e.target.querySelector('.square-img--x').style.display = 'none';
                e.target.querySelector('.square-img--o').style.display = 'block';
            }
        } else {
            if (!e.target.classList.contains('square-img')) {
                e.target.querySelector('.square-img--x').style.display = 'block';
                e.target.querySelector('.square-img--o').style.display = 'none';
            }
        }
        i++;
        if (i == 9) { 
            $('.result').text('CHAMPION');
            i = 0;
            setTimeout((function() {
                playing = false;
                confirmPlay();
                var answer = confirm('Do you wanna restart?');
                if (answer) {
                    $('.square-img').hide();
                }
            }), 1000); 
        }
    });
}

function confirmPlay() {
    if (playing == false) {
        $('.container').click(() => {
            alert('Press START to play game');
        });
    } else {
        $('.container').off();
    }
}