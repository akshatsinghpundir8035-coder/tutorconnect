import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, GraduationCap } from "lucide-react";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="mb-4 mt-4">
    <h4 className="text-base font-bold text-slate-700 mb-2">{title}</h4>
    <div className="text-slate-600 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

export default function TermsConditions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans">
      
      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-slate-200 px-4 md:px-8 py-3 z-50 flex items-center justify-between shadow-sm">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-slate-50 transition-colors text-sm"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>
        
        <div className="flex items-center gap-2 text-amber-500 font-bold text-lg">
          <GraduationCap size={24} />
          <span className="text-slate-800">TutorConnect</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 mb-6 pl-1">Terms and Conditions</h1>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-12">
          
          <p className="text-slate-500 text-sm mb-6">
            Last Updated: November 7, 2025
          </p>

          <p className="text-slate-600 text-sm mb-8">
            Welcome to TutorConnect. By accessing and using our platform, you agree to be bound by these Terms and Conditions. Please read them carefully.
          </p>

          <Section title="1. Acceptance of Terms">
            <p>
              By creating an account and using TutorConnect, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you may not use our services.
            </p>
          </Section>

          <Section title="2. User Accounts">
            <SubSection title="2.1 Account Registration">
              <p>
                Users must provide accurate and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials.
              </p>
            </SubSection>
            <SubSection title="2.2 User Types">
              <ul className="list-disc pl-5 space-y-1">
                <li><span className="font-bold text-slate-700">Students:</span> Must be at least 13 years old or have parental consent to use the platform.</li>
                <li><span className="font-bold text-slate-700">Teachers:</span> Must provide valid credentials, qualifications, and undergo verification before offering services.</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="4. Payment Terms">
             <SubSection title="4.1 Wallet System">
               <p>
                 TutorConnect uses a wallet-based payment system. Students must maintain sufficient balance in their wallet to message and hire teachers.
               </p>
             </SubSection>
             <SubSection title="4.2 Refund Policy">
               <p>
                 Refunds are handled on a case-by-case basis. Please contact support for refund requests within 7 days of the transaction.
               </p>
             </SubSection>
          </Section>

          <Section title="5. Teacher Obligations">
            <ul className="list-disc pl-5 space-y-2">
              <li>Maintain professional conduct with all students</li>
              <li>Conduct a minimum of 2 tests per month for each assigned student</li>
              <li>Provide accurate and timely feedback on student performance</li>
              <li>Respond to student messages in a timely manner</li>
              <li>Keep qualifications and profile information up to date</li>
            </ul>
          </Section>

          <Section title="6. Student Obligations">
            <ul className="list-disc pl-5 space-y-2">
              <li>Maintain respectful communication with teachers</li>
              <li>Complete assignments and tests as required</li>
              <li>Provide honest feedback about teachers</li>
              <li>Make timely payments for services rendered</li>
            </ul>
          </Section>

          <Section title="7. Prohibited Conduct">
            <p className="mb-2">Users are prohibited from:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Using the platform for any illegal or unauthorized purpose</li>
              <li>Sharing account credentials with others</li>
              <li>Posting or transmitting harmful, offensive, or inappropriate content</li>
              <li>Attempting to interfere with the platform's security or functionality</li>
              <li>Harassing, threatening, or abusing other users</li>
              <li>Providing false or misleading information</li>
            </ul>
          </Section>

          <Section title="8. Intellectual Property">
            <p>
              All content on TutorConnect, including logos, graphics, text, and software, is the property of TutorConnect or its content suppliers and is protected by copyright and intellectual property laws. Users may not reproduce, distribute, or create derivative works without explicit permission.
            </p>
          </Section>

          <Section title="9. Privacy and Data Protection">
            <p>
              We are committed to protecting your privacy. Please review our Privacy Policy to understand how we collect, use, and safeguard your personal information. By using TutorConnect, you consent to our data practices as described in the Privacy Policy.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>
              TutorConnect acts as a platform connecting students and teachers. We do not guarantee the quality of educational services provided by teachers. TutorConnect shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform or services.
            </p>
          </Section>

          <Section title="11. Account Termination">
            <p>
              TutorConnect reserves the right to suspend or terminate accounts that violate these Terms and Conditions or engage in prohibited conduct. Users may also request account deletion by contacting support.
            </p>
          </Section>

          <Section title="12. Modifications to Terms">
            <p>
              TutorConnect reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the platform. Continued use of the platform after modifications constitutes acceptance of the updated terms.
            </p>
          </Section>

          <Section title="13. Dispute Resolution">
            <p>
              Any disputes arising from these Terms and Conditions or use of TutorConnect shall be resolved through binding arbitration in accordance with the applicable laws. Users waive their right to participate in class action lawsuits.
            </p>
          </Section>

          <Section title="14. Contact Information">
            <p className="mb-2">For questions or concerns regarding these Terms and Conditions, please contact us at:</p>
            <div className="text-slate-700 font-medium">
              <p>Email: legal@tutorconnect.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Education Street, Learning City, ED 12345</p>
            </div>
          </Section>
          
          <div className="mt-12 pt-8 border-t border-slate-100 text-slate-500 text-xs">
            <p>By using TutorConnect, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.</p>
          </div>

        </div>

        {/* Bottom Action Button */}
        <div className="flex justify-center mt-12 mb-8">
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            Back to Home
          </button>
        </div>

      </div>
    </div>
  );
}