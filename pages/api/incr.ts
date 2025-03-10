import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function incr(req: NextRequest): Promise<NextResponse> {
  if (req.method !== "POST") {
    return new NextResponse("use POST", { status: 405 });
  }
  if (req.headers.get("Content-Type") !== "application/json") {
    return new NextResponse("must be json", { status: 400 });
  }

  const body = await req.json();
  let slug: string | undefined = undefined;
  if ("slug" in body) {
    slug = body.slug;
  }
  if (!slug) {
    return new NextResponse("Slug not found", { status: 400 });
  }

  // Se eliminó la lógica de Redis para deduplicar y contar visitas.
  console.log(`Se recibió una solicitud para incrementar visitas a: ${slug}`);

  return new NextResponse(null, { status: 202 });
}
