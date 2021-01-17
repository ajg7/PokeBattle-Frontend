export class BattleManager {
    constructor(playerScore, challengerScore) {
        this.playerScore = playerScore;
        this.challengerScore = challengerScore;
    }

    static random() {
        return Math.round(Math.random() * 150);
    }
    
    static evaluator(player, challenger) {
        const winningTypes = 
        [
            {
                fighting: ["normal", "rock", "steel", "ice", "dark"]
            },
            {
                flying: ["fighting", "bug", "grass"]
            },
            {
                poison: ["grass", "fairy"]
            },
            {
                ground: ["poison", "rock","steel", "fire", "electric"]
            },
            {
                rock: ["flying", "bug", "fire", "ice"]
            },
            {
                bug: ["grass", "psychic"]
            },
            {
                ghost: ["ghost", "psychic"]
            },
            {
                steel: ["rock", "ice", "fairy"]
            },
            {
                fire: ["bug", "steel", "grass", "ice"]
            },
            {
                water: ["ground", "rock", "fire"]
            },
            {
                grass: ["water", "ground", "rock"]
            },
            {
                electric: ["flying", "water"]
            },
            {
                psychic: ["fighting", "poison"]
            },
            {
                ice: ["flying", "ground", "grass", "dragon"]
            },
            {
                dragon: ["dragon"]
            },
            {
                fairy: ["fighting", "dragon"]
            }
        ]

        // Convert to a Hash Map when you refactor
        const playerTypeStrengths = winningTypes.filter(ele => Object.keys(ele)[0] === player.type1 || Object.keys(ele)[0] === player.type2);

        const challengerTypeStrengths = winningTypes.filter(ele => Object.keys(ele)[0] === challenger.type1 || Object.keys(ele)[0] === challenger.type2);

        let awarded = false;

        for (const typeStrength of playerTypeStrengths) {
            for (const type of Object.values(typeStrength)[0]) {
                if (type === challenger.type1 || type === challenger.type2) {
                    awarded = true;
                    return {message: "player wins", loser: challenger.name}
                }
            }
        }
        for (const typeStrength of challengerTypeStrengths) {
            for (const type of Object.values(typeStrength)[0]) {
                if (type === player.type1 || type === player.type2) {
                    awarded = true;
                    return {message: "challenger wins", loser: player.name}
                }
            }
        }
        if (!awarded) {
            const tieBreaker = Math.round(Math.random())
            if (tieBreaker === 0) {
                return {message: "draw- player wins tiebreaker", loser: challenger.name}
            } else {
                return {message: "draw- challenger wins tiebreaker", loser: player.name}
            }
        }
    }
}

export const scores = new BattleManager(0, 0)