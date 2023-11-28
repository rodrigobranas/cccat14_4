import crypto from "crypto";
import Coord from "./Coord";

// Entity DDD
export default class Position {

	constructor (readonly positionId: string, readonly rideId: string, readonly coord: Coord, readonly date: Date) {
	}

	static create (rideId: string, lat: number, long: number) {
		const positionId = crypto.randomUUID();
		const date = new Date();
		return new Position(positionId, rideId, new Coord(lat, long), date);
	}
}
