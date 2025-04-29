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