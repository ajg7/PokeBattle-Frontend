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

}