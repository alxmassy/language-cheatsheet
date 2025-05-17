import { travelTypes } from '../data/travelTypes';

export async function generateStaticParams() {
  return travelTypes.map((type) => ({
    type: type.id,
  }));
}

export default function CheatsheetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 