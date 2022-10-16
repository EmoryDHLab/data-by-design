import * as d3 from "d3";
import statesJson from "~/data/usFeatures.json";

const collegeList = [
  { city: "Plano, TX", lat: "33.05", lng: "-96.75" },
  { city: "Irvine, CA", lat: "33.68", lng: "-117.77" },
  { city: "Madison, WI", lat: "43.09", lng: "-89.43" },
  { city: "Fremont, CA", lat: "37.50", lng: "-122.08" },
  { city: "Huntington Beach, CA", lat: "33.69", lng: "-118.01" },
  { city: "Fargo, ND", lat: "46.88", lng: "-96.79" },
  { city: "Grand Prairie, TX", lat: "32.69", lng: "-97.02" },
  { city: "San Jose, CA", lat: "37.30", lng: "-121.82" },
  { city: "Scottsdale, AZ", lat: "33.68", lng: "-111.86" },
  { city: "San Francisco, CA", lat: "37.73", lng: "-123.03" },
  { city: "Bismarck, ND", lat: "46.81", lng: "-100.78" },
  { city: "Overland Park, KS", lat: "38.89", lng: "-94.69" },
  { city: "Santa Rosa, CA", lat: "38.45", lng: "-122.71" },
  { city: "Austin, TX", lat: "30.30", lng: "-97.75" },
  { city: "Sioux Falls, SD", lat: "43.54", lng: "-96.73" },
  { city: "Pearl City, HI", lat: "21.41", lng: "-157.97" },
  { city: "Glendale, CA", lat: "34.15", lng: "-118.26" },
  { city: "San Diego, CA", lat: "32.82", lng: "-117.13" },
  { city: "St. Paul, MN", lat: "44.95", lng: "-93.10" },
  { city: "Charleston, SC", lat: "32.82", lng: "-79.96" },
];
const stateColors = {
  Alabama: { color: "#D92944" },
  Arizona: { color: "#D0EEFF" },
  Arkansas: { color: "#9AE4C1" },
  California: { color: "#D92944" },
  Colorado: { color: "#D92944" },
  Connecticut: { color: "#FEC313" },
  Delaware: { color: "#94715B" },
  Florida: { color: "#DBF5E9" },
  Georgia: { color: "#9AE4C1" },
  Idaho: { color: "#FFD3D3" },
  Illinois: { color: "#FFF6C9" },
  Indiana: { color: "#FFD3D3" },
  Iowa: { color: "#9AE4C1" },
  Kansas: { color: "#DBF5E9" },
  Kentucky: { color: "#9AE4C1" },
  Louisiana: { color: "#94715B" },
  Maine: { color: "#DBF5E9" },
  Maryland: { color: "#94715B" },
  Massachusetts: { color: "#D92944" },
  Michigan: { color: "#3B6FE0" },
  Minnesota: { color: "#3B6FE0" },
  Mississippi: { color: "#D0EEFF" },
  Missouri: { color: "#D92944" },
  Montana: { color: "#FFF6C9" },
  Nebraska: { color: "#FEC313" },
  Nevada: { color: "#FFF6C9" },
  "New Hampshire": { color: "#FEC313" },
  "New Jersey": { color: "#94715B" },
  "New Mexico": { color: "#DBF5E9" },
  "New York": { color: "#FFF6C9" },
  "North Carolina": { color: "#FFF6C9" },
  "North Dakota": { color: "#FFD3D3" },
  Ohio: { color: "#D0EEFF" },
  Oklahoma: { color: "#FFD3D3" },
  Oregon: { color: "#9AE4C1" },
  Pennsylvania: { color: "#3B6FE0" },
  "Rhode Island": { color: "#F8BF55" },
  "South Carolina": { color: "#FEC313" },
  "South Dakota": { color: "#94715B" },
  Tennessee: { color: "#3B6FE0" },
  Texas: { color: "#FEC313" },
  Utah: { color: "#9AE4C1" },
  Vermont: { color: "#94715B" },
  Virginia: { color: "#D0EEFF" },
  Washington: { color: "#FEC313" },
  "West Virginia": { color: "#F3D9FF" },
  Wisconsin: { color: "#F8BF55" },
  Wyoming: { color: "#3B6FE0" },
  Hawaii: { color: "#FFFFFF" },
  Alaska: { color: "#FFFFFF" },
};
const pathGenerator = d3.geoPath(d3.geoAlbers());
const usaProjection = d3.geoAlbers();
const cityData = collegeList.map(({ city, lng, lat }) => {
  return {
    city: city,
    x: usaProjection([lng, lat])[0],
    y: usaProjection([lng, lat])[1],
  };
});

export default function USAMap() {
  const stateData = statesJson.features.map((feature) => {
    const state = stateColors[feature.properties.NAME];
    return { feature, name: feature.properties.NAME, color: state.color };
  });

  return (
    <svg height="100%" width="100%" viewBox="0 0 1000 500">
      {stateData.map(({ name, feature, color }) => {
        return (
          <path
            key={name}
            d={pathGenerator(feature)}
            fill={color}
            stroke="black"
            strokeWidth="1.5"
          />
        );
      })}
      {cityData.map(({ city, x, y }) => (
        <circle
          key={city}
          cx={x}
          cy={y}
          r="5"
          fill="white"
          stroke="black"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
