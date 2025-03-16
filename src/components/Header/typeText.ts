export function typeText(
  element: HTMLElement,
  lines: string[],
  speed = 100,
  pause = 3000,
) {
  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function updateText() {
    const text = lines[lineIndex];

    if (!isDeleting) {
      element.textContent = text.substring(0, charIndex);
      charIndex++;

      if (charIndex > text.length) {
        isDeleting = true;
        setTimeout(updateText, pause);
        return;
      }
    } else {
      element.textContent = text.substring(0, charIndex);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }

    setTimeout(updateText, speed);
  }

  updateText();
}

export const LINES = [
  "Hello World!",
  "npm install",
  "npm run dev",
  'git commit -m "Initial commit"',
  "git push --force",
  "Loading...",
  "Success!",
  "Something went wrong",
  "404",
];
