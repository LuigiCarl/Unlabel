export type PledgeArtwork = { commitment: string; name?: string };

function drawWrappedText(context: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.toUpperCase().split(" "); const lines: string[] = []; let line = "";
  for (const word of words) { const test = line ? `${line} ${word}` : word; if (context.measureText(test).width > maxWidth && line) { lines.push(line); line = word; } else line = test; }
  if (line) lines.push(line); lines.forEach((value, index) => context.fillText(value, x, y + index * lineHeight)); return lines.length;
}

export async function createPledgeBlob({ commitment, name }: PledgeArtwork) {
  await document.fonts.ready;
  const canvas = document.createElement("canvas"); canvas.width = 1080; canvas.height = 1350;
  const context = canvas.getContext("2d"); if (!context) throw new Error("Canvas is unavailable in this browser.");
  context.fillStyle = "#C7FF61"; context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#101014"; context.fillRect(42, 42, 996, 1266);
  context.fillStyle = "#C7FF61"; context.font = "700 34px 'Space Grotesk', sans-serif"; context.fillText("UNLABEL / MY PLEDGE", 92, 125);
  context.fillStyle = "#F0EFE9"; context.font = "500 116px 'Space Grotesk', sans-serif"; context.fillText("I CHOOSE TO", 92, 325);
  context.font = "600 104px 'Space Grotesk', sans-serif"; const lines = drawWrappedText(context, commitment, 92, 455, 890, 108);
  const dividerY = Math.max(970, 455 + lines * 108 + 80); context.fillStyle = "#8150D8"; context.fillRect(92, dividerY, 896, 8);
  context.fillStyle = "#A7A7AD"; context.font = "400 28px Inter, sans-serif"; context.fillText(name?.trim() || "A VOICE BEYOND LABELS", 92, dividerY + 88);
  context.textAlign = "right"; context.fillText("BREAK THE LABELS. REDEFINE POSSIBILITY.", 988, 1240);
  return await new Promise<Blob>((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Could not generate the pledge image.")), "image/png"));
}

export async function downloadPledge(artwork: PledgeArtwork) {
  const blob = await createPledgeBlob(artwork); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = "unlabel-my-pledge.png"; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function sharePledge(artwork: PledgeArtwork) {
  const blob = await createPledgeBlob(artwork); const file = new File([blob], "unlabel-my-pledge.png", { type: "image/png" });
  if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) { await navigator.share({ title: "My UNLABEL pledge", text: `I choose to ${artwork.commitment.toLowerCase()}`, files: [file] }); return "shared" as const; }
  await downloadPledge(artwork); return "downloaded" as const;
}
