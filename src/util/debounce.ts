/**
 * Creates a debounced function that delays the invocation of the provided function
 * until after a specified wait time has elapsed since the last time the debounced
 * function was invoked.
 * 
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @param {boolean} [immediate=false] - If true, triggers the function on the leading edge instead of the trailing edge of the wait time.
 * @returns {Function} - The debounced function.
 */
function debounce(func, wait, immediate = false) {
    let timeout;
  
    return function (...args) {
      const context = this;
  
      // If immediate is true, invoke the function at the beginning of the wait period
      if (immediate && !timeout) {
        func.apply(context, args);
      }
  
      // Clear the timeout if it's already set
      clearTimeout(timeout);
  
      // Set a new timeout to invoke the function after the specified wait time
      timeout = setTimeout(() => {
        // If immediate is false, invoke the function at the end of the wait period
        if (!immediate) {
          func.apply(context, args);
        }
        timeout = null;
      }, wait);
    };
  }
  
  export default debounce;