import "./index.scss";
import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

const modalMapStyles = [
  {
    elementType: "geometry",
    stylers: [
      { hue: "#ff4400" },
      { saturation: -68 },
      { lightness: -4 },
      { gamma: 0.72 },
    ],
  },
  { featureType: "road", elementType: "labels.icon" },
  {
    featureType: "landscape.man_made",
    elementType: "geometry",
    stylers: [{ hue: "#0077ff" }, { gamma: 3.1 }],
  },
  {
    featureType: "water",
    stylers: [{ hue: "#00ccff" }, { gamma: 0.44 }, { saturation: -33 }],
  },
  {
    featureType: "poi.park",
    stylers: [{ hue: "#44ff00" }, { saturation: -23 }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      { hue: "#007fff" },
      { gamma: 0.77 },
      { saturation: 65 },
      { lightness: 99 },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      { gamma: 0.11 },
      { weight: 5.6 },
      { saturation: 99 },
      { hue: "#0091ff" },
      { lightness: -86 },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      { lightness: -48 },
      { hue: "#ff5e00" },
      { gamma: 1.2 },
      { saturation: -23 },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.stroke",
    stylers: [
      { saturation: -64 },
      { hue: "#ff9100" },
      { lightness: 16 },
      { gamma: 0.47 },
      { weight: 2.7 },
    ],
  },
];

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: true, // Hides or shows the InfoWindow
      activeMarker: {}, // Shows the active marker upon click
      selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <div className="googleMap w3-content">
        <Map
          google={this.props.google}
          zoom={15}
          styles={modalMapStyles}
          initialCenter={{
            lat: 50.439173,
            lng: 3.800839,
          }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Kenyatta International Convention Centre"}
            position={{ lat: 50.438673, lng: 3.80095 }}
            icon={{
              url: "images/dent-logo.png",
              anchor: new google.maps.Point(36, 36),
              scaledSize: new google.maps.Size(64, 64),
            }}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={true}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPcGQaY5NCJu3kK5kFKUWr8ZAVRdvwCEE",
})(MapContainer);
