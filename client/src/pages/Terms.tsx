export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-slate-200">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-slate">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Agreement to Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Use License</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on BlockMachine Co's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Disclaimer</h2>
              <p className="text-slate-700 leading-relaxed">
                The materials on BlockMachine Co's website are provided on an 'as is' basis. BlockMachine Co makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Limitations</h2>
              <p className="text-slate-700 leading-relaxed">
                In no event shall BlockMachine Co or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BlockMachine Co's website, even if BlockMachine Co or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Accuracy of Materials</h2>
              <p className="text-slate-700 leading-relaxed">
                The materials appearing on BlockMachine Co's website could include technical, typographical, or photographic errors. BlockMachine Co does not warrant that any of the materials on its website are accurate, complete, or current. BlockMachine Co may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Links</h2>
              <p className="text-slate-700 leading-relaxed">
                BlockMachine Co has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BlockMachine Co of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Modifications</h2>
              <p className="text-slate-700 leading-relaxed">
                BlockMachine Co may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Governing Law</h2>
              <p className="text-slate-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the State of California, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Information</h2>
              <p className="text-slate-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded">
                <p className="font-semibold text-slate-900">BlockMachine Co</p>
                <p className="text-slate-700">Anaheim, CA</p>
                <p className="text-slate-700">Email: legal@blockmachine.co</p>
                <p className="text-slate-700">Phone: (714) 555-0123</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
