import { motion } from "framer-motion";
import { Instagram, Send } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6"
        >
          Join the <span className="text-gradient neon-text">Movement</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-muted-foreground text-lg max-w-lg mx-auto mb-10"
        >
          Be the first to know about new drops, exclusive pieces, and the La Rebelo lifestyle.
          আন্দোলনে যোগ দিন।
        </motion.p>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl bg-secondary px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground animate-pulse-glow"
          >
            <Send className="h-4 w-4" />
            Subscribe
          </motion.button>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary font-body text-sm"
          >
            <Instagram className="h-5 w-5" />
            @larebelo
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-border pt-8">
        <p className="text-center font-mono text-xs text-muted-foreground tracking-wider">
          © 2026 La Rebelo. All rights reserved. Premium streetwear from Dhaka.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
