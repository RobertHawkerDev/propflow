import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { SignOutButton } from './sign-out-button';

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <SignOutButton />
        </div>
        <p className="mt-1 text-sm text-gray-500">Signed in as {user.email}</p>
      </div>
    </main>
  );
}
