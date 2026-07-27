import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Server-side validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    console.log("Contact Form Submission Received:", {
      name,
      email,
      company: company || "N/A",
      budget: budget || "Not specified",
      message,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your consultation request has been received. Saksham Jain will reach out to ${email} within 24 hours.`,
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to process contact submission. Please try again." },
      { status: 500 }
    );
  }
}
