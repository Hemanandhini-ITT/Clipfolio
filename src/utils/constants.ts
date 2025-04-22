export const PEXELS_API_KEY =
  'dCr3aCtCXyLhVjyxxHShd9VELEGSlBolXTo62KAh5ASnlfsdcXF92aen';

export const PEXELS_API_URL = 'https://api.pexels.com/v1/curated';

export const fieldConfig = [
  { name: 'firstName', label: 'First Name', required: true },
  { name: 'lastName', label: 'Last Name', required: false },
  { name: 'email', label: 'Email', keyboardType: 'email-address', required: true },
  { name: 'phone', label: 'Phone', keyboardType: 'numeric', required: true },
  { name: 'address', label: 'Address', required: true },
  { name: 'city', label: 'City', required: true },
  { name: 'state', label: 'State', required: true },
  { name: 'zipCode', label: 'Zip Code', keyboardType: 'numeric', required: true },
] as const;
