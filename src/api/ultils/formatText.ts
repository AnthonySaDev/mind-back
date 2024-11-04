export const formatTextDefault = (text: string): string => text.replace(/ /g, "-").toLowerCase().trim();
export const formatTextToFileName = (text: string): string => `${Date.now()}-${formatTextDefault(text)}`;
export const bytesToMegas = (size: number): string => (size / (1024 * 1024)).toFixed(2) 