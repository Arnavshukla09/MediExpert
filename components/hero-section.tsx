export default function HeroSection() {
  return (
    <section className="relative px-4 py-16 md:py-24 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-6 flex justify-center animate-fade-in-scale">
          <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <svg className="w-8 h-8 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance animate-slide-up">
          Medical Expert System
        </h1>
        <p
          className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto text-balance animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Answer a few questions about your symptoms and get insights into possible conditions. This tool provides
          educational information and is not a substitute for professional medical advice.
        </p>
      </div>
    </section>
  )
}
