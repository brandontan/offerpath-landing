import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function OfferPathLanding() {
  return (
    <div className="min-h-screen bg-background">
      <section className="px-4 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary">OfferPath</h1>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">From &quot;Should I apply?&quot; to &quot;I got $20K more.&quot;</h2>
              <p className="text-xl md:text-2xl text-muted-foreground">Your AI career strategist. Research companies. Prep for interviews. Negotiate better offers.</p>
            </div>
            <form action="https://formspree.io/f/mnnerpjw" method="POST" className="mt-12 max-w-md mx-auto space-y-4">
              <div className="flex gap-2">
                <Input type="email" name="email" placeholder="Enter your email" required className="flex-1 h-12 text-base" />
                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8">Join Waitlist</Button>
              </div>
              <p className="text-sm text-muted-foreground">First 100 get founding member pricing</p>
            </form>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Job searching is 47 browser tabs and constant anxiety</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-muted-foreground font-medium">
              <div className="p-4 bg-background border border-border rounded-lg">Glassdoor</div>
              <div className="p-4 bg-background border border-border rounded-lg">Levels.fyi</div>
              <div className="p-4 bg-background border border-border rounded-lg">LinkedIn</div>
              <div className="p-4 bg-background border border-border rounded-lg">Blind</div>
              <div className="p-4 bg-background border border-border rounded-lg">ChatGPT</div>
              <div className="p-4 bg-background border border-border rounded-lg">Google</div>
              <div className="p-4 bg-background border border-border rounded-lg">Reddit</div>
              <div className="p-4 bg-background border border-border rounded-lg">Friends</div>
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-primary pt-8">What if one tool told you exactly what you need to know?</p>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">What You Get</h3>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-3"><div className="text-4xl">📊</div><h4 className="text-xl font-semibold text-primary">Company Research</h4><p className="text-lg text-muted-foreground leading-relaxed">3 talking points. 2 red flags. 1 smart question.</p></div>
            <div className="space-y-3"><div className="text-4xl">🎯</div><h4 className="text-xl font-semibold text-primary">Interview Prep</h4><p className="text-lg text-muted-foreground leading-relaxed">What they&apos;ll ask. What you should say.</p></div>
            <div className="space-y-3"><div className="text-4xl">💰</div><h4 className="text-xl font-semibold text-primary">Offer Analysis</h4><p className="text-lg text-muted-foreground leading-relaxed">Is it good? Here&apos;s the data.</p></div>
            <div className="space-y-3"><div className="text-4xl">🤝</div><h4 className="text-xl font-semibold text-primary">Negotiation Scripts</h4><p className="text-lg text-muted-foreground leading-relaxed">Word-for-word. Tested. Works.</p></div>
            <div className="space-y-3 md:col-span-2 md:max-w-md md:mx-auto"><div className="text-4xl">✅</div><h4 className="text-xl font-semibold text-primary">Decision Support</h4><p className="text-lg text-muted-foreground leading-relaxed">Compare offers. Make the right call.</p></div>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center space-y-4"><div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto">1</div><h4 className="text-lg font-semibold text-primary">Add Chrome extension</h4><p className="text-muted-foreground leading-relaxed">One-click install from the Chrome Web Store</p></div>
            <div className="text-center space-y-4"><div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto">2</div><h4 className="text-lg font-semibold text-primary">Browse LinkedIn or any job board</h4><p className="text-muted-foreground leading-relaxed">Continue your normal job search flow</p></div>
            <div className="text-center space-y-4"><div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto">3</div><h4 className="text-lg font-semibold text-primary">Click → get everything you need</h4><p className="text-muted-foreground leading-relaxed">Instant insights, no tab switching required</p></div>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Who This Is For</h3>
          <div className="space-y-6">
            <div className="p-6 border border-border rounded-lg bg-background"><p className="text-lg text-foreground leading-relaxed">Senior ICs and managers interviewing at multiple companies</p></div>
            <div className="p-6 border border-border rounded-lg bg-background"><p className="text-lg text-foreground leading-relaxed">Career changers who don&apos;t know what &quot;good&quot; looks like</p></div>
            <div className="p-6 border border-border rounded-lg bg-background"><p className="text-lg text-foreground leading-relaxed">Anyone who&apos;s Googled &quot;how to negotiate salary reddit&quot;</p></div>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center space-y-8">
            <div><h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">Help us build this</h3><p className="text-lg text-muted-foreground">What would make OfferPath perfect for you?</p></div>
            <form action="https://formspree.io/f/xblnbgdq" method="POST" className="space-y-4">
              <Textarea name="feedback" placeholder="Share your thoughts, pain points, or feature requests..." className="min-h-[150px] resize-none text-base" required />
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Submit Feedback</Button>
            </form>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <h3 className="text-4xl md:text-5xl font-bold text-primary">Stop leaving money on the table.</h3>
          <form action="https://formspree.io/f/mnnerpjw" method="POST" className="max-w-md mx-auto space-y-4">
            <div className="flex gap-2">
              <Input type="email" name="email" placeholder="Enter your email" required className="flex-1 h-12 text-base" />
              <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8">Join Waitlist</Button>
            </div>
            <p className="text-sm text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </form>
        </div>
      </section>
      <footer className="px-4 py-8 border-t border-border"><div className="container mx-auto max-w-6xl text-center"><p className="text-sm text-muted-foreground">Built by Brandon</p></div></footer>
    </div>
  )
}