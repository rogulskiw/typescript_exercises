import Unit from './Unit';

interface Vehicle extends Unit {
	fuelLeft: number;
	maxFuler: number;
	fuelConsumptionPerMove: number;
}
