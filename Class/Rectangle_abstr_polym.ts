{
	abstract class Shape {
		abstract area: () => number;
	}

	class Rectangle extends Shape {
		private a: number;
		private b: number;

		constructor(a: number, b: number) {
			super();
			this.a = a;
			this.b = b;
		}

		public area = (): number => {
			return this.a * this.b;
		};
	}

	class Square extends Rectangle {
		constructor(a: number) {
			super(a, a);
		}

		public toStr = (): string => {
			return 'I am rectangle';
		};
	}

	class Circle extends Shape {
		radius: number;

		constructor(r: number) {
			super();
			this.radius = r;
		}

		public area = (): number => {
			return this.radius * this.radius * Math.PI;
		};
	}

	let rectangle1: Rectangle = new Rectangle(10, 5);
	let square1: Square = new Square(5);
	console.log(rectangle1.area());
	console.log(square1.area());

	const sth: Shape = new Circle(5);
	console.log(sth.area()); //takes area from Circle class  - polymorrphism
	const rectangle2: Rectangle = new Square(10);
	console.log(rectangle2.area()); //takes area from Shape class  - polymorrphism
}
