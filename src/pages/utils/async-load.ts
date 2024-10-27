export function unWrapEvent(e: any): any {
  if (!Array.isArray(e?.detail?.__args__)) return e;
  return e.detail.__args__[0] || e;
}
