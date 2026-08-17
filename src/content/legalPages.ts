import { SITE_URL } from '../config/paths';
import walkChampPrivacyRaw from '../../WALKCHAMP_PRIVACY_POLICY.txt?raw';
import walkChampTermsRaw from '../../WALKCHAMP_TERMS_AND_CONDITIONS.txt?raw';

export type LegalPageContent = {
  slug: string;
  path: string;
  aliases?: string[];
  navLabel: string;
  title: string;
  lastUpdated: string;
  effectiveDate?: string;
  version?: string;
  support?: string;
  publicUrl?: string;
  body: string;
};

function stripLegalDocumentHeader(raw: string): string {
  const normalized = raw.replace(/\r\n/g, '\n').trim();
  const firstSectionIndex = normalized.search(/^1\.\s+/m);

  return firstSectionIndex >= 0 ? normalized.slice(firstSectionIndex).trim() : normalized;
}

export const LEGAL_PAGES: LegalPageContent[] = [
  {
    slug: 'privacy',
    path: '/privacy',
    aliases: ['/legal'],
    navLabel: 'Privacy Policy',
    title: 'Privacy Policy',
    effectiveDate: '17 August 2026',
    lastUpdated: '17 August 2026',
    support: 'admin@miragaming.com',
    publicUrl: `${SITE_URL}/privacy`,
    body: `Mira Gaming ("Mira Gaming," "we," "us," or "our") respects your privacy and is committed to protecting personal information collected through our websites, applications, games, platforms, payment and payout services.

By accessing or using Mira Gaming services, you acknowledge the practices described in this Privacy Policy.

1. Information We Collect

Depending on the services you use, we collect information such as:

* Name, username, email address, phone number, and account information.
* Profile information and preferences.
* Information required for identity, age, eligibility, or account verification.
* Game participation, activity, results, rewards, transactions, and account history.
* Payment and payout information required to process transactions through our authorized service providers.
* Device information, IP address, browser type, operating system, identifiers, log information, and usage activity.
* Communications and information you provide when contacting customer support.

We do not request information that is unnecessary for providing or securing our services.

2. How We Use Information

We use information to:

* Create and manage user accounts.
* Provide and operate Mira Gaming services.
* Process eligible payments, payouts, rewards, and transactions.
* Verify identity, account ownership, eligibility, and transaction information.
* Prevent fraud, abuse, unauthorized access, and violations of our policies.
* Provide customer support.
* Improve performance, security, functionality, and user experience.
* Send service-related communications.
* Meet applicable legal, regulatory, accounting, and compliance requirements.

3. Payments and Payouts

Payments and payouts are processed through financial institutions, payment processors, banks, or other authorized service providers.

Mira Gaming does not use this Privacy Policy to claim ownership of information independently controlled by those providers. Their handling of information is also subject to their respective privacy policies and legal obligations.

4. Sharing of Information

We disclose personal information only when reasonably required to:

* Provide requested services.
* Process payments or payouts.
* Perform identity or account verification.
* Work with service providers supporting our platform.
* Prevent fraud or protect users and Mira Gaming.
* Comply with applicable laws, regulatory requirements, legal processes, or lawful government requests.
* Protect the rights, property, security, or integrity of Mira Gaming and its users.

We do not sell personal information to advertisers.

5. Data Security

Mira Gaming uses reasonable administrative, technical, and organizational safeguards designed to protect personal information from unauthorized access, disclosure, alteration, misuse, or loss.

No internet-based service can guarantee absolute security.

6. Data Retention

Personal information is retained for as long as reasonably necessary to provide our services, maintain account and transaction records, resolve disputes, prevent fraud, meet legal obligations, and enforce our agreements.

Information is deleted or anonymized when it is no longer reasonably required, subject to applicable legal and regulatory requirements.

7. Your Rights

Depending on applicable law and your location, you can have rights concerning access, correction, deletion, consent, withdrawal of consent, or other processing of your personal information.

Requests can be submitted to admin@miragaming.com. Mira Gaming can require reasonable verification before processing a request.

8. Children's Privacy

Mira Gaming services must only be used by individuals who meet the minimum age and eligibility requirements applicable to the particular service and jurisdiction.

Users must not provide false age or identity information.

9. Third-Party Services

Mira Gaming services can contain integrations or links to third-party websites, applications, payment providers, or services. Their privacy practices are governed by their own policies, and users should review those policies separately.

10. Changes to This Privacy Policy

We can update this Privacy Policy to reflect changes to our services, technology, business practices, or legal requirements. The updated policy will display a revised "Last Updated" date.

11. Contact Us

For privacy questions, requests, or concerns, contact:

Mira Gaming
Email: admin@miragaming.com`,
  },
  {
    slug: 'terms',
    path: '/terms',
    navLabel: 'Terms & Conditions',
    title: 'Terms & Conditions',
    effectiveDate: '17 August 2026',
    lastUpdated: '17 August 2026',
    support: 'admin@miragaming.com',
    publicUrl: `${SITE_URL}/terms`,
    body: `These Terms & Conditions govern your access to and use of Mira Gaming websites, applications, games, platforms, payment and payout services.

By registering for, accessing, or using Mira Gaming, you confirm that you have read, understood, and agreed to these Terms & Conditions and our Privacy Policy.

1. Eligibility

You must satisfy all applicable age, location, identity, and legal eligibility requirements before using a particular Mira Gaming service.

You are responsible for ensuring that your use of Mira Gaming is permitted in your jurisdiction.

Mira Gaming can restrict access to a game, feature, competition, payment, payout, or service where required by applicable law, regulatory requirements, platform rules, or eligibility conditions.

2. User Accounts

You are responsible for:

* Providing accurate and current information.
* Maintaining the confidentiality of your account credentials.
* Protecting access to your account.
* Immediately notifying Mira Gaming of suspected unauthorized use.
* Using only accounts that you are legally permitted to control.

Creating fraudulent accounts, impersonating another person, manipulating account information, or attempting to bypass account restrictions is prohibited.

3. Games and Competitions

Each game, challenge, tournament, competition, or promotional event can have specific rules, eligibility requirements, scoring methods, entry requirements, prize structures, and completion requirements.

By participating, you agree to the rules displayed for that activity.

Results, rewards, rankings, prizes, and eligibility are determined according to the applicable rules and validated platform records.

Mira Gaming can investigate suspected manipulation, fraud, collusion, cheating, technical exploitation, or other violations before confirming a result or reward.

4. Payments and Payouts

Payments and payouts are subject to:

* Successful payment processing.
* Account eligibility.
* Required identity or transaction verification.
* Applicable fees and limits.
* Game or competition rules.
* Fraud and security checks.
* Applicable laws and regulatory requirements.

Transactions are processed using supported financial institutions, banks, payment processors, or payment platforms.

Processing times can differ depending on the provider, payment method, verification status, banking system, and jurisdiction.

Mira Gaming can withhold, delay, cancel, reverse, or review a payment, payout, reward, or transaction when reasonably necessary because of fraud, errors, disputes, verification requirements, policy violations, legal requirements, or payment-provider instructions.

5. Refunds and Cancellations

Refund eligibility is governed by the applicable game, service, transaction, cancellation, and refund rules displayed by Mira Gaming.

Completed or consumed digital services are not automatically refundable unless required by applicable law or expressly provided under the applicable rules.

6. Prohibited Conduct

Users must not:

* Cheat or manipulate games or results.
* Use bots, scripts, automation, exploits, or unauthorized software.
* Create fraudulent or duplicate accounts to obtain an unfair benefit.
* Manipulate payments, payouts, rewards, or promotions.
* Interfere with Mira Gaming systems or security.
* Attempt unauthorized access to accounts or infrastructure.
* Use Mira Gaming for unlawful activity.
* Abuse, threaten, or harass other users.
* Provide false identity, payment, or verification information.

Violations can result in restriction, suspension, investigation, disqualification, cancellation of rewards, or account termination, subject to applicable law and platform rules.

7. Intellectual Property

Mira Gaming's websites, applications, games, software, graphics, designs, logos, trademarks, text, interfaces, and platform content are owned by or licensed to Mira Gaming and are protected by applicable intellectual-property laws.

Access to Mira Gaming does not transfer ownership of any intellectual property to the user.

8. Service Availability

Mira Gaming works to provide reliable services but does not guarantee uninterrupted or error-free availability.

Services can be temporarily restricted because of maintenance, upgrades, technical problems, security incidents, third-party failures, or circumstances beyond reasonable control.

9. Third-Party Services

Mira Gaming can rely on third parties for payments, payouts, hosting, verification, analytics, communications, infrastructure, or platform functionality.

Use of those services can also be governed by the third party's terms and policies.

10. Suspension and Termination

Mira Gaming can restrict, suspend, or terminate access where reasonably necessary because of:

* Violation of these Terms.
* Fraud or suspected fraud.
* Security risks.
* Abuse or manipulation.
* Legal or regulatory obligations.
* Misuse of Mira Gaming services.

11. Limitation of Liability

To the maximum extent permitted by applicable law, Mira Gaming is not responsible for indirect, incidental, special, or consequential losses arising from circumstances outside its reasonable control, including third-party service interruptions or unauthorized activity caused by a user's failure to secure their account.

Nothing in these Terms excludes rights or liabilities that cannot legally be excluded.

12. Changes to These Terms

Mira Gaming can update these Terms to reflect changes to its services, policies, technology, or legal requirements.

Continued use of the services after updated Terms become effective constitutes acceptance to the extent permitted by applicable law.

13. Governing Law

These Terms are governed by the laws of India, subject to any mandatory rights or protections available to users in their jurisdiction.

14. Contact

For questions about these Terms & Conditions:

admin@miragaming.com`,
  },
  {
    slug: 'walkchamp-privacy',
    path: '/walkchamp/privacy-policy',
    aliases: ['/walkchamp/privacy', '/walkchamp/legal', '/walkchamp/privacy%20policy'],
    navLabel: 'WalkChamp Privacy Policy',
    title: 'WalkChamp Privacy Policy',
    lastUpdated: 'July 21, 2026',
    support: 'admin@miragaming.com',
    publicUrl: `${SITE_URL}/walkchamp/privacy-policy`,
    body: stripLegalDocumentHeader(walkChampPrivacyRaw),
  },
  {
    slug: 'walkchamp-terms',
    path: '/walkchamp/terms',
    aliases: ['/walkchamp/terms-and-conditions', '/walkchamp/terms%20and%20conditions'],
    navLabel: 'WalkChamp Terms & Conditions',
    title: 'WalkChamp Terms & Conditions',
    effectiveDate: '2026-07-21',
    lastUpdated: 'July 21, 2026',
    version: '1.0',
    support: 'admin@miragaming.com',
    publicUrl: `${SITE_URL}/walkchamp/terms`,
    body: stripLegalDocumentHeader(walkChampTermsRaw),
  },
  {
    slug: 'license',
    path: '/license',
    navLabel: 'License',
    title: 'Website & Platform License',
    effectiveDate: '17 August 2026',
    lastUpdated: '17 August 2026',
    support: 'admin@miragaming.com',
    publicUrl: `${SITE_URL}/license`,
    body: `All intellectual property available through the Mira Gaming website, applications, games, platforms, software, branding, graphics, interfaces, logos, text, and content is owned by Mira Gaming or used under appropriate authorization or license.

1. Limited User License

Subject to compliance with the Terms & Conditions, Mira Gaming grants users a limited, personal, non-exclusive, non-transferable, non-sublicensable, and revocable right to access and use Mira Gaming services for their permitted personal use.

This license does not transfer ownership of Mira Gaming intellectual property.

2. Restrictions

Without written permission from Mira Gaming, users must not:

* Copy or redistribute Mira Gaming software or proprietary content.
* Modify, reverse engineer, decompile, or attempt to derive source code except where applicable law expressly permits it.
* Sell, sublicense, rent, or commercially exploit Mira Gaming services or content.
* Remove copyright, trademark, or proprietary notices.
* Use Mira Gaming branding to falsely represent affiliation, sponsorship, or endorsement.
* Circumvent security, access controls, or technical restrictions.
* Create unauthorized derivative products using Mira Gaming intellectual property.

3. Trademarks

The Mira Gaming name, logos, product names, designs, and associated branding are trademarks or proprietary identifiers of Mira Gaming or their respective owners.

No trademark license is granted except where expressly provided in writing.

4. Third-Party Content

Third-party software, trademarks, content, libraries, services, and technologies remain the property of their respective owners and are governed by their applicable licenses and terms.

5. Termination of License

The limited license granted to a user automatically ends when the user's right to access Mira Gaming terminates or when the user materially violates the applicable Terms & Conditions.

6. Regulatory License Clarification

This Website & Platform License describes the permission granted to users to access Mira Gaming's intellectual property and services. It is not a representation of, or substitute for, any governmental, gaming, financial, payment, or regulatory authorization that can be required for particular activities or jurisdictions.

7. Contact

For licensing or intellectual-property inquiries:

admin@miragaming.com`,
  },
  {
    slug: 'disclaimer',
    path: '/disclaimer',
    navLabel: 'Disclaimer',
    title: 'Disclaimer',
    lastUpdated: '17 August 2026',
    support: 'admin@miragaming.com',
    publicUrl: `${SITE_URL}/disclaimer`,
    body: `Mira Gaming provides access to games, digital platforms, payment and payout services.

By accessing, registering for, or using any Mira Gaming website, application, game, platform, payment, or payout service, you acknowledge and agree to comply with our Terms & Conditions, Privacy Policy, applicable game rules, payment and payout requirements, and all applicable laws and regulations.

Certain services, including payments, payouts, banking, identity verification, and platform functions, are provided or supported by third-party service providers. Processing times, fees, limits, availability, verification requirements, and completion of transactions may therefore vary depending on the applicable provider, financial institution, platform, or jurisdiction.

Mira Gaming does not guarantee uninterrupted access to its services, specific game outcomes, winnings, rewards, transaction processing times, payout completion times, or the continuous availability of any feature or service. Users are responsible for providing accurate information, maintaining the security of their accounts, using the platform responsibly, and ensuring that they are legally permitted to access and use the services available in their location.

By continuing to access or use Mira Gaming services, you confirm that you have read, understood, and agreed to the applicable terms, policies, rules, and conditions governing your use of the platform.

For any questions, support requests, or inquiries, please contact us at admin@miragaming.com.`,
  },
];

export function getLegalPageByPath(pathname: string): LegalPageContent | undefined {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  return LEGAL_PAGES.find(
    (page) => page.path === normalized || page.aliases?.includes(normalized),
  );
}
