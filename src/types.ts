export type Locomotive = {
  id: string;
  name: string;
  series: string;
  amount: number;
  coordinates: Coordinates;
};

export type Coordinates = {
  lat: number;
  lng: number;
};
