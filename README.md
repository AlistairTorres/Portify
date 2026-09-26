# Portfolio Interface Prototype

A form-driven portfolio introduction builder for testing content structure, profile links and preview behaviour.

## Highlights

- Collect a name, professional focus and short introduction
- Validate optional GitHub and LinkedIn links
- Render a clean preview without injecting user-supplied HTML
- Keep the interaction simple enough to use without a framework
- Provide a responsive layout for quick review on different screens

## Technical approach

The form is separated from the preview renderer. Input is trimmed, URLs are checked with the URL API, and preview content is created with DOM nodes so text remains text.

## Run locally

Open portify.html in a modern browser. No build step is required.

The project explores the interface decisions behind a small portfolio builder: hierarchy, trust signals, link handling and readable presentation.
