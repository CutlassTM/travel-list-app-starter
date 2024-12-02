import { useState } from 'react';
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./Packinglist";
import Stats from "./Stats";

// Initial packing items
const initialItems = [
  // { id: 1, description: "Shirt", quantity: 5, packed: false },
  // { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleUpdateItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Enhancement
  const handleSort = (criteria) => {
    setItems((prevItems) => {
      const sortedItems = [...prevItems];
      if (criteria === "description") {
        sortedItems.sort((a, b) => a.description.localeCompare(b.description));
      } else if (criteria === "packed") {
        sortedItems.sort((a, b) => a.packed - b.packed);
      }
      return sortedItems;
    });
  };

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleUpdateItem={handleUpdateItem}
        handleDeleteItem={handleDeleteItem}
        // Enhancement
        handleSort={handleSort}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
