import React, {ReactPropTypes} from 'react';
import {MapContainer, PopupProps, TileLayer} from 'react-leaflet';

const Attribution =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const TileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export interface OSMapProps {
	markers?: {
		lat: number;
		lng: number;
		popupProps?: PopupProps;
	}[];
	center?: {
		lat: number;
		lng: number;
	};
	zoom?: number;
}

const OSMapHOC = <P extends object = {}>({
	children,
	center,
	zoom = 13,
	...props
}: {children: React.ReactElement} & OSMapProps): React.ReactElement<P> | null => {
	if (!center) {
		console.error('Must set map center');
		return null;
	}
	return (
		<MapContainer
			id="app-map"
			placeholder="Loading map"
			center={[center.lat, center.lng]}
			zoom={zoom}
			scrollWheelZoom={false}
			{...props}
		>
			<TileLayer attribution={Attribution} url={TileUrl} />
			{children}
		</MapContainer>
	);
};

export default OSMapHOC;
