export const environment = {
  production: true
};

// Define a service configuration object
export const ServiceConfiguration = {
  endpoints: {
    getReplays: 'http://ocap.wogames.info/ListOps.php'  // Requests a list of all available replays
  }
};
