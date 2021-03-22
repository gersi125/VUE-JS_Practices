function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    
    data(){
        return{
            monsterHealth: 2000,
            playerHealth:  2000,
            round:         0,
            winner:        null,
            logMessages:   []
        };
    },
    methods: {
        startGame() {
            this.monsterHealth = 2000;
            this.playerHealth = 2000;
            this.round = 0;
            this.winner = null;
            this.logMessages = [];
        },
        attackMonster() { 
            const attack = getRandomValue(15, 45); 
            if(this.monsterHealth - attack < 0)
            {
                this.monsterHealth = 0;
            } else {            
                this.monsterHealth -= attack;
            }
            this.addLogMsg('player', 'attack', attack);
            this.attackPlayer(); // just like data we can also access methods with "this"
<<<<<<< HEAD
            this.round ++;
=======
            this.currentRound ++;
>>>>>>> 7276ee01878363e0131b0a1e5e76eab5698dd1de
        },
        attackPlayer() {
            const attack = getRandomValue(20, 57);
            if(this.playerHealth - attack < 0) // Ensure that the life points don't get negative value
            {
                this.playerHealth = 0;
            } else {
                this.playerHealth -= attack;
            };
            this.addLogMsg('monster', 'attack', attack);
        },
        specialAttackMonster() {
            const attack = getRandomValue(20, 35);
            if(this.monsterHealth - attack < 0)
            {
                this.monsterHealth = 0;
            } else {            
                this.monsterHealth -= attack;
            }
            this.addLogMsg('player', 'special-attack', attack);
            this.attackPlayer();
<<<<<<< HEAD
            this.round ++;
=======
            this.currentRound ++;
>>>>>>> 7276ee01878363e0131b0a1e5e76eab5698dd1de
        },
        healPlayer() {
            const heal = getRandomValue(20, 50);
            if(this.playerHealth += heal > 2000)
            {
                this.playerHealth = 2000;
            } else { 
            this.playerHealth += heal; 
            };
            this.addLogMsg('player', 'self-healing', heal);
            this.attackPlayer();   
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMsg(who, what, value) {
            this.logMessages.unshift({
                actionBy:    who,
                actionType:  what,
                actionValue: value
            });
        }
    },
    computed: {
        monsterBarStyle() {
            if(this.monsterHealth >= 1000 && this.monsterHealth < 2000)
            {
                return { width: this.monsterHealth/20 + '%' };// Adapt 2000 life points to 100% measurement
            } 
            else if(this.monsterHealth >= 400 && this.monsterHealth < 1000)
            { 
                return{width: this.monsterHealth/20 + '%', 
                       background: '#a89d00' }
            } 
            else if(this.monsterHealth < 400)
            {
                return{width: this.monsterHealth/20 + '%', 
                       background: '#a3200f' }
            }
            else if(this.monsterHealth === 0)
            {
                return{ width:'0%' }    
            }
        },
        playerBarStyle() {
            if(this.playerHealth >= 1000 && this.playerHealth < 2000)
            {
                return { width: this.playerHealth/20 + '%' };
            } 
            else if(this.playerHealth >= 400 && this.playerHealth < 1000)
            {
                return{ width: this.playerHealth/20 + '%', 
                        background: '#a89d00' }
            } 
            else if(this.playerHealth < 400)
            {
                return{ width: this.playerHealth/20 + '%', 
                        background: '#a3200f'}
            }
            else if(this.playerHealth === 0)
            {
                return{width: '0%'}
            }
        },
        maySpecialAttack(round) {
            return this.round %3 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0) 
            { //Draw
                this.winner = 'draw';
            } 
            else if(value <= 0) 
            {//Player Loss
                this.winner = 'monster';
            };
        },
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0) 
            { //Draw
                this.winner = 'draw';
            } 
            else if (value <= 0) 
            {//Monster Loss
                this.winner = 'player';
            }
        }
    }
});

app.mount('#game');
