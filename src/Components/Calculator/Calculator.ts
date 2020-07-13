export const calculator = (props: any) => {
  var result: number = 0;
  props.information.basket.forEach((item: any) => {
    result = result + item.counter * item.cost;
    return null;
  });
  return result;
};
