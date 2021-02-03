export class Battles {
	constructor(userId, type1, type2, type1Array, type2Array, img, name) {
		this.userId = userId;
		this.type1 = type1;
		this.type2 = type2;
		this.type1Array = type1Array;
		this.type2Array = type2Array;
		this.img = img;
		this.name = name;
	}

	static evaluator(player, challenger) {
		let playerSubPoints = 0;
		let challengerSubPoints = 0;

		player.type1Array.forEach(type => (type === challenger.type1 ? playerSubPoints++ : null));
		player.type1Array.forEach(type => (type === challenger.type2 ? playerSubPoints++ : null));
		player.type2Array.forEach(type => (type === challenger.type1 ? playerSubPoints++ : null));
		player.type2Array.forEach(type => (type === challenger.type2 ? playerSubPoints++ : null));

		challenger.type1Array.forEach(type =>
			type === player.type1 ? challengerSubPoints++ : null
		);
		challenger.type1Array.forEach(type =>
			type === player.type2 ? challengerSubPoints++ : null
		);
		challenger.type2Array.forEach(type =>
			type === player.type1 ? challengerSubPoints++ : null
		);
		challenger.type2Array.forEach(type =>
			type === player.type2 ? challengerSubPoints++ : null
		);

		return { playerSubPoints, challengerSubPoints };
	}
}
