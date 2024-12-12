'use client';
import { useSearchParams } from 'next/navigation';
import ResultCard from '../components/test/ResultCard';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const score = searchParams.get('score') || '0';
  const detailsStr = searchParams.get('details');
  
  let details;
  try {
    details = detailsStr ? JSON.parse(detailsStr) : undefined;
  } catch (e) {
    console.error('Failed to parse details:', e);
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <ResultCard score={parseInt(score)} details={details} />
      </div>
    </div>
  );
}