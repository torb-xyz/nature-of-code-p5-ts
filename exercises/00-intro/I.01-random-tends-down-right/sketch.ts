import { Walker } from "./Walker";
import p5 from 'p5';

const p = new p5( (p :p5) => {

	let w: Walker;

	p.setup = () => {
		p.createCanvas(500, 500);
		p.frameRate(200);
		w = new Walker(p);
		p.background(0);
	};

	p.draw = () => {
		w.step();
		w.display();
	}

});