const CourseSortSelect = ({ select, onChange }) => {
  return (
    <select
      className="p-2 border border-gray-300 rounded-md text-sm"
      defaultValue={select}
      onChange={onChange} // Optional: If you need to handle selection changes
    >
      <option value="default">Sort by Default</option>
      <option value="price-low-high">Price: Low to High</option>
      <option value="price-high-low">Price: High to Low</option>
      <option value="most-enrolled">Most Enrolled</option>
      <option value="most-recent">Most Recent</option>
      <option value="highest-rating">Highest Rating</option>
    </select>
  );
};

export default CourseSortSelect;
