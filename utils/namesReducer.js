export const namesReducer = (prevState, action) => {
    switch (action.type) {
      case "ADD":
        const newName = {
          id: crypto.randomUUID(),
          likes: 0,
          text: action.payload,
        };
        return [...prevState, newName];
      case "DELETE":
        return prevState.filter((nameObj) => nameObj.id !== action.payload);
      case "SORT":
        return [...prevState].sort((a, b) => b.likes - a.likes);
      case "LIKE":
        return prevState.map((nameObj) =>
          nameObj.id === action.payload
            ? { ...nameObj, likes: nameObj.likes + 1 }
            : nameObj
        );
      case "DISLIKE":
        return prevState.map((nameObj) =>
          nameObj.id === action.payload
            ? { ...nameObj, likes: nameObj.likes - 1 }
            : nameObj
        );
      case "ORDER":
        return [...prevState].sort((a, b) => a.text.localeCompare(b.text));
      default:
        return prevState;
    }
  };