import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface TeamMember {
    name: string;
    role: string;
    image: string;
    socialLinks: { href: string; icon: IconDefinition }[];
}