import {TodosByCountInterface} from "./interfaces/todosByCountInterface";

export function getTodosByCount(count: number): void {
  for (let i = 1; i <= count; i++) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
      .then(response => response.json() as unknown as string)
      .then(json => JSON.parse(JSON.stringify(json)) as TodosByCountInterface)
      .then(obj => {console.log(obj)})
      .catch(err => {console.log(err)})
  }
}
