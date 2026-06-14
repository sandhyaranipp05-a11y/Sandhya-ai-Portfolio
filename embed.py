import base64
import io

with open('profile.jpg', 'rb') as f:
    encoded_string = base64.b64encode(f.read()).decode('utf-8')
    
data_uri = f'data:image/jpeg;base64,{encoded_string}'

with io.open('index_single.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('./profile.jpg', data_uri)

with io.open('index_single.html', 'w', encoding='utf-8') as f:
    f.write(html)
