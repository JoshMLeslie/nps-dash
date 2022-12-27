import React, {useEffect, useState} from 'react';
import {getParks} from '../../data/npsData';
import OSMapHOC from '../OSMap';
import {Marker, MarkerProps, Popup} from 'react-leaflet';

const USCenter = {lat: 39.8283, lng: 98.5795};

interface PopupMarkerProps extends MarkerProps {
	content: string;
}

const ParkMap: React.FC = () => {
	const [parkMarkers, setParkMarkers] = useState<PopupMarkerProps[]>();

	const loadParks = async () => {
		try {
			const {data} = await getParks();
			const parkMapData: PopupMarkerProps[] = data.map((datum) => ({
				position: {
					lat: +datum.latitude,
					lng: +datum.longitude,
				},
				content: datum.description,
			}));
			setParkMarkers(parkMapData);
		} catch (e) {
			console.warn(e);
		}
	};

	useEffect(() => {
		loadParks();
	}, []);

	return OSMapHOC({
		center: USCenter,
		children: (
			<div>
				{parkMarkers?.map(({content, ...props}, i) => (
					<Marker key={i} {...props}>
						<Popup>{content}</Popup>
					</Marker>
				))}
			</div>
		),
	});
};

export default ParkMap;
