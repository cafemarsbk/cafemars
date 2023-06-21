import sitesettings from "./content/sitesettings/Site-Settings.json";

export function onRequest({ request }, next) {
  const isInMaintenance = sitesettings.maintenanceMode === true;

  if (isInMaintenance) {
    const url = new URL(request.url);
    if (url.pathname !== "/") {
      url.pathname = "/";
      return Response.redirect(url, 307);
    }
  }

  // return a Response or the result of calling `next()`
  return next();
}
