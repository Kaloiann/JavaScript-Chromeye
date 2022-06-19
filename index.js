// prime dividers
export default function primeDividers(n) {
  const dividers = []
  for (let i = n - 1; i >= 2; i--) {
    if (n % i === 0) dividers.push(i)
  }
  return dividers
}