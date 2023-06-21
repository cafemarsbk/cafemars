import sitesettings from "./content/sitesettings/entry.json";

export function onRequest({ request }, next) {
  const isInMaintenance = sitesettings.maintenanceMode === true;

  if (isInMaintenance) {
    const url = new URL(request.url);
    if (url.pathname !== "/") {
      throw Error("Site is in maintenance mode");
    }
  }

  // return a Response or the result of calling `next()`
  return next();
}
