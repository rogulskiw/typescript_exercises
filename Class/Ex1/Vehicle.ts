import Unit from './Unit';
import Weapon from './Weapon';
class Vehicle extends Unit {
	constructor(
		name: string,
		hitPointsLeft: number,
		maxHitPoints: number,
		moveDistance: number,
		weapons: Weapon[],
		private fuelLeft: number,
		private maxFuler: number,
		private fuelConsumptionPerMove: number
	) {
		super(name, hitPointsLeft, maxHitPoints, moveDistance, weapons);
	}
}
