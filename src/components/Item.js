// Item component
export default function Item({ item, handleUpdateItem, handleDeleteItem }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => handleUpdateItem(item.id)}
        />
  
        <span
          style={{
            textDecoration: item.packed ? "line-through" : "none",
          }}
        >
          {item.description} ({item.quantity})
        </span>
  
        <button
          onClick={() => handleDeleteItem(item.id)}
          style={{ marginLeft: '10px', color: 'red' }}
        >
          Delete
        </button>
      </li>
    );
  }
  