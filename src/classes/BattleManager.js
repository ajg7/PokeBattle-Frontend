export class BattleManager {
    constructor(score) {
        this.score = score;
    }

    // get theScore() {
    //     return this.score
    // }

    // set theScore(score) {
    //     this.score = score
    // }

    static random() {
        return Math.round(Math.random() * 150);
    }

    static evaluator(player, opponent) {
        console.log(player, opponent)
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

        const opponentTypeStrengths = winningTypes.filter(ele => Object.keys(ele)[0] === opponent.type1 || Object.keys(ele)[0] === opponent.type2);

        let awarded = false;

        for (const typeStrength of playerTypeStrengths) {
            for (const type of Object.values(typeStrength)[0]) {
                if (type === opponent.type1 || type === opponent.type2) {
                    awarded = true;
                    return {message: "player wins", loser: opponent.name}
                }
            }
        }
        for (const typeStrength of opponentTypeStrengths) {
            for (const type of Object.values(typeStrength)[0]) {
                if (type === player.type1 || type === player.type2) {
                    awarded = true;
                    return {message: "opponent wins", loser: player.name}
                }
            }
        }
        if (!awarded) {
            const tieBreaker = Math.round(Math.random())
            if (tieBreaker === 0) {
                return {message: "draw- player wins tiebreaker", loser: opponent.name}
            } else {
                return {message: "draw- opponent wins tiebreaker", loser: player.name}
            }
        }
    }

}