const SelectCatagory = ({ select }) => {
  return (
    <select defaultValue={select}>
      <option value="all">All Categories</option>
      <option value="web-development">Web Development</option>
      <option value="backend-development">Backend Development</option>
      <option value="data-science">Data Science</option>
      <option value="machine-learning">Machine Learning</option>
      <option value="artificial-intelligence">Artificial Intelligence</option>
      <option value="cloud-computing">Cloud Computing</option>
      <option value="cyber-security">Cyber Security</option>
      <option value="mobile-development">Mobile Development</option>
      <option value="game-development">Game Development</option>
      <option value="software-engineering">Software Engineering</option>
    </select>
  );
};

export default SelectCatagory;
