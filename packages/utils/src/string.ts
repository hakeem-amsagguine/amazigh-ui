// packages/utils/src/string.ts
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export function truncate(str: string, length: number, ellipsis = "..."): string {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + ellipsis;
}

// packages/utils/src/object.ts
export function deepMerge<T extends object = object, U extends object = T>(
  target: T,
  source: U
): T & U {
  const output = Object.assign({}, target) as T & U;
  
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const targetValue = (target as any)[key];
      const sourceValue = (source as any)[key];
      
      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        (output as any)[key] = sourceValue;
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        (output as any)[key] = deepMerge(targetValue, sourceValue);
      } else {
        (output as any)[key] = sourceValue;
      }
    });
  }
  
  return output;
}

function isObject(item: any): item is object {
  return item && typeof item === "object" && !Array.isArray(item);
}

// packages/utils/src/index.ts
export * from "./string";
export * from "./object";
