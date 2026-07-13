export const Aurora = () => {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden bg-background">
      {/* Ambient Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25] mix-blend-overlay pointer-events-none" />

      {/* Radial Gradient overlay to fade edges */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Aurora Blurs */}
      <div className="absolute inset-0 overflow-hidden opacity-40 filter blur-[120px] pointer-events-none">
        {/* Blob 1 */}
        <div 
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-primary/30 to-purple-600/20 animate-aurora"
          style={{ animationDuration: '25s' }}
        />

        {/* Blob 2 */}
        <div 
          className="absolute top-[30%] -right-[10%] w-[45%] h-[55%] rounded-full bg-gradient-to-bl from-secondary/35 to-blue-500/10 animate-aurora"
          style={{ animationDuration: '30s', animationDelay: '-5s' }}
        />

        {/* Blob 3 */}
        <div 
          className="absolute -bottom-[20%] left-[20%] w-[60%] h-[40%] rounded-full bg-gradient-to-tr from-purple-900/20 to-emerald-accent/15 animate-aurora"
          style={{ animationDuration: '35s', animationDelay: '-12s' }}
        />
      </div>

      {/* Backdrop blur layer */}
      <div className="absolute inset-0 backdrop-blur-[80px] pointer-events-none" />
    </div>
  )
}
