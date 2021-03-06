// Vue Component:
Vue.component('round-detail', {
    data: function () {
        return {
            deleted: false
        }
    },
    props: ['history'],
    template: `
            <ul>
                <li> {{ history[1] }}</li>
            </ul>
    `,
})

// The Vue instance
const app = new Vue({
    el: '#app',
    data: {
        Histories: [],
        history: '',
        computerSelection: '',
        computerScore: 0,
        playerSelection: '',
        playerScore: 0,
        roundCount: 0,
        tossResult: '',
        winner: '',
        randNumber: 0,
        correct: null,
    },
    methods: {
        flip() {
            // Increase the round number upon flipping:
            this.roundCount++;

            // Generate randon tossResult either heads or tails:
            //   1- Get Randon Number between 1 and 2:
            var randNumber = Math.floor((Math.random() * 2) + 1);

            //   2- Assign heads if the random number is 1:
            if (randNumber == 1) {
                this.tossResult = 'heads';
            }
            else {
                //   3- Assign tails if the random number is 2:
                if (randNumber == 2) {
                    this.tossResult = 'tails';
                }
            }

            // compare the random number to the player's selection, and decide who won the toss:
            if (this.playerSelection == this.tossResult) {
                // 1- show player is winner:
                this.winner = 'You won the toss';

                // 2- increase player score, 
                this.playerScore++;

                // 3- add to history array that player won roundCount
                this.Histories.push([this.roundCount, 'Player won round ' + this.roundCount]);

                // 4- Set correct to true so the class binding color works
                this.correct = true;
            }
            else {
                // 1- Show computer is winner 
                this.winner = 'Computer won the toss';

                // 2- increase computer score
                this.computerScore++;

                // 3- add to history that computer won roundCount
                this.Histories.push([this.roundCount, 'Computer won round ' + this.roundCount]);

                // 4- Set correct to true so the class binding color works
                this.correct = false;
            }
        },
        reset(length) {
            this.Histories.splice(0, length);
            this.roundCount = 0;
            this.playerScore = 0;
            this.computerScore = 0;
            this.tossResult = '';
            this.playerSelection = '';
            this.computerSelection = 0;
            this.winner = '';
            this.correct = null;
        },
    },
    watch: {
        playerSelection(val) {
            if (val == 'heads') {
                this.computerSelection = 'tails';
            } else {
                if (val == 'tails') {
                    this.computerSelection = 'heads';
                }
            }
        },
    }
})