
/**
 * 格式化价格
 */
export function formatPrice(price) {
  if (typeof price === "number") {
    return "¥" + price.toFixed(2)
  }
}

 