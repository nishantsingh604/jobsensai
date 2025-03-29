import { Suspense } from "react";
import { BarLoader, PropagateLoader } from "react-spinners";


export default function Layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">Industry Insights</h1>
      </div>
      <Suspense
        fallback={
          <PropagateLoader color="#3b7e18" size={15} className="mt-4" />
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
