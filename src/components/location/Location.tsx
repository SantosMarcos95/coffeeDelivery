import { useState, useEffect } from "react";

type Location = {
  country: string;
  state: string;
  city: string;
};

function GetLocation(): JSX.Element {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position: GeolocationPosition) => {
          const latitude: number = position.coords.latitude;
          const longitude: number = position.coords.longitude;

          try {
            const response = await fetch(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
            );
            const data = await response.json();

            if (data.results && data.results.length > 0) {
              const addressComponents = data.results[0].address_components;
              const country = addressComponents.find((component: any) =>
                component.types.includes("country")
              )?.long_name;
              const state = addressComponents.find((component: any) =>
                component.types.includes("administrative_area_level_1")
              )?.long_name;
              const city = addressComponents.find((component: any) =>
                component.types.includes("locality")
              )?.long_name;

              setLocation({ country, state, city });
            }
          } catch (error) {
            console.error(
              "Erro ao obter informações de geocodificação:",
              error
            );
          }
        },
        (error: GeolocationPositionError) => {
          console.error("Erro ao obter a localização:", error);
        }
      );
    } else {
      console.log("Geolocalização não suportada pelo navegador.");
    }
  }, []);

  return (
    <div>
      {location ? (
        <div>
          <p>Estado: {location.state}</p>

          <p>Cidade: {location.city}</p>
        </div>
      ) : (
        <p>Obtendo localização...</p>
      )}
    </div>
  );
}

export default GetLocation;
