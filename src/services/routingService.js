const API_KEY =
  "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjViYTc3ZmNjNWNjNTQ4OWE4YjU5ZGQwZTVjNWUwYjUyIiwiaCI6Im11cm11cjY0In0=";

export const getDirections = async (userLocation, destination) => {
  try {
    const coordinates = [
      [userLocation.lng, userLocation.lat],
      [destination.lng, destination.lat],
    ];

    const response = await fetch(
      "https://api.openrouteservice.org/v2/directions/driving-car/geojson",
      {
        method: "POST",
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coordinates: coordinates,
          instructions: true,
          radiuses: [5000, 5000],
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const route = data.features[0];
        return {
          success: true,
          coordinates: route.geometry.coordinates,
          summary: route.properties?.summary,
          steps: route.properties?.segments?.[0]?.steps,
        };
      }
    }

    return { success: false };
  } catch (error) {
    console.error("Directions error:", error);
    return { success: false };
  }
};

export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const generateRoadRoute = (startLat, startLng, endLat, endLng) => {
  const waypoints = [];
  const steps = 20;

  for (let i = 0; i <= steps; i++) {
    const ratio = i / steps;
    let lat = startLat + (endLat - startLat) * ratio;
    let lng = startLng + (endLng - startLng) * ratio;

    if (i > 0 && i < steps) {
      const curve = Math.sin(ratio * Math.PI) * 0.01;
      lat += curve;
      lng += curve * 0.5;
    }

    waypoints.push([lat, lng]);
  }

  return waypoints;
};

const generateScenicRoute = (startLat, startLng, endLat, endLng) => {
  const waypoints = [];
  const steps = 30;

  for (let i = 0; i <= steps; i++) {
    const ratio = i / steps;
    let lat = startLat + (endLat - startLat) * ratio;
    let lng = startLng + (endLng - startLng) * ratio;

    if (i > 2 && i < steps - 2) {
      const scenicOffset = Math.sin(ratio * Math.PI * 2) * 0.04;
      const mountainOffset = Math.cos(ratio * Math.PI * 1.5) * 0.03;

      lat += scenicOffset + mountainOffset;
      lng += scenicOffset * 0.8 + Math.sin(ratio * Math.PI * 3) * 0.025;
    }

    waypoints.push([lng, lat]);
  }

  return waypoints;
};

export const getMultipleRoutes = async (userLocation, destination) => {
  const routes = [];

  const fastestResult = await getDirections(userLocation, destination);
  if (fastestResult.success) {
    routes.push({
      id: 1,
      name: "Fastest Route",
      type: "fastest",
      traffic: "light",
      ...fastestResult,
    });

    const scenicCoords = generateScenicRoute(
      userLocation.lat,
      userLocation.lng,
      destination.lat,
      destination.lng
    );

    // routes.push({
    //   id: 2,
    //   name: 'Scenic Route',
    //   type: 'scenic',
    //   traffic: 'moderate',
    //   success: true,
    //   coordinates: scenicCoords,
    //   summary: {
    //     distance: fastestResult.summary.distance * 1.35,
    //     duration: fastestResult.summary.duration * 1.6
    //   },
    //   steps: [
    //     { instruction: 'Head towards scenic mountain road', distance: fastestResult.summary.distance * 0.2, duration: fastestResult.summary.duration * 0.25 },
    //     { instruction: 'Follow coastal viewpoint route', distance: fastestResult.summary.distance * 0.5, duration: fastestResult.summary.duration * 0.45 },
    //     { instruction: 'Continue through green valley', distance: fastestResult.summary.distance * 0.65, duration: fastestResult.summary.duration * 0.9 }
    //   ]
    // });
  }

  return routes;
};
