type Mods = Record<string, boolean | string>
export function classNames(className: string, mods: Mods, aditional: string[]): string {
    return [className, ...aditional, Object.entries(mods).filter(([className, value]) => Boolean(value)).map(([className, value]) => className)].join(" ")
}