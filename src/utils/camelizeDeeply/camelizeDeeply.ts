import camelcaseKeys from 'camelcase-keys'

export const camelizeDeeply = <T extends Record<string, any> | readonly any[]>(arg: T) =>
  camelcaseKeys(arg, { deep: true });



type DeepCamelCase<T> = T extends Record<string, unknown> ? {
  [K in keyof T as Uncapitalize<K & string>]: DeepCamelCase<T[K]>
} : T;
