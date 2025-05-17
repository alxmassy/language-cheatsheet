import { travelTypes } from '../data/travelTypes';

// Ensure we have valid travel types
const validTravelTypes = travelTypes.filter(type => type && type.id);

export async function generateStaticParams() {
  if (!validTravelTypes.length) {
    console.warn('No valid travel types found');
    return [{ type: 'vacation' }]; // Fallback to default
  }

  return validTravelTypes.map((type) => ({
    type: type.id,
  }));
}

export default function CheatsheetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="cheatsheet-layout">
      {children}
    </div>
  );
} 