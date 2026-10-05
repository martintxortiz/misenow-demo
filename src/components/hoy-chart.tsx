'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';

const DATES = Array.from({ length: 30 }, (_, i) => {
  const d = new Date(2026, 5, 20 + i);
  return d;
});

const shortLabel = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

const longLabel = (d: Date) =>
  d.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

const X = DATES.map(shortLabel);

const PAGEVIEWS = [
  3200, 3600, 3900, 3400, 3000, 3200, 3100, 3000, 3200, 3400, 4000, 4200,
  4100, 3900, 4452, 3700, 4000, 4300, 4600, 4100, 4500, 4100, 3800, 4800,
  4900, 4800, 5000, 4600, 4500, 4200,
];

const VISITORS = [
  900, 1000, 1000, 900, 850, 830, 800, 850, 950, 1050, 1100, 1050, 1050,
  950, 1970, 1050, 1100, 1180, 1200, 1220, 1250, 1150, 1120, 1550, 1400,
  1450, 1470, 1300, 1280, 1180,
];

const TICK_INDEXES = [0, 7, 14, 22, 29];
const PILL_ITEM_H = 20;
const GRID = { left: 8, right: 12, top: 16, bottom: 34 };

type AxisPointerParams = {
  dataIndex?: unknown;
  dataIndexInside?: unknown;
  axesInfo?: Array<{ value?: unknown }>;
};

function resolveIndex(params: AxisPointerParams): number | null {
  if (!params) return null;
  if (typeof params.dataIndex === 'number' && params.dataIndex >= 0)
    return params.dataIndex;
  if (
    typeof params.dataIndexInside === 'number' &&
    params.dataIndexInside >= 0
  )
    return params.dataIndexInside;
  const axesInfo = params.axesInfo;
  if (Array.isArray(axesInfo) && axesInfo[0] != null) {
    const v = axesInfo[0].value;
    if (typeof v === 'number' && Number.isFinite(v)) return Math.round(v);
    if (typeof v === 'string') {
      const idx = X.indexOf(v);
      return idx >= 0 ? idx : null;
    }
  }
  return null;
}

export function HoyChart() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [hoverX, setHoverX] = useState<number | null>(null);
  const [lastIndex, setLastIndex] = useState(14);

  const hovering = hover != null;
  const displayIndex = hovering ? (hover as number) : lastIndex;

  const computeX = useCallback((idx: number) => {
    const w = wrapRef.current?.clientWidth;
    if (!w) return null;
    const x = GRID.left + (idx / (X.length - 1)) * (w - GRID.left - GRID.right);
    return Math.min(Math.max(x, 46), w - 46);
  }, []);

  const handleUpdateAxisPointer = useCallback(
    (params: AxisPointerParams) => {
      const idx = resolveIndex(params);
      if (idx == null || idx < 0 || idx >= X.length) return;
      setLastIndex(idx);
      setHover((prev) => (prev === idx ? prev : idx));
      const x = computeX(idx);
      if (x != null) setHoverX(x);
    },
    [computeX],
  );

  const handleGlobalOut = useCallback(() => {
    setHover(null);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const x = computeX(hover ?? lastIndex);
      if (x != null) setHoverX(x);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [hover, lastIndex, computeX]);

  const events = useMemo(
    () => ({
      updateAxisPointer: handleUpdateAxisPointer,
      globalout: handleGlobalOut,
    }),
    [handleUpdateAxisPointer, handleGlobalOut],
  );

  const option = useMemo(
    () => ({
      animationDuration: 800,
      animationEasing: 'cubicOut' as const,
      animationDurationUpdate: 250,
      animationEasingUpdate: 'cubicOut' as const,
      grid: { left: GRID.left, right: GRID.right, top: GRID.top, bottom: GRID.bottom },
      xAxis: {
        type: 'category',
        data: X,
        boundaryGap: false,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: (_value: string, index: number) => {
            if (hover != null && Math.abs(index - hover) <= 1)
              return '#17191c';
            return '#9aa1ab';
          },
          fontSize: 11,
          formatter: (_value: string, index: number) =>
            TICK_INDEXES.includes(index) ? X[index] : '',
        },
        axisPointer: {
          type: 'line',
          snap: true,
          triggerTooltip: true,
          label: { show: false },
          lineStyle: {
            color: '#446de1',
            width: 1.5,
            type: 'solid',
            opacity: 0,
          },
        },
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 0,
        max: 5800,
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        showDelay: 0,
        hideDelay: 120,
        transitionDuration: 0.4,
        confine: true,
        enterable: false,
        // Fixed Y: tooltip always pins to the top, only X follows the mouse.
        position: (
          point: number[],
          _params: unknown,
          _dom: unknown,
          _rect: unknown,
          size: { contentSize: number[]; viewSize: number[] },
        ) => {
          const contentW = size?.contentSize?.[0] ?? 170;
          const viewW = size?.viewSize?.[0] ?? 600;
          const mouseX = Array.isArray(point) ? point[0] : viewW / 2;
          const x = Math.min(
            Math.max(mouseX - contentW / 2, 8),
            Math.max(8, viewW - contentW - 8),
          );
          return [x, 12];
        },
        formatter: (params: Array<{ dataIndex: number }>) => {
          const i = params[0].dataIndex;
          return (
            `<div style="background:#3a3a3f;border-radius:10px;padding:10px 12px;` +
            `color:#fff;font-family:inherit;box-shadow:0 4px 16px rgb(0 0 0/0.25);min-width:150px;">` +
            `<div style="font-weight:700;font-size:12px;margin-bottom:8px;">${longLabel(DATES[i])}</div>` +
            `<div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#c9ccd1;">` +
            `<span style="width:8px;height:8px;border-radius:99px;background:#b9c1cd;display:inline-block;"></span>` +
            `<span>pageviews</span>` +
            `<span style="margin-left:auto;color:#fff;font-weight:700;">${PAGEVIEWS[i].toLocaleString('en-US')}</span></div>` +
            `<div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#c9ccd1;margin-top:4px;">` +
            `<span style="width:8px;height:8px;border-radius:99px;background:#2f6bff;display:inline-block;"></span>` +
            `<span>visitors</span>` +
            `<span style="margin-left:auto;color:#fff;font-weight:700;">${VISITORS[i].toLocaleString('en-US')}</span></div>` +
            `</div>`
          );
        },
      },
      series: [
        {
          name: 'pageviews',
          type: 'line',
          data: PAGEVIEWS,
          smooth: true,
          symbol: 'circle',
          showSymbol: false,
          symbolSize: 7,
          z: 2,
          emphasis: { disabled: true },
          lineStyle: {
            color: '#b9c1cd',
            width: 1.5,
            type: 'solid',
            opacity: 1,
          },
          itemStyle: {
            color: '#b9c1cd',
            borderColor: '#fff',
            borderWidth: 2,
            opacity: 1,
          },
        },
        {
          name: 'visitors',
          type: 'line',
          data: VISITORS,
          smooth: true,
          symbol: 'circle',
          showSymbol: false,
          symbolSize: 7,
          z: 3,
          emphasis: { disabled: true },
          lineStyle: {
            color: '#446de1',
            width: 2,
            type: 'solid',
            opacity: 1,
          },
          itemStyle: {
            color: '#446de1',
            borderColor: '#fff',
            borderWidth: 2,
            opacity: 1,
          },
          areaStyle: {
            opacity: 1,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(68,109,225,0.28)' },
                { offset: 1, color: 'rgba(68,109,225,0.02)' },
              ],
            },
          },
        },
        {
          name: 'hover-dot',
          type: 'scatter',
          xAxisIndex: 0,
          yAxisIndex: 0,
          data:
            hovering && hover != null
              ? [[X[hover], VISITORS[hover]]]
              : [],
          silent: true,
          z: 10,
          symbol: 'circle',
          symbolSize: 11,
          emphasis: { disabled: true },
          itemStyle: {
            color: '#446de1',
            borderColor: '#fff',
            borderWidth: 3,
            opacity: 1,
          },
        },
      ],
    }),
    [hover, hovering],
  );

  return (
    <div ref={wrapRef} className="relative cursor-crosshair [&_canvas]:cursor-crosshair!">
      <ReactECharts
        style={{ height: 336, width: '100%', cursor: 'crosshair' }}
        option={option}
        notMerge={false}
        lazyUpdate={true}
        onEvents={events}
      />
      {/* Crosshair — glides via CSS between day positions, never snaps. */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-[5] w-px bg-[#446de1]"
        style={{
          left: hoverX ?? 0,
          top: GRID.top,
          bottom: GRID.bottom,
          opacity: hovering && hoverX != null ? 1 : 0,
          transition: 'left .2s ease-out, opacity .18s ease',
        }}
      />
      {/* Day pill — shell fades once per hover, only the text rolls. */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[2px] z-10"
        style={{
          left: hoverX ?? 0,
          opacity: hovering && hoverX != null ? 1 : 0,
          transform: `translateX(-50%) translateY(${hovering ? '0px' : '4px'})`,
          transition: 'left .2s ease-out, opacity .18s ease, transform .22s ease',
        }}
      >
        <div className="overflow-hidden rounded-full border border-black/10 bg-[#17191c] px-3">
          <div
            className="flex flex-col items-center"
            style={{
              height: PILL_ITEM_H,
              transform: `translateY(${-displayIndex * PILL_ITEM_H}px)`,
              transition: 'transform .2s cubic-bezier(0.22,1,0.36,1)',
              willChange: 'transform',
            }}
          >
            {X.map((label) => (
              <div
                key={label}
                className="flex shrink-0 items-center justify-center text-[12px] font-semibold whitespace-nowrap text-white"
                style={{ height: PILL_ITEM_H, lineHeight: `${PILL_ITEM_H}px` }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
