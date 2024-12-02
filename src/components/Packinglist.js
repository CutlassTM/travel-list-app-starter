import Item from './Item'
// Packlinglist Component
export default function PackingList({ items, handleUpdateItem, handleDeleteItem, handleSort, handleClear }) {
    return (
      <div className="list">
  
        {/* Enhancement */}
        <div className="controls">
          <label>
            Sort by:{" "}
            <select onChange={(e) => handleSort(e.target.value)}>
              <option value="input">Input Order</option>
              <option value="description">Description</option>
              <option value="packed">Packed Status</option>
            </select>
          </label>
          <button onClick={handleClear} style={{ marginLeft: "10px" }}>
            Clear All
          </button>
        </div>
        
        <ul>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleUpdateItem={handleUpdateItem}
              handleDeleteItem={handleDeleteItem}
            />
          ))}
        </ul>
      </div>
    );
  }