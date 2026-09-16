import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }

  const email = String(req.body?.email ?? "").trim();
  if (!email || !email.includes("@")) {
    return res.status(400).json({ ok: false, message: "Valid email required" });
  }

  return res.status(200).json({ ok: true });
}
