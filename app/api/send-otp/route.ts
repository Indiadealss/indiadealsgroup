import { NextResponse } from "next/server";
import { sendOtpSms } from "../send-mail/otphalper";

export async function POST(req: Request) {
  try {
    const { mobile } = await req.json();

    if (!mobile) {
      return NextResponse.json(
        { error: "Mobile number required" },
        { status: 400 }
      );
    }

    await sendOtpSms(mobile);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}