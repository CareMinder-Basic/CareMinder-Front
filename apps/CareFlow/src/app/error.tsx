'use client';

import { useEffect } from 'react';
import { useError } from '@/providers/provider-error';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  const { setError } = useError();
  const router = useRouter();

  useEffect(() => {
    setError(true);
    return () => setError(false);
  }, [error]);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">
          일시적인 오류입니다.
        </h2>
        <h3 className="text-base text-gray-600">
          잠시 후 다시 시도해주세요.
        </h3>
      </div>

      <div className="fixed bottom-8 w-full max-w-xl px-4 flex gap-2">
        <button
          onClick={() => router.replace('/')}
          className="flex-1 h-11 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors"
        >
          홈으로
        </button>
        <button
          onClick={() => reset()}
          className="flex-1 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          다시시도
        </button>
      </div>
    </section>
  );
}