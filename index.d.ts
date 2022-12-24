declare module '*.png';
declare module '*.jpg';
// declare module '*.html';
declare module "*.html" {
    const content: string;
    export default content;
}
