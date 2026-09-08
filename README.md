# zxyao145.github.io

This site uses [Hugo](https://gohugo.io/) for its homepage and keeps the published Blazor WebAssembly demos in `static/`. Hugo copies those files unchanged, so their existing root-relative base URLs, such as `/ByNotice/`, keep working on this user site.

## Local development

Install Hugo extended `0.165.0` or later, then run:

```sh
hugo server
```

Open `http://localhost:1313/` for the directory. The demos remain available at their current paths, for example `http://localhost:1313/ByNotice/`.

Create a production build with:

```sh
hugo --minify
```

The generated site is written to `public/` and is intentionally ignored by Git.

## Adding a Blazor demo

Publish the Blazor WebAssembly project, then copy the contents of its publish `wwwroot/` directory to `static/<DemoName>/`. Keep the app's `<base href="/<DemoName>/">` in its `index.html`, add its metadata to `data/projects.yaml`, and run a Hugo build to verify the copied `_framework/` files are present in `public/<DemoName>/`.

GitHub Pages deployment is defined in `.github/workflows/hugo.yml`. In the repository settings, select **GitHub Actions** as the Pages publishing source.
