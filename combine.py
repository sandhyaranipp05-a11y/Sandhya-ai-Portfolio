import io
with io.open('index.html', 'r', encoding='utf-8') as f: html = f.read()
with io.open('styles.css', 'r', encoding='utf-8') as f: css = f.read()
with io.open('script.js', 'r', encoding='utf-8') as f: js = f.read()
html = html.replace('<link rel="stylesheet" href="styles.css" />', '<style>\n' + css + '\n</style>')
html = html.replace('<script src="script.js"></script>', '<script>\n' + js + '\n</script>')
with io.open('index_single.html', 'w', encoding='utf-8') as f: f.write(html)
