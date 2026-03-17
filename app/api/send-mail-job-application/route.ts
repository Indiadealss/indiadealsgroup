import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const city = formData.get("city") as string;
    const applyfor = formData.get("applyfor") as string;
    const message = formData.get("message") as string;

    const file = formData.get("resume") as File | null;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // ✅ Handle file
    let attachments: any[] = [];

    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    await transporter.sendMail({
      from: `Job Application <${process.env.MAIL_USER}>`,
      to: "hr@indiadealsgroup.com",
      replyTo: email,
      subject: `New Job Application - ${applyfor}`,

      html: `
        <h2>New Job Application Received</h2>
        
        <p><b>Position Applied:</b> ${applyfor}</p>
        <hr/>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>
        
        <p><b>Message:</b></p>
        <p>${message || "N/A"}</p>
      `,

      attachments, // ✅ Resume attached here
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Mail failed" }, { status: 500 });
  }
}