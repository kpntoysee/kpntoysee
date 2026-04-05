export default function ShippingPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <p className="text-sm uppercase tracking-[0.2em] text-orange-500">Policy</p>
      <h1 className="mt-2 text-3xl font-bold">Shipping Policy</h1>

      <div className="mt-6 space-y-4 text-sm leading-7 text-gray-700">
        <p>We currently ship across India.</p>
        <p>
          Orders are processed after payment confirmation. Shipping timelines may vary
          depending on location, courier service, and product availability.
        </p>
        <p>
          Shipping charges may apply based on the current store policy and promotional offers.
        </p>
        <p>
          Customers will be contacted if there is any unexpected delay in dispatch.
        </p>
      </div>
    </main>
  );
}