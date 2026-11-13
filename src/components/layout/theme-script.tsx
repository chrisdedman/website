/**
 * Applies the stored theme before first paint so the page never flashes the
 * wrong palette. Runs blocking in <head>, so it is kept deliberately small.
 */
const script = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.dataset.theme=t}}catch(e){}})()`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
