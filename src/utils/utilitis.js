export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function SignificantUp(prev, current) {
  return current > prev && current - prev >= 0.01;
}
export function SignificantDown(prev, current) {
  return current < prev && prev - current >= 0.01;
}
