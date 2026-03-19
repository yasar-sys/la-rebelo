import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Every detail is worthy. The embroidery is perfect. প্রতিটি সেলাই নিখুঁত।",
    author: "Rafiq H.",
    rating: 5,
  },
  {
    text: "Best quality hoodie I've ever owned. The fabric feels like a dream.",
    author: "Nusrat A.",
    rating: 5,
  },
  {
    text: "La Rebelo is not just clothing, it's a statement. অসাধারণ মান!",
    author: "Tanvir R.",
    rating: 5,
  },
];

const ReviewSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What They <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-foreground leading-relaxed mb-6 text-lg italic">
                "{review.text}"
              </p>
              <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
                — {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
