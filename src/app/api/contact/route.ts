import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { company, email, message } = await request.json();

    if (!company || !email) {
      return NextResponse.json(
        { error: "회사명과 이메일은 필수 항목입니다." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: `QANDA AX 문의 <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: "ax@mathpresso.com",
      subject: `[QANDA AX 상담 요청] ${company}`,
      html: `
        <h2>새로운 상담 요청</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">회사명</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${company}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">이메일</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">문의 내용</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${message || "없음"}</td>
          </tr>
        </table>
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "이메일 전송에 실패했습니다." },
      { status: 500 }
    );
  }
}
