import React from 'react';

export default function EnvTestRoute() {
  // Filter environment variables (only those prefixed with REACT_APP_ or VITE_ are accessible in the browser)
  const envVars = Object.entries(import.meta.env || {})
    .filter(([key]) => key.startsWith('VITE_') || key.startsWith('REACT_APP_') || key === 'MODE' || key === 'DEV' || key === 'PROD')
    .sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Environment Variables</h1>
      
      <div className="w-full max-w-3xl bg-gray-100 rounded-lg p-6">
        {envVars.length > 0 ? (
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-4 font-bold text-gray-800">Name</th>
                <th className="pb-4 font-bold text-gray-800">Value</th>
              </tr>
            </thead>
            <tbody>
              {envVars.map(([key, value]) => (
                <tr key={key} className="border-t border-gray-200">
                  <td className="py-3 pr-4 font-mono text-sm text-gray-800">{key}</td>
                  <td className="py-3 font-mono text-sm text-gray-800">{value.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-800">No accessible environment variables found. Remember that only variables prefixed with VITE_ or REACT_APP_ are accessible in the browser.</p>
        )}
      </div>
    </div>
  );
} 