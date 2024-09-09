import { editor } from "@silverbulletmd/silverbullet/syscalls";

export async function helloWorld() {
  await editor.flashNotification("Hello world!");
}

export function moveCursor5LinesUp() {
  const pos = editor.getCursor();
  console.log(pos);

  editor.moveCursor();
}