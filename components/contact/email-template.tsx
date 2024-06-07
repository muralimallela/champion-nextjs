import * as React from 'react';

interface AdminEmailTemplateProps {
  Name: string;
  Email : string;
  Phone : string;
  Message : string;
}
interface UserEmailTemplateProps {
  Name: string;
}

export const UserEmailTemplate: React.FC<Readonly<UserEmailTemplateProps>> = ({
  Name,
}) => (
  <div>
    <img src="https://www.muralikrishna.online/images/logo2.png" alt="champion logo" />
    <h1>Hi, {Name}!</h1>
    <p>Thanks for getting in touch!</p>
    <p>We will get back to you soon....</p>
  </div>
);


export const AdminEmailTemplate: React.FC<Readonly<AdminEmailTemplateProps>> = ({
  Name,Email,Phone,Message
}) => (
  <div>
    <h3>{Name} has sent you a message</h3>
    <p>Email : {Email}</p>
    <p>Phone : {Phone}</p>
    <p>Message : {Message}</p>
  </div>
)