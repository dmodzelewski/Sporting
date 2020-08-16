import { Plugins } from "@capacitor/core";

const { Geolocation } = Plugins;

export default class Geo {
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log("Current", coordinates);
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {});
  }
}
