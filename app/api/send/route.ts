
import { AdminEmailTemplate, UserEmailTemplate } from '@/components/contact/email-template';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  try {
    const admin = await resend.emails.send({
      from: 'Champion <no-reply@muralikrishna.online>',
      to: ['championsdesignwork@gmail.com'],
      subject: name+' submitted a new form ',
      text: "Hello",
      react: AdminEmailTemplate({ Name: name, Email: email, Phone: phone, Message: message }),
    });

    if (admin.error) {
      return Response.json({ error: admin.error }, { status: 500 });
    }

    const user = await resend.emails.send({
      from: 'Champion <no-reply@muralikrishna.online>',
      to: email,
      subject: 'Thank you',
      text: "Hello",
      react: UserEmailTemplate({ Name: name }),
    });

    if (user.error) {
      return Response.json({ error: user.error }, { status: 500 });
    }

    return Response.json({ adminData: admin.data, userData: user.data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
