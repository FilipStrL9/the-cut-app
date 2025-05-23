
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run preview',
      url: ['http://localhost:4173/'],
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.85 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
        
        // WCAG specific assertions
        'color-contrast': ['error', { minScore: 1 }],
        'document-title': ['error', { minScore: 1 }],
        'html-has-lang': ['error', { minScore: 1 }],
        'meta-viewport': ['error', { minScore: 1 }],
        'aria-valid-attr': ['error', { minScore: 1 }],
        'aria-allowed-attr': ['error', { minScore: 1 }],
        'button-name': ['error', { minScore: 1 }],
        'image-alt': ['error', { minScore: 1 }],
        'label': ['error', { minScore: 1 }],
        'link-name': ['error', { minScore: 1 }],
        'list': ['error', { minScore: 1 }],
        'listitem': ['error', { minScore: 1 }],
        'tabindex': ['error', { minScore: 1 }],
        
        // Performance assertions
        'render-blocking-resources': ['warn', { maxNumericValue: 3 }],
        'total-byte-weight': ['warn', { maxNumericValue: 700000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'interactive': ['warn', { maxNumericValue: 3800 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'max-potential-fid': ['warn', { maxNumericValue: 130 }],
      },
    },
  },
};
