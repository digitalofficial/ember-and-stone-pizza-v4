const sides = [
  { icon: "\uD83E\uDDC4", name: "Garlic Knots", desc: "Buttery, herbed, irresistible" },
  { icon: "\uD83E\uDD57", name: "Caesar Salad", desc: "Crisp romaine, house dressing" },
  { icon: "\uD83C\uDF70", name: "Tiramisu", desc: "Espresso-soaked perfection" },
  { icon: "\uD83E\uDDCB", name: "Italian Sodas", desc: "Blood orange, limone, amarena" },
  { icon: "\uD83C\uDF77", name: "Wine Selection", desc: "Italian reds & whites" },
  { icon: "\uD83C\uDF7A", name: "Craft Beer", desc: "Local & imported drafts" },
];

export default function SidesSection() {
  return (
    <section className="section" id="sides">
      <span className="section-label">Sides & Drinks</span>
      <h2 className="section-title">Complete the Experience</h2>
      <p className="section-subtitle">
        From house-made garlic knots to Italian craft sodas.
      </p>
      <div className="sides-grid">
        {sides.map((item) => (
          <div className="side-card" key={item.name}>
            <span className="side-icon" role="img" aria-label={item.name}>
              {item.icon}
            </span>
            <h3 className="side-name">{item.name}</h3>
            <p className="side-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
