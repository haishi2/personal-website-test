const Skills = ({ skills, years, types }) => {
  return (
    <div className="inner">
      <h2>Skills</h2>
      <div className="features">
        {types.map((type, idx) => (
          <section className="feature" key={idx}>
            <h3>{type}</h3>
            <ul>
              {skills[idx].map((skill, innerIdx) => (
                <li key={innerIdx * (idx + 1)}>
                  <h4>{skill}</h4>
                  <p>{years[idx][innerIdx]} years of experience</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Skills;
