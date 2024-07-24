import "./../css/main.css";
import "./../css/noscript.css";

const Sidebar = ({ sections, hrefs }) => {
  console.log(sections);
  console.log(hrefs);
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            {sections.map((s, idx) => (
              <li key={idx}>
                <a href={hrefs[idx]}>{s}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
