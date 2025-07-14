'use client';

// Ensure this route is rendered dynamically so useSearchParams is allowed during build
export const dynamic = 'force-dynamic';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const exchangeCode = async () => {
      const code = searchParams.get('code');
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) {
          console.error(error);
          router.replace('/login?error=auth');
        } else {
          router.replace('/dashboard');
        }
      }
    };
    exchangeCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <p className="text-xl">Signing you in...</p>
    </main>
  );
}
