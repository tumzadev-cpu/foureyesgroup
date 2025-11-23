export type Page = 'home' | 'services' | 'about' | 'contact';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}
