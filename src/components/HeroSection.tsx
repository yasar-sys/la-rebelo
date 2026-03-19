import { motion } from "framer-motion";
import heroImg from "@/assets/product-hoodie.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 animate-slow-zoom">
        <img
          src={heroImg}
          alt="La Rebelo signature hoodie"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-mono text-xs tracking-[0.4em] uppercase text-primary mb-6"
        >
          Luxury Streetwear · Dhaka
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight"
        >
          What a great
          <br />
          <span className="text-gradient">quality.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 font-body text-lg md:text-xl text-muted-foreground max-w-md"
        >
          Every detail matters. প্রতিটি বিবরণ গুরুত্বপূর্ণ।
        </motion.p>

        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-primary-foreground animate-pulse-glow transition-all"
        >
          Explore Drop
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
