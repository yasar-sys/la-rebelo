import { motion } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";
import hoodieImg from "@/assets/product-hoodie.jpg";
import bloomImg from "@/assets/product-bloom.jpg";

const products = [
  {
    id: 1,
    name: "La Rosalina Hoodie",
    price: "৳3,500",
    image: hoodieImg,
    badge: "New Drop",
    description: "Embroidered rose detail, 400 GSM",
  },
  {
    id: 2,
    name: "Bloom Polo Sweater",
    price: "৳2,800",
    image: bloomImg,
    badge: "Limited",
    description: "Floral embroidery, premium cotton",
  },
  {
    id: 3,
    name: "La Rosalina Hoodie — Black",
    price: "৳3,500",
    image: hoodieImg,
    badge: "Bestseller",
    description: "Signature rose embroidery",
  },
  {
    id: 4,
    name: "Bloom Collection — Pink",
    price: "৳2,800",
    image: bloomImg,
    badge: null,
    description: "A garden full of flowers",
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Collection
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Latest <span className="text-gradient">Drops</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {product.badge && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.3 + i * 0.1 }}
                    className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-foreground"
                  >
                    {product.badge}
                  </motion.span>
                )}

                {/* Hover actions */}
                <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 font-body text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90">
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                  <button className="flex items-center justify-center rounded-xl glass w-12 text-foreground transition-colors hover:text-primary">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-display text-sm font-semibold text-foreground truncate">
                  {product.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  {product.description}
                </p>
                <p className="font-mono text-sm font-bold text-primary mt-2">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
