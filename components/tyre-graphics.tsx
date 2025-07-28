"use client"

export function TyreGraphics() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Tyre Tread Pattern SVG */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100">
        <defs>
          <pattern id="tyrePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="8" fill="none" stroke="#ff6b35" strokeWidth="1" />
            <circle cx="10" cy="10" r="4" fill="none" stroke="#ff6b35" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tyrePattern)" />
      </svg>

      {/* Floating Patch Elements */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-orange-500/20 rounded transform rotate-45 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-orange-500/20 rounded-full animate-bounce"></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-10 h-6 bg-orange-500/20 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  )
}
