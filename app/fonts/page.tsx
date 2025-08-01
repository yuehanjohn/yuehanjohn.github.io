import { Code } from "@heroui/code";

export default function FontsPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="title-2xl text-primary">Font Showcase</h1>
        <p className="text-lg text-default-600 max-w-2xl mx-auto">
          Explore the typography system featuring Nunito as the default font and Bebas Neue for titles.
        </p>
      </div>

      {/* Nunito - Default Font */}
      <section className="space-y-6">
        <h2 className="title-lg text-primary border-b border-divider pb-2">
          Nunito - Default Font
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-title text-2xl text-secondary">Font Weights</h3>
            
            <div className="space-y-2">
              <p className="font-light text-lg">Light (300) - The quick brown fox</p>
              <p className="font-normal text-lg">Regular (400) - The quick brown fox</p>
              <p className="font-medium text-lg">Medium (500) - The quick brown fox</p>
              <p className="font-semibold text-lg">Semi Bold (600) - The quick brown fox</p>
              <p className="font-bold text-lg">Bold (700) - The quick brown fox</p>
              <p className="font-extrabold text-lg">Extra Bold (800) - The quick brown fox</p>
              <p className="font-black text-lg">Black (900) - The quick brown fox</p>
            </div>

            <div className="space-y-2">
              <p className="text-lg">Normal text</p>
              <p className="text-lg italic">Italic text</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-title text-2xl text-secondary">Usage Examples</h3>
            
            <div className="bg-default-100 p-4 rounded-lg space-y-3">
              <Code size="sm" className="text-xs">
                {`// Default (automatic)`}
              </Code>
              <Code size="sm" className="text-xs">
                {`<p>This uses Nunito automatically</p>`}
              </Code>
              
              <Code size="sm" className="text-xs">
                {`// With Tailwind classes`}
              </Code>
              <Code size="sm" className="text-xs">
                {`<p className="font-light">Light text</p>
<p className="font-bold">Bold text</p>
<p className="italic">Italic text</p>`}
              </Code>

              <Code size="sm" className="text-xs">
                {`// Custom CSS classes`}
              </Code>
              <Code size="sm" className="text-xs">
                {`<p className="nunito-light">Light text</p>
<p className="nunito-bold">Bold text</p>`}
              </Code>
            </div>
          </div>
        </div>
      </section>

      {/* Bebas Neue - Titles */}
      <section className="space-y-6">
        <h2 className="title-lg text-primary border-b border-divider pb-2">
          Bebas Neue - Display & Titles
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-title text-2xl text-secondary">Title Sizes</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="title-2xl text-primary">Extra Large Title</h4>
                <p className="text-sm text-default-500">title-2xl (5rem)</p>
              </div>
              
              <div>
                <h4 className="title-xl text-primary">Large Title</h4>
                <p className="text-sm text-default-500">title-xl (4rem)</p>
              </div>
              
              <div>
                <h4 className="title-lg text-primary">Medium Title</h4>
                <p className="text-sm text-default-500">title-lg (3rem)</p>
              </div>
              
              <div>
                <h4 className="title text-2xl text-primary">Regular Title</h4>
                <p className="text-sm text-default-500">title (base)</p>
              </div>

              <div>
                <h4 className="font-title text-xl text-primary">Custom Size</h4>
                <p className="text-sm text-default-500">font-title + text-xl</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-title text-2xl text-secondary">Usage Examples</h3>
            
            <div className="bg-default-100 p-4 rounded-lg space-y-3">
              <Code size="sm" className="text-xs">
                {`// Predefined title classes`}
              </Code>
              <Code size="sm" className="text-xs">
                {`<h1 className="title-2xl">Hero Title</h1>
<h2 className="title-xl">Section Title</h2>
<h3 className="title-lg">Subsection</h3>
<h4 className="title">Regular Title</h4>`}
              </Code>
              
              <Code size="sm" className="text-xs">
                {`// With Tailwind utilities`}
              </Code>
              <Code size="sm" className="text-xs">
                {`<h1 className="font-title text-6xl">Custom</h1>
<h2 className="font-bebas text-3xl">Subtitle</h2>`}
              </Code>

              <Code size="sm" className="text-xs">
                {`// Direct CSS class`}
              </Code>
              <Code size="sm" className="text-xs">
                {`<h1 className="bebas-neue-regular text-5xl">
  Direct Usage
</h1>`}
              </Code>
            </div>
          </div>
        </div>
      </section>

      {/* Fira Code - Monospace */}
      <section className="space-y-6">
        <h2 className="title-lg text-primary border-b border-divider pb-2">
          Fira Code - Monospace
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-title text-2xl text-secondary">Code Examples</h3>
            
            <div className="space-y-3">
              <div className="font-mono text-sm bg-default-100 p-3 rounded">
                {`const greeting = "Hello, World!";
console.log(greeting);`}
              </div>
              
              <div className="font-mono text-xs bg-default-100 p-3 rounded">
                {`function calculateSum(a: number, b: number): number {
  return a + b;
}`}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-title text-2xl text-secondary">Usage</h3>
            
            <div className="bg-default-100 p-4 rounded-lg space-y-3">
              <Code size="sm" className="text-xs">
                {`// For code blocks`}
              </Code>
              <Code size="sm" className="text-xs">
                {`<code className="font-mono">
  const x = 42;
</code>`}
              </Code>
              
              <Code size="sm" className="text-xs">
                {`// For inline code`}
              </Code>
              <Code size="sm" className="text-xs">
                {`<span className="font-mono text-sm">
  console.log()
</span>`}
              </Code>
            </div>
          </div>
        </div>
      </section>

      {/* Typography Hierarchy */}
      <section className="space-y-6">
        <h2 className="title-lg text-primary border-b border-divider pb-2">
          Typography Hierarchy
        </h2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="title-xl text-primary">Main Page Title</h1>
            <h2 className="title-lg text-secondary">Section Heading</h2>
            <h3 className="title text-xl text-default-700">Subsection</h3>
            <p className="text-lg">
              This is a paragraph using the default Nunito font. It provides excellent readability 
              for body text and maintains good contrast with the display typography.
            </p>
            <p className="text-base text-default-600">
              Secondary text uses a lighter color while maintaining the same font family for consistency.
            </p>
            <p className="text-sm text-default-500">
              Small text for captions and metadata information.
            </p>
          </div>

          <div className="bg-default-50 p-6 rounded-lg">
            <h3 className="font-title text-xl mb-4">Best Practices</h3>
            <ul className="space-y-2 text-default-600">
              <li>• Use <strong>Bebas Neue</strong> for headlines, hero text, and section titles</li>
              <li>• Use <strong>Nunito</strong> for body text, paragraphs, and UI elements</li>
              <li>• Use <strong>Fira Code</strong> for code blocks and technical content</li>
              <li>• Maintain consistent spacing and hierarchy</li>
              <li>• Use font weights to create visual emphasis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CSS Variables */}
      <section className="space-y-6">
        <h2 className="title-lg text-primary border-b border-divider pb-2">
          CSS Variables
        </h2>
        
        <div className="bg-default-100 p-6 rounded-lg">
          <h3 className="font-title text-xl mb-4">Available CSS Variables</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Code size="sm" className="text-xs">
                {`--font-nunito    /* Nunito font */`}
              </Code>
              <Code size="sm" className="text-xs">
                {`--font-bebas     /* Bebas Neue font */`}
              </Code>
              <Code size="sm" className="text-xs">
                {`--font-sans      /* Inter font */`}
              </Code>
              <Code size="sm" className="text-xs">
                {`--font-mono      /* Fira Code font */`}
              </Code>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-default-600">
                Use these variables in your custom CSS:
              </p>
              <Code size="sm" className="text-xs">
                {`.custom-title {
  font-family: var(--font-bebas), sans-serif;
  font-weight: 400;
}`}
              </Code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
