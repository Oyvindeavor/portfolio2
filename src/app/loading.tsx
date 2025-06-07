import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 p-4">
        {/* Main spinner with neon glow layers */}
        <div className="height-16 relative w-16 animate-spin rounded-full bg-purple-600/20 shadow-[0_0_10px_#c084fc] shadow-purple-500 transition-all duration-300 hover:shadow-[0_0_40px_#c084fc] focus:shadow-[0_0_40px_#c084fc]">
          <Loader2
            className="h-16 w-16 animate-spin text-purple-400 drop-shadow-2xl"
            strokeWidth={2.5}
          />

          {/* Multiple glow layers for neon effect */}
          <div className="absolute inset-0 h-16 w-16 animate-pulse rounded-full bg-purple-500/60 blur-xl"></div>
          <div className="absolute inset-0 h-16 w-16 animate-pulse rounded-full bg-purple-400/40 blur-2xl"></div>
          <div className="absolute inset-0 h-16 w-16 animate-pulse rounded-full bg-purple-300/30 blur-3xl"></div>

          {/* Outer ring glow */}
          <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl"></div>
        </div>

        {/* Glowing text with multiple shadow layers */}
        <div className="relative">
          <p className="animate-pulse text-xl font-semibold tracking-wider text-purple-300">
            Loading...
          </p>

          {/* Text glow effects */}
          <p className="absolute inset-0 animate-pulse text-xl font-semibold tracking-wider text-purple-400 blur-sm">
            Loading...
          </p>
          <p className="absolute inset-0 animate-pulse text-xl font-semibold tracking-wider text-purple-500 opacity-75 blur-md">
            Loading...
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex space-x-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"
            style={{ animationDelay: '0.1s' }}
          ></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
