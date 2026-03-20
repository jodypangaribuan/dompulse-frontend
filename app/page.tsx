"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { MovingBorder } from "@/components/ui/moving-border";
import { IconUsers, IconActivity, IconChartBar, IconDeviceDesktopAnalytics } from "@tabler/icons-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-zinc-950 relative overflow-hidden antialiased text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Dashboard Overview
            </h1>
            <p className="text-neutral-400 mt-2 text-base max-w-lg">
              Monitor your system's pulse and get real-time insights into your application's metrics.
            </p>
          </div>
          <button className="bg-gradient-to-br relative group/btn from-zinc-800 to-zinc-900 bg-zinc-800 text-white rounded-md px-6 py-2.5 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
            Export Report
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Users"
            value="14,234"
            trend="+12%"
            icon={<IconUsers className="h-6 w-6 text-cyan-400" />}
          />
          <DashboardCard
            title="Active Sessions"
            value="2,405"
            trend="+5%"
            icon={<IconActivity className="h-6 w-6 text-indigo-400" />}
          />
          <DashboardCard
            title="Revenue Avg."
            value="$42,500"
            trend="-2%"
            trendDown
            icon={<IconChartBar className="h-6 w-6 text-emerald-400" />}
          />
          <DashboardCard
            title="System Load"
            value="34%"
            trend="-8%"
            trendDown
            icon={<IconDeviceDesktopAnalytics className="h-6 w-6 text-purple-400" />}
          />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl p-6 shadow-input bg-zinc-900/60 border border-zinc-800/50 backdrop-blur-md min-h-[400px] flex flex-col">
            <h3 className="text-xl font-semibold mb-6 text-neutral-200">Activity Graph</h3>
            <div className="flex-1 flex items-center justify-center text-neutral-500 bg-zinc-950/50 rounded-xl border border-zinc-800/30">
              <span className="flex flex-col items-center">
                <IconActivity className="w-12 h-12 mb-4 opacity-50" />
                No activity data available yet
              </span>
            </div>
          </div>
          <div className="rounded-2xl p-6 shadow-input bg-zinc-900/60 border border-zinc-800/50 backdrop-blur-md flex flex-col">
            <h3 className="text-xl font-semibold mb-6 text-neutral-200">Recent Users</h3>
            <div className="space-y-4 flex-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-pointer">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 text-zinc-400 shadow-inner">
                    <span className="text-xs font-medium">U{i}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-200">User_0{i}</p>
                    <p className="text-xs text-neutral-500">Joined {i * 2} hours ago</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 rounded-lg border border-zinc-800 text-sm text-neutral-400 hover:text-white hover:bg-zinc-800 transition-colors">
              View All Users
            </button>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

function DashboardCard({ title, value, trend, icon, trendDown = false }: { title: string, value: string, trend: string, icon: React.ReactNode, trendDown?: boolean }) {
  return (
    <div className="relative group/card cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl opacity-100 transition duration-500 group-hover/card:opacity-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 rounded-2xl blur-sm opacity-0 group-hover/card:opacity-100 transition duration-500" />
      <div className="relative rounded-2xl p-6 shadow-input bg-zinc-900/80 border border-zinc-800/50 backdrop-blur-xl h-full flex flex-col justify-between group-hover/card:border-zinc-700/50 transition-all transform group-hover/card:-translate-y-1">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2.5 bg-zinc-800/80 rounded-xl border border-zinc-700/50 shadow-inner">
            {icon}
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1.5 rounded-full ${trendDown ? 'bg-rose-500/10 text-rose-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
            {trend}
          </span>
        </div>
        <div>
          <h3 className="text-neutral-400 text-sm font-medium mb-1.5">{title}</h3>
          <p className="text-3xl font-bold text-neutral-100 placeholder-zinc-500">{value}</p>
        </div>
      </div>
    </div>
  );
}
