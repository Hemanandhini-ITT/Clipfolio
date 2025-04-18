export const PEXELS_API_KEY =
  'dCr3aCtCXyLhVjyxxHShd9VELEGSlBolXTo62KAh5ASnlfsdcXF92aen';

export const PEXELS_API_URL = 'https://api.pexels.com/v1/curated?per_page=20';

export const fieldConfig = [
  {name: 'firstName', label: 'First Name'},
  {name: 'lastName', label: 'Last Name'},
  {name: 'email', label: 'Email', keyboardType: 'email-address'},
  {name: 'phone', label: 'Phone', keyboardType: 'numeric'},
  {name: 'address', label: 'Address'},
  {name: 'city', label: 'City'},
  {name: 'state', label: 'State'},
  {name: 'zipCode', label: 'Zip Code', keyboardType: 'numeric'},
] as const;
