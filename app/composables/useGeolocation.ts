import { useId } from "#app";
import { Loader } from "@googlemaps/js-api-loader";

export const useGeolocation = (mapDiv: any) => {
  const config = useRuntimeConfig();

  const position = {
    lat: 32.8798453, // 32.8801069,-96.6665119
    lng: -96.6665119,
  };

  const mapOptions = {
    mapId: useId(),
    center: { lat: 32.88001, lng: -96.6674 },
    zoom: 17,
    zoomControl: true,
    rotateControl: true,
    mapTypeControl: true,
    fullscreenControl: true,
    disableDefaultUI: true,
    mapTypeId: "satellite",
    title: "Clínica general La Gran Familia",
  };

  const loader = new Loader({
    apiKey: config.public.googleMapsApiKey,
    version: "weekly",
    libraries: ["places"],
  });

  onMounted(async () => await useGeoPosition());

  async function useGeoPosition(): Promise<void> {
    const { Map } = (await loader.importLibrary("maps")) as google.maps.MapsLibrary;
    const { AdvancedMarkerElement, PinElement } = (await google.maps.importLibrary(
      "marker",
    )) as google.maps.MarkerLibrary;

    const map = new Map(mapDiv.value, mapOptions);

    const parser = new DOMParser();

    // A marker with a custom inline SVG.
    const pinSvgString =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500 h-10 w-10 fill-white"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
    const pinSvg = parser.parseFromString(pinSvgString, "image/svg+xml").documentElement;

    const contentString =
      `<strong>Clinica general La Gran Familia</strong> <br/>` + `3035 S Shiloh Rd <br/> Garland, TX 75041`;

    const infoWindow = new google.maps.InfoWindow({
      content: contentString,
      ariaLabel: "Uluru",
    });

    const marker = new AdvancedMarkerElement({
      position,
      map,
      content: pinSvg,
      title: `Clinica general La Gran Familia`,
    });

    marker.addListener("click", ({ domEvent }: any) => {
      const { target } = domEvent;
      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
  }
};
