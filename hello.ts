import { editor } from "@silverbulletmd/silverbullet/syscalls";

export async function helloWorld() {
  await editor.flashNotification("Hello world to abraham!");
}

export function moveCursor5LinesUp() {
  editor.flashNotification("Hello world to abraham 2");
  const pos = editor.getCursor();
  console.log(pos);

  editor.moveCursor();
}