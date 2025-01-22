import { Organizer } from '@/models/organizers';

export async function getOrganizers(): Promise<Organizer[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_PULPIN_API}/organizers`);
  return response.json();
}
