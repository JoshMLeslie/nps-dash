import {NpsCalendar, NpsImage, NpsObject} from './npsUtil';

export enum ParkAddressType {
	PHYSICAL = 'Physical',
	MAILING = 'Mailing',
}

export interface ParkAddress {
	city: string;
	line1: string;
	line2: string;
	line3: string;
	postalCode: string;
	stateCode: string;
	type: ParkAddressType;
}

export interface ParkEntranceFee {
	cost: string; // decimal-delin number, no $ sign
	description: string;
	title: string;
}

export interface ParkHoursException {
	endDate: string;
	exceptionHours: NpsCalendar;
	name: string;
	startDate: string;
}

export interface ParkOperatingTime {
	description: string;
	exceptions: ParkHoursException[];
	name: string;
	standardHours: NpsCalendar;
}

export enum ParkPhoneNumberType {
	VOICE = 'Voice',
	FAX = 'Fax',
	TTY = 'TTY',
}

export interface ParkPhoneNumber {
	description: string;
	extension: string;
	phoneNumber: string;
	type: ParkPhoneNumberType;
}

export interface ParkEmailAddress {
	description: string;
	emailAddress: string;
}

export interface ParkContact {
	emailAddresses: ParkEmailAddress[];
	phoneNumbers: ParkPhoneNumber[];
}

export interface ParkEntrancePass {
	cost: string;
	description: string;
	title: string;
}

export interface Park {
	activities: NpsObject[];
	addresses: ParkAddress[];
	contacts: ParkContact[];
	description: string;
	designation: string; // Type of designation (eg, national park, national monument, national recreation area, etc)
	directionsInfo: string; // General overview of how to get to the park
	directionsUrl: string; // Link to page, if available, that provides additional detail on getting to the park
	entranceFees: ParkEntranceFee[];
	entrancePasses: ParkEntrancePass[];
	fullName: string; // Full park name (with designation)
	id: string; // Park identification
	images: NpsImage[];
	latitude: string; // decimal-delin
	latLong: string; // garbage format - example: "lat:39.9818229675293, long:-84.0711364746094"
	longitude: string; // decimal-delin
	name: string; // Short park name (no designation)
	operatingHours: ParkOperatingTime[];
	parkCode: string; //A variable width character code used to identify a specific park
	states: string; // State(s) the park is located in (comma-delimited list)
	topics: NpsObject[];
	url: string; // Park Website
	weatherInfo: string; //	General description of the weather in the park over the course of a year
}
