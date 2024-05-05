//import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend';
/*import { useCompiler } from "#vue-email";

const mailerSend = new MailerSend({
  apiKey: process.env.NUXT_PUBLIC_MAILERSEND_API_KEY || "",
});

const sentFrom = new Sender("in@clinicalagranfamilia.com", "Your name");
const recipients = [new Recipient("brocard@gmail.com", "Your Client")];

export default defineEventHandler(async (event) => {
  try {
    const template = await useCompiler("Welcome.vue", {
      props: {
        url: "https://vuemail.net/",
      },
    });

    const options = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject("This is a Subject")
      .setHtml(template.html);

    await mailerSend.email.send(options);
    return { message: "Email sent" };
  } catch (error) {
    console.error(error);
  }
});*/
