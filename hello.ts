import { editor } from "@silverbulletmd/silverbullet/syscalls";

export async function helloWorld() {
  await editor.flashNotification("Hello world to abraham!");
}

export async function moveCursor5LinesUp() {
  const pos = editor.getCursor();
  console.log(pos);

  await editor.moveCursor();
}