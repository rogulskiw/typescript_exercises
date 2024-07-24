import Unit from './Unit';
import Weapon from './Weapon';

class Infantry extends Unit {
	constructor(
		name: string,
		hitPointsLeft: number,
		maxHitPoints: number,
		moveDistance: number,
		weapons: Weapon[]
	) {
		super(name, hitPointsLeft, maxHitPoints, moveDistance, weapons);
	}
}
