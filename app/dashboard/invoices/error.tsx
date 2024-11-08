'use client';

//  Le error.tsxfichier peut être utilisé pour définir une
//  limite d'interface utilisateur pour un segment d'itinéraire.
//  Il sert de fourre-tout pour les erreurs inattendues et vous permet
//   d'afficher une interface utilisateur de secours pour vos utilisateurs.
 
import { useEffect } from 'react';
 
export default function Error({
  error,
  // This is a function to reset the error boundary. When executed, the function will try to re-render the route segment.
  // Il s'agit d'une fonction permettant de réinitialiser la limite d'erreur. Une fois exécutée, la fonction tentera de restituer le segment d'itinéraire.
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}