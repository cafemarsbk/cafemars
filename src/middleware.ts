import sitesettings from "./content/sitesettings/entry.json";

export function onRequest({ request }, next) {
  const isInMaintenance = sitesettings.maintenanceMode === true;
  const url = new URL(request.url);

  if (isInMaintenance) {
    if (url.pathname !== "/") {
      throw Error("Site is in maintenance mode");
    }
  }

  // if (url.pathname !== "/") {
  //   const lastPath = url.pathname.match(/[^/]+$/)[0];
  //   if (!sitesettings[lastPath]) {
  //     throw Error("Page not found");
  //   }
  // }
  // return a Response or the result of calling `next()`
  return next();
}
