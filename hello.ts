import { editor } from "@silverbulletmd/silverbullet/syscalls";

export async function helloWorld() {
  await editor.flashNotification("Hello world to abraham 3");
}

export function moveCursor5LinesUp() {
  helloWorld();
  const pos = editor.getCursor();
  console.log(pos);

  editor.moveCursor();
}