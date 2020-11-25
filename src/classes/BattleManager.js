export class BattleManager {
    constructor(score) {
        this.score = score;
    }

    get theScore() {
        return this.score
    }

    set theScore(score) {
        this.score = score
    }

    static random() {
        return Math.round(Math.random() * 150);
    }

    static evaluator(playerType1, playerType2, opponentType1, opponentType2) {
        /*
        Normal > Ghost, Psychic [Kanto has no Dark Pokemon, so I decided to give Dark Type's Strengths to the Normal Type]
        Fighting > Normal, Rock, Steel, Ice, Dark
        Flying > Fighting, Bug, Grass
        Poison > Grass, Fairy
        Ground > Poison, Rock, Steel, Fire, Electric
        Rock > Flying, Bug, Fire, ICe
        Bug > Grass, Psychic, Dark
        Ghost > Ghost, Psychic
        Steel > Rock, Ice, Fairy
        Fire > Bug, Steel, Grass, Ice
        Water > Ground, Rock, Fire
        Grass > Water, Ground, Rock
        Electric > Flying, Water
        Psychic > Fighting, Poison
        Ice > Flying, Ground, Grass, Dragon
        Dragon > Dragon
        Fairy > Fighting, Dragon, Dark
        
        
        
        
        */
    }

}