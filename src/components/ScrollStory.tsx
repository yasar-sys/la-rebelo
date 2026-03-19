import { motion } from "framer-motion";
import bloomImg from "@/assets/product-bloom.jpg";

const ScrollStory = () => {
  return (
    <section id="story" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-6">
        {/* Section 1: Embroidery detail */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-2xl"
          >
            <motion.img
              src={bloomImg}
              alt="Bloom collection embroidery detail"
              className="w-full h-[500px] object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              The Craft
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Smooth. Perfect.
              <br />
              <span className="text-gradient">Detailed.</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Every stitch tells a story. Our embroidery is crafted with precision 
              that you can feel. হাতে তৈরি, হৃদয় দিয়ে।
            </p>
          </motion.div>
        </div>

        {/* Section 2: Fabric texture */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: "01", title: "Premium Fabric", desc: "400 GSM heavyweight cotton" },
            { number: "02", title: "Hand Embroidered", desc: "Every piece is unique" },
            { number: "03", title: "Limited Drops", desc: "Once sold out, gone forever" },
          ].map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 group cursor-default"
            >
              <span className="font-mono text-xs text-primary">{item.number}</span>
              <h3 className="font-display text-2xl font-semibold text-foreground mt-3 mb-2">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground">{item.desc}</p>
              <div className="mt-4 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollStory;
