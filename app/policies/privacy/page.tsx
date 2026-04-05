export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <p className="text-sm uppercase tracking-[0.2em] text-orange-500">Policy</p>
      <h1 className="mt-2 text-3xl font-bold">Privacy Policy</h1>

      <div className="mt-6 space-y-4 text-sm leading-7 text-gray-700">
        <p>
          We collect only the information required to process orders, contact customers,
          and provide support.
        </p>
        <p>
          Your personal details such as name, phone number, address, and email will not
          be sold or shared unnecessarily.
        </p>
        <p>
          Payment details are handled through secure third-party payment providers.
        </p>
      </div>
    </main>
  );
}