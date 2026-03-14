import { SignInForm } from './sign-in-form';

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Sign in</h1>
          <p className="mt-1 text-sm text-gray-500">
            We&apos;ll send a magic link to your email
          </p>
        </div>

        {params.error === 'invalid-link' && (
          <div className="mb-4 rounded-lg border border-red-100 bg-red-50 p-3">
            <p className="text-sm text-red-700">
              That link has expired or is invalid. Please request a new one.
            </p>
          </div>
        )}

        <SignInForm />
      </div>
    </main>
  );
}
