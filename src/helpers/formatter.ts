export const numberWithCommas = (x: number) => {
  const s = x > 0 ? `+${x}` : x.toString();
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}