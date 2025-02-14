import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { email } = await request.json()

    // Add your newsletter signup logic here
    // Example: Send to your email service provider
    // await subscribeToNewsletter(email)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
}

