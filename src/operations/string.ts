export function toUpperCase(text: string): string {
    return text.toUpperCase();
}
export function toLowerCase(text: string): string {
    return text.toLowerCase();
}
export function reverse(text: string): string {
    return text.split('').reverse().join('');
}
export function trim(text: string): string {
    return text.trim();
}
const stringOperations = {
    toUpperCase,
    toLowerCase,
    reverse,
    trim,
};

export default stringOperations;
