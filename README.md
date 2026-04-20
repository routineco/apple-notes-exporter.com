# Apple Notes Exporter Website

This is a static website for the Apple Notes Exporter application. The website is designed to be simple, modern, and easily deployable on GitHub Pages.

## Structure

- `index.html` - The main webpage
- `styles.css` - Styling for the website
- `screenshot.png` - Application screenshot (to be added)

## Deployment on GitHub Pages

1. Push this repository to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be published at `https://[username].github.io/[repository-name]`

## Customization

### Adding the Screenshot
1. Add your application screenshot as `screenshot.png` in the root directory
2. The image will automatically be displayed in the screenshot section

### Updating Content
- Edit the title and description in `index.html`
- Update the download button link in `index.html` when you have the download URL
- Modify colors and styling in `styles.css`

## Development

To test locally, you can use any static file server. For example:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## License

Copyright © 2024 Apple Notes Exporter 