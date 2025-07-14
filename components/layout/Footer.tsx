// components/layout/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 mt-8 px-6 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Investors</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>Cancellation Options</li>
            <li>Neighborhood Support</li>
            <li>Trust & Safety</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Hosting</h4>
          <ul className="space-y-1">
            <li>Try Hosting</li>
            <li>AirCover for Hosts</li>
            <li>Hosting Resources</li>
            <li>Community Center</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">StayVista</h4>
          <ul className="space-y-1">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Company Details</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} StayVista. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
