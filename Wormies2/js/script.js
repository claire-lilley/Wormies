
document.addEventListener('DOMContentLoaded', ()=>{
    var highScoreForm = document.querySelector('#highScoreForm');
    var modalElms = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modalElms);

    var addScoresModal = document.querySelector('#addScoresModal');
    var instance = M.Modal.getInstance(addScoresModal);

    var finalScore = document.querySelector('#finalScore');
    // Displaying the modal when the timeruns out by using the modal ID name on HTML
    var wormiesGame = document.querySelector('.wormies-content-container');
    // this hides the game when the timer ends 
    var timer = document.querySelector('#timer');
    var timeLeft = 30;
    timer.innerHTML = timeLeft;
    var timerId = setInterval(() => {
        if (timeLeft == 0){
            clearTimeout()
            console.log('finished');
            finalScore.innerHTML = score;
            wormiesGame.style.display = 'none';
            instance.open();
        }
        else {
            timer.innerHTML = timeLeft;
            timeLeft --;
        }
    }, 1000);


    highScoreForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        console.log(highScoreForm.name.value);
        db.collection('scoreBoard').doc().set({

            name:  highScoreForm.name.value,
            score: score

         }).then(()=>{
             highScoreForm.name.value = '';
             score = 0;

            
           location.reload();
        })
        })
})