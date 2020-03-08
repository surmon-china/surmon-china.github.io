/**
 * @file Number unit transformer
 * @author Surmon <https://github.com/surmon-china>
 */

export function countToK(count: number): string {
  return count > 1000
    ? `${parseFloat((count / 1000).toFixed(2))}k`
    : String(count)
}
