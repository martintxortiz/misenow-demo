import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, House } from "lucide-react";
import { HoyChart } from "@/components/hoy-chart";

export const metadata: Metadata = {
  title: "Hoy",
};

function SubCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-w-0 flex-col gap-0.5 rounded-3xl [corner-shape:squircle] border border-[#e5e7ea] bg-[#fcfcfd] p-1 shadow-[inset_0_1px_0_rgb(255_255_255/0.6),0_1px_2px_rgb(0_0_0/0.04)]">
      <span className="px-2 text-[12px] font-medium text-misenow-ink opacity-80">
        {label}
      </span>
      <div className="rounded-2xl [corner-shape:squircle] border border-black/[0.04] bg-misenow-content-bg px-2.5 py-1.5">
        <span className="text-[18px] font-medium tracking-tight text-misenow-ink-strong">
          {value}
        </span>
      </div>
    </div>
  );
}

function Page() {
  return (
    <>
      <div className="h-10 bg-[#fcfcfd] border-b border-[#e5e7ea] flex items-center justify-between px-3.5">
        <div className="flex items-center gap-2">
          <House size={17} />
          <h1 className="text-[15px] font-medium mt-px">Hoy</h1>
        </div>
      </div>
      <div className="flex justify-center px-3 py-3">
        <div className="flex w-full max-w-7xl flex-col items-center gap-2">
        <div className="grid w-full grid-cols-2 gap-2 lg:grid-cols-4">
          <SubCard label="Ventas" value="€2.431" />
          <SubCard label="Pedidos" value="128" />
          <SubCard label="Incidentes" value="2" />
          <SubCard label="Actividad" value="Alta" />
        </div>
        <div className="w-full rounded-3xl [corner-shape:squircle] border border-[#e5e7ea] bg-[#fcfcfd] p-1 shadow-[inset_0_1px_0_rgb(255_255_255/0.6),0_1px_2px_rgb(0_0_0/0.04)]">
          <div className="flex items-center justify-between px-1.5 pb-2">
            <span className="text-[13px] font-semibold text-misenow-ink-strong">
              Ventas
            </span>
            <Link
              href="/dashboard/direccion/finanzas"
              className="flex items-center gap-0.5 text-[12px] font-medium text-misenow-blue hover:underline"
            >
              Finanzas
              <ArrowUpRight size={13} />
            </Link>
          </div>
          <div
            className="rounded-2xl [corner-shape:squircle] border border-black/[0.04] bg-misenow-content-bg"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgb(0 0 0 / 0.07) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          >
            <div
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              }}
            >
              <HoyChart />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Page;