export { default as images } from "./images";
export { default as resumePDF } from "./resume.pdf";

export const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Removes hash from url
    if (window.history.pushState) {
        window.history.pushState('', '/', window.location.pathname)
    } else {
        window.location.hash = '';
    }
}