// Vue.component('round-detail', {
//     data() {
//         return {
//             deleted: false,
//         }
//     },
//     template: `
//     <div v-if='!deleted'>
//         <ul>
//             <li>Round #: TBD</li>
//             <li>Winner: TBD</li>
//         </ul>
//         <button @click='deleteRound'>Delete round</button>
//     </div>
//     `,
//     methods: {
//         deleteRound() {
//             this.deleted = true;
//         }
//     }
// })

Vue.component('round-detail', {
    data: function(){
        return {
            deleted: false
        }
    },
    props: ['number', 'winner'],
    template: '#round-detail',
    methods: {
        deleteRound: function () {
            this.deleted = true;
        }
    }
})

// The Vue instance
const app = new Vue({
    el: '#app',
    data: {
        Histories: [],

        computerSelection: '',
        computerScore: 0,

        playerSelection: '',
        playerScore: 0,

        round: 1,
        rounds: [],

        roundCount: 0,
        roundCount2: null,

        tossResult: '',
        winner: '',
        randNumber: 0,
        rounds: [
            { number: 1, winner: 'Players' },
            { number: 2, winner: 'Computers' },
        ]
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
                this.Histories.push('Player won round ' + this.roundCount);
            }
            else {
                // 1- Show computer is winner 
                this.winner = 'Computer won the toss';

                // 2- increase computer score
                this.computerScore++;

                // 3- add to history that computer won roundCount
                this.Histories.push('Computer won round ' + this.roundCount);
            }
        },
        reset(length) {
            this.Histories.splice(0, length);
            this.roundCount = 0;
            this.playerScore = 0;
            this.computerScore = 0;
            this.tossResult = '';
            this.playerSelection = 0;
            this.computerSelection = 0;
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