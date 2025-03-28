import os
# Define the menu items as Python lists of dictionaries
servicios_items = [
    {"text": "Envíos Express", "url": "/mensajeria-envios-express"},
    {"text": "Envíos LowCost", "url": "/mensajeria-envios-lowcost"},
    {"text": "Moto Express", "url": "/delivery-moto-express"},
    {"text": "Moto Fija", "url": "/delivery-moto-fija"},
    {"text": "Plan Emprendedores", "url": "/envios-emprendedores"}
]

cotizar_items = [
    {"text": "Cotizar Express", "url": "/cotizador-envios-express"},
    {"text": "Cotizar LowCost", "url": "/cotizador-envios-lowcost"}
]

def create_directory_if_not_exists(path):
    """Create directory if it doesn't exist"""
    if not os.path.exists(path):
        os.makedirs(path)

def create_astro_file(filepath, title):
    """Create an Astro file with basic template"""
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(f'''---
layout: '../layouts/Layout.astro'
title: '{title}'
---

<h1>{title}</h1>
''')

# Base directory for pages
base_dir = "G:\\02-Envios\\astro-sassify-template\\src\\pages"

# Create base directory if it doesn't exist
create_directory_if_not_exists(base_dir)

nosotros_items = [
    {"text": "Sobre Nosotros", "url": "/sobre-nosotros"},
    {"text": "Preguntas Frecuentes", "url": "/preguntasfrecuentes"},
    {"text": "Nuestras Redes", "url": "/nuestrasredes"},
    {"text": "Noticias", "url": "/preguntasfrecuentes"}
]

# Additional pages
additional_pages = [
    {"text": "Inicio", "url": "/inicio"},
    {"text": "Contacto", "url": "/contacto"}
]

def create_pages():
    """
    Function to create pages based on the menu items
    """
    all_pages = servicios_items + cotizar_items + nosotros_items + additional_pages
    
    for page in all_pages:
        page_path = page["url"].strip("/")
        file_path = os.path.join(base_dir, f"{page_path}.astro")
        
        # Create the file with the page title
        create_astro_file(file_path, page["text"])
        print(f"Created page: {file_path}")
        
if __name__ == "__main__":
    create_pages()
