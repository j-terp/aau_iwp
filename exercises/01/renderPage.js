function renderPage(title, heading, demoString) {
let page = `<!DOCTYPE html>
<html lang="da">
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
  </head>
  <body>
    <!-- page content -->
    <h1>${heading}</h1>
    <script>
      console.log("${demoString}");
    </script>
  </body>
</html>`
console.log(page)
}

renderPage("Simpel IWP Demo", "IWP demo","JS Script er kørt")