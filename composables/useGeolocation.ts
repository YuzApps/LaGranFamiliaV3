import { Loader } from "@googlemaps/js-api-loader";
export const useGeolocation = (mapDiv) => {
  const currPosition = ref({
    lat: 32.879699,
    lng: -96.666299,
  });

  const loader = new Loader({
    apiKey: useRuntimeConfig().public.googleMapsApiKey,
  });

  onMounted(async () => {
    loader.load().then(() => {
      useGeoPosition();
    });
  });

  function useGeoPosition() {
    const map = new google.maps.Map(mapDiv.value, {
      center: { lat: 32.88001, lng: -96.6674 },
      zoom: 17,
      zoomControl: true,
      rotateControl: true,
      mapTypeControl: true,
      fullscreenControl: true,
      disableDefaultUI: true,
      mapTypeId: "satellite",
      title: "My Map",
    });

    const svgMarker = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "red",
      fillOpacity: 0.8,
      strokeWeight: 0,
      rotation: 0,
      scale: 2,
      anchor: new google.maps.Point(15, 30),
    };

    const contentString =
      `<strong>Clinica general La Gran Familia</strong> <br/>` + `3035 S Shiloh Rd <br/> Garland, TX 75041`;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    const marker = new google.maps.Marker({
      position: currPosition.value,
      map,
      icon: svgMarker,
      title: "Clinica general La Gran Familia",
    });

    marker.setMap(map);

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
};
