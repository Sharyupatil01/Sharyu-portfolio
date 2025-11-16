import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log("📧 New Contact Form Submission:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("---");

    // TODO: In production, integrate with:
    // - Email service (SendGrid, Resend, Nodemailer, etc.)
    // - Database to store submissions
    // - Slack notification
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: "sharyu2701@gmail.com",
    //   subject: `New message from ${name}`,
    //   html: `<p>${message}</p><p>Reply to: ${email}</p>`,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your message" },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests
export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint. Use POST method to submit a form." },
    { status: 405 }
  );
}
