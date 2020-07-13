export function onAdd(value: number) {
  return {
    type: "ADD",
    value,
  };
}
export function onRemove(value: number) {
  return {
    type: "REMOVE",
    value,
  };
}
export function onDelete(value: number) {
  return {
    type: "DELETE",
    value,
  };
}
