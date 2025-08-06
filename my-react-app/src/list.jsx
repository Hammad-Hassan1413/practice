function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 100 },
    { id: 2, name: "banana", calories: 240 },
    { id: 3, name: "cherries", calories: 130 },
    { id: 4, name: "peach", calories: 80 },
    { id: 5, name: "watermelon", calories: 70 },
  ];
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); Alphabetical
  fruits.sort((a, b) => a.calories - b.calories); //Numeric
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default List;
