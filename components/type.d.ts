interface Book {
    id: string;
    author: string;
    title: string;
    likes: number;
  }
  
  type Action =
    | { type: "add"; payload: { title: string; author: string } }
    | { type: "delete"; payload: { id: string } }
    | { type: "like"; payload: { id: string } }
    | { type: "dislike"; payload: { id: string } }
    | { type: "sort" };