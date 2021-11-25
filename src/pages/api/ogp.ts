import { createCanvas, registerFont } from "canvas";
import dataUriToBuffer from "data-uri-to-buffer";
import { mkdtempSync, writeFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { tmpdir } from "os";
import path from "path";
import fontDataURI from "../../../public/fonts/SourceHanCodeJP.otf";
import type { JsonToken } from "../../utils/getJsonTimeToken";
import { getJsonTimeTokens } from "../../utils/getJsonTimeToken";

const fontBuf = dataUriToBuffer(fontDataURI);
const td = mkdtempSync(path.join(tmpdir(), "gaming-aa"));
const fontFile = path.join(td, "Saitamaar.ttf");
writeFileSync(fontFile, fontBuf);

registerFont(fontFile, {
  family: "SourceHanCodeJP",
});

const fontFamily = `"SourceHanCodeJP", Menlo, Monaco, "Courier New", monospace`;

function createImage(jsonClockTokens: JsonToken[]): Buffer {
  const width = 1200 as const;
  const height = 630 as const;
  const padding = 40 as const;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // background color
  ctx.fillStyle = "#1E1E1E";
  ctx.fillRect(0, 0, width, height);

  // json-clock text
  const fontSize = 24;
  const fontSizeWidth = fontSize * 0.6;
  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.textBaseline = "top";

  jsonClockTokens.forEach((token, i) => {
    const isObjectKey = token.left !== "{" && token.left !== "}";
    const x = padding + fontSize * token.indent;
    const y = padding + i * (fontSize + 8);
    if (!isObjectKey) {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(token.left, x, y);
    } else {
      const leftX = x + fontSizeWidth;
      ctx.fillStyle = "#9cdcfe";
      ctx.fillText(`"${token.left}"`, leftX, y);
      const centerX = leftX + token.left.length * fontSizeWidth + 30;
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(token.center, centerX, y);
      const rightX = centerX + fontSizeWidth + 10;
      if (typeof token.right === "string") {
        ctx.fillStyle = "#ce9178";

        ctx.fillText(`"${token.right}"`, rightX, y);
      } else {
        ctx.fillStyle = "#b5cea8";

        ctx.fillText(`${token.right}`, rightX, y);
      }
    }
  });

  return canvas.toBuffer();
}

export default async function Api(
  request: NextApiRequest & { query: { unixtime: string } },
  response: NextApiResponse
): Promise<void> {
  const { unixtime } = request.query;
  if (!unixtime) {
    response.writeHead(404);
    response.end();
    return;
  }

  try {
    const jsonClockTokens = getJsonTimeTokens(Number(unixtime));

    const buf = createImage(jsonClockTokens);

    response.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": buf.length,
      "Cache-Control": "max-age=86400",
    });
    response.end(buf, "binary");
  } catch {
    response.writeHead(404);
    response.end();
    return;
  }
}
