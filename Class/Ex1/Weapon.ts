class Weapon {
	private name: string;
	private damage: number;
	private ammoLeft: number;
	private maxAmmo: number;
	private rateOfFire: number;
	private range: number;

	constructor(
		name: string,
		damage: number,
		ammoLeft: number,
		maxAmmo: number,
		rateofFife: number, 
		range: number
	) {
		this.name = name;
		this.damage = damage;
		this.ammoLeft = ammoLeft;
		this.maxAmmo = maxAmmo;
		this.rateOfFire = rateofFife;
		this.range = range;
	}
}

export default Weapon;
