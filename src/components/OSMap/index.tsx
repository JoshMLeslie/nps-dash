import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const Attribution =
	'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const TileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export interface OSMapProps {
	markers?: {
		lat: number;
		lng: number;
		Popup?: typeof Popup;
	}[];
	center?: {
		lat: number;
		lng: number;
	};
  zoom?: number;
}

const OSMap: React.FC<OSMapProps> = ({center, markers, zoom = 13}) => {
	const {lat = 0, lng = 0} = center || {};
	return (
		<MapContainer
			id="app-map"
			center={[lat, lng]}
			zoom={zoom}
			scrollWheelZoom={false}
		>
			<TileLayer attribution={Attribution} url={TileUrl} />
			{markers?.map(({lat, lng, Popup}) => (
				<Marker position={[lat, lng]}>{Popup && <Popup />}</Marker>
			))}
		</MapContainer>
	);
};

export default OSMap;
