import { Loader } from "@googlemaps/js-api-loader";
export const useGeolocation = () => {
  const mapDiv = ref(null);
  const currPosition = ref({
    lat: 32.879699,
    lng: -96.666299,
  });

  const loader = new Loader({
    apiKey: useRuntimeConfig().public.googleMapsApiKey,
  });

  onMounted(async () => {
    loader.load().then(() => {
      console.log("google maps loaded");
    });
  });
};
