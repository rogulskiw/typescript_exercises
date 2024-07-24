import Weapon from './Weapon';

abstract class Unit {
	private name: string;
	private hitPointsLeft: number;
	private maxHitPoints: number;
	private moveDistance: number;
	private weapons: Weapon[];

	constructor(
		name: string,
		hitPointsLeft: number,
		maxHitPoints: number,
		moveDistance: number,
		weapons: Weapon[]
	) {
		this.name = name;
		this.hitPointsLeft = hitPointsLeft;
		this.maxHitPoints = maxHitPoints;
		this.moveDistance = moveDistance;
		this.weapons = weapons;
	}
}

export default Unit;
