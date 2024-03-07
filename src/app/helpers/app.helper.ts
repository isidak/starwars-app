/**
 A utility class that provides helper functions for working with URLs.
 @class
 */
export class AppHelper {
    /**
     Get the ID from a URL path segment at a given position.
     @param {string} url - The URL to extract the ID from.
     @param {number} [position=(-2)] - The position of the path segment to extract the ID from. Default is the second-to-last segment.
     @returns {string} The ID extracted from the URL.
     */
 static getIdFromUrl(url: string, position: number = (-2)) {
    return url.split("/").slice(position, -1)[0];
  }
}
