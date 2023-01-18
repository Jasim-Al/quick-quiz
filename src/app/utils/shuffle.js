export default function shuffle(array = []) {
  let newArray;
  newArray = array.sort(() => Math.random() - 0.5);
  return newArray;
}
