export async function get() {
    return {
      body: `
  User-agent: *
  Allow: /
  Disallow: /private/
  Disallow: /admin/
  
  Sitemap: /sitemap-0.xml
  `.trim(),
    };
  }