import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="w-full min-h-screen bg-[#fbf9f4] text-slate-900 font-sans py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
          PortDigitalBoost - Privacy Policy
        </h1>

        {/* 1. Who We Are */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">1. Who We Are</h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            PortDigitalBoost is a digital solutions agency based in Nigeria.
            This Privacy Policy explains how we handle information when you
            visit our page or contact us.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-base font-bold text-slate-900">
            2. Information We Collect
          </h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Because we do not have a backend database, we collect information
            when you actively provide it.
          </p>

          <div className="bg-white border border-slate-200/80 rounded-xl p-6 max-w-md space-y-4 text-xs md:text-sm text-slate-600">
            <div className="grid grid-cols-12 gap-4 border-b border-slate-100 pb-2 font-bold text-slate-900">
              <div className="col-span-4">Method</div>
              <div className="col-span-8">What We Collect</div>
            </div>

            <div className="grid grid-cols-12 gap-4 border-b border-slate-100 pb-3">
              <div className="col-span-4 font-medium text-slate-800">
                Contact Form
              </div>
              <div className="col-span-8">
                Name, email address, phone number, message content(sent via
                email)
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 border-b border-slate-100 pb-3">
              <div className="col-span-4 font-medium text-slate-800">Email</div>
              <div className="col-span-8">When you email us directly</div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 font-medium text-slate-800">
                Web Analytics
              </div>
              <div className="col-span-8">
                IP address, browser type, pages visited (via google analytics or
                similar)
              </div>
            </div>
          </div>
        </section>

        {/* 3. How We Use Your Information */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            3. How We Use Your Information
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            To respond to your enquiries
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            To provide the services you requested
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            To improve our landing page and user experience
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            To send updates or promotional offers (only with your consent)
          </p>
        </section>

        {/* 4. Data storage */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            4. Data storage
          </h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Since we do not have a database, your data is not stored in our
            website. Contact form submission are sent directly to
            hello@portdigitalboost.com and stored in our email system (Zoho
            Mail). We do not store your data elsewhere unless you become a
            client.
          </p>
        </section>

        {/* 5. Data Sharing */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            5. Data Sharing
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            We do not sell or rent your personal data.
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            We may share with:
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            Trusted service providers (hosting, email platform, analytics )
            under confidentiality
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            Legal authorities if required by law
          </p>
        </section>

        {/* 6. Cookies */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">6. Cookies</h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Our landing page may use minimal cookies for analytics. You can
            disable cookies in your browser settings.
          </p>
        </section>

        {/* 7. Your Rights */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">7. Your Rights</h2>
          <p className="text-xs md:text-sm text-slate-600">
            Under the Nigerian Data Protection Act (NDPA) 2023, you have the
            right to:
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            Access your personal data we hold
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            Request correction or deletion
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            Withdraw consent at anytime
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            Lodge a complaint with the Nigerian Data Protection Commission
          </p>
        </section>

        {/* 8. Data security */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            8. Data security
          </h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            We use reasonable measures to protect your information, including
            secure mail hosting and limited access to your data.
          </p>
        </section>

        {/* 9. Third-Party Links */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            9. Third-Party Links
          </h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Our landing page may contain links to external sites. We are not
            responsible for their privacy practices.
          </p>
        </section>

        {/* 10. Updates To This Policy */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">
            10. Updates To This Policy
          </h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            We may update this policy occasionally. The latest version will
            always be posted here with effective date.
          </p>
        </section>

        {/* 11. Contact Us */}
        <section className="space-y-2">
          <h2 className="text-base font-bold text-slate-900">11. Contact Us</h2>
          <p className="text-xs md:text-sm text-slate-600">
            For any privacy questions, email us at
          </p>
          <p className="text-xs md:text-sm text-slate-600">
            <a
              href="mailto:hello@portdigitalboost.com"
              className="underline hover:text-slate-900 transition-colors"
            >
              hello@portdigitalboost.com
            </a>
          </p>
          <div className="pt-4 text-xs md:text-sm text-slate-600">
            Effective Date: July 2026
          </div>
        </section>
      </div>
    </main>
  );
}
