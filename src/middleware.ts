import sitesettings from "./content/sitesettings/entry.json";

export function onRequest({ request }, next) {
  const isInMaintenance = sitesettings.maintenanceMode === true;
  const url = new URL(request.url);

  if (isInMaintenance) {
    if (url.pathname !== "/") {
      throw Error("Site is in maintenance mode");
    }
  }
  
  return next();
}
