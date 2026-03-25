import { NextResponse } from "next/server";

const VCARD = `BEGIN:VCARD
VERSION:3.0
FN:Justin Thompson
N:Thompson;Justin;;;
ORG:AI Venture Factory
TITLE:Founder & Operator
TEL;TYPE=CELL:+15615587020
EMAIL;TYPE=INTERNET:justin@aidads.com
URL:https://aidads.com
URL:https://affixed.ai
NOTE:AI Venture Factory — 17 AI-powered companies\\, 91 autonomous agents\\, one operator. Consulting\\, 50/50 partnerships\\, and the AI co-CEO platform.
END:VCARD`;

export async function GET() {
  return new NextResponse(VCARD, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Justin-Thompson.vcf"',
    },
  });
}
