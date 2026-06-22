"use client";

import { useEffect, useRef } from "react";

const pizzas = [
  {
    name: "Margherita",
    price: "$14",
    description: "San Marzano tomato, fresh mozzarella, basil, extra-virgin olive oil.",
    tag: "Classic",
  },
  {
    name: "Diavola",
    price: "$16",
    description: "Spicy sopressata, Calabrian chili, tomato sauce, mozzarella, honey drizzle.",
    tag: "Spicy",
  },
  {
    name: "Funghi",
    price: "$15",
    description: "Wild mushroom medley, truffle cream, fontina, thyme, garlic oil.",
    tag: "Vegetarian",
  },
  {
    name: "Prosciutto & Arugula",
    price: "$18",
    description: "Prosciutto di Parma, peppery arugula, shaved Parmigiano, lemon vinaigrette.",
    tag: "Chef's Pick",
  },
  {
    name: "Quattro Formaggi",
    price: "$16",
    description: "Mozzarella, gorgonzola, fontina, Parmigiano-Reggiano, black pepper.",
    tag: "Rich",
  },
  {
    name: "Build Your Own",
    price: "$14+",
    description: "Start with our house dough and San Marzano base. Add your favorite toppings.",
    tag: "Custom",
  },
];

function HoloCard({
  name,
  price,
  description,
  tag,
}: {
  name: string;
  price: string;
  description: string;
  tag: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--holo-x", `${x}%`);
      card.style.setProperty("--holo-y", `${y}%`);
    };

    card.addEventListener("mousemove", handleMove);
    return () => card.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="holo-card" ref={cardRef}>
      <div className="card-header">
        <h3 className="card-name">{name}</h3>
        <span className="card-price">{price}</span>
      </div>
      <p className="card-description">{description}</p>
      <span className="card-tag">{tag}</span>
    </div>
  );
}

export default function MenuSection() {
  return (
    <section className="section" id="menu">
      <span className="section-label">The Menu</span>
      <h2 className="section-title">Wood-Fired Pizzas</h2>
      <p className="section-subtitle">
        Every pie hand-stretched and baked in our 900-degree stone oven. Simple ingredients, extraordinary flavor.
      </p>
      <div className="menu-grid">
        {pizzas.map((pizza) => (
          <HoloCard key={pizza.name} {...pizza} />
        ))}
      </div>
    </section>
  );
}
