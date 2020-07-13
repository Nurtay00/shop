export default function counter(props: any) {
  var result: number = 0;
  props.information.basket.forEach((item: any) => {
    result = result + item.counter;
    return null;
  });
  return result;
}
