import React from "react";
import GoogleMapReact from 'google-map-react';
const GoogleMap = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDucAK8e-zGu_rfG4HEnvjkNHR07bYxv9U" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}
type AnyReactComponentType = {
    lat: number,
    lng: number,
    text: string
}
const AnyReactComponent = ({ text }:AnyReactComponentType) => <div>{text}</div>;
export default GoogleMap;