'use client';

import { useAppSelector } from '@/store';
import { SimpleGrid } from '@/components/styled/Layout.styled';

export default function DashboardPage() {
  const { items } = useAppSelector((state) => state.shipments);

  const total = items.length;
  const inTransit = items.filter((s) => s.status === 'In Transit').length;
  const delivered = items.filter((s) => s.status === 'Delivered').length;

  return (
    <section className="space-y-6">
      <SimpleGrid>
        <article className="p-4 bg-white border border-gray-200 rounded-lg">
          <h2 className="text-xs text-gray-500 uppercase">Total Packages</h2>
          <p className="mt-1 text-2xl font-bold text-gray-900">{total}</p>
        </article>
        <article className="p-4 bg-white border border-gray-200 rounded-lg">
          <h2 className="text-xs text-gray-500 uppercase">In Transit</h2>
          <p className="mt-1 text-2xl font-bold text-blue-600">{inTransit}</p>
        </article>
        <article className="p-4 bg-white border border-gray-200 rounded-lg">
          <h2 className="text-xs text-gray-500 uppercase">Delivered</h2>
          <p className="mt-1 text-2xl font-bold text-emerald-600">{delivered}</p>
        </article>
      </SimpleGrid>

      <article className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <header className="p-4 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-800">Recent Packages</h2>
        </header>

        <section className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 text-xs">
              <tr>
                <th className="py-2.5 px-4">Tracking #</th>
                <th className="py-2.5 px-4">Destination</th>
                <th className="py-2.5 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {items.map((pkg) => (
                <tr key={pkg.id}>
                  <td className="py-2.5 px-4 font-mono text-gray-800">{pkg.trackingId}</td>
                  <td className="py-2.5 px-4 text-gray-600">{pkg.destination}</td>
                  <td className="py-2.5 px-4 font-medium text-xs">
                    <span
                      className={`inline-block px-2 py-0.5 rounded ${
                        pkg.status === 'Delivered'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {pkg.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </article>
    </section>
  );
}