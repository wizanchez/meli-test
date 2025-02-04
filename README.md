# Test Mercado Libre

**Nombre:** Luis Sanchez

**Email:** <wizanchez@gmail.com>

## Instalación

- Para instalar clonar el repo

```bash
https://github.com/wizanchez/meli-test.git
```

- Instalar y ejecutar

```bash
yarn install
yarn start-dev
```

> **Nota:** Este proyecto tambien esta desplegado en
> [https://meli-wizanchez.vercel.app/](https://meli-wizanchez.vercel.app/) > _Falta unas configuracion para > que funcione correctamente en vercel_

> **Nota:** La variables de entorno se encuentra en `/env.example`

> **Nota:** El diagrama en drawio se puede ver en `/codeviz-diagram.drawio`

> **Nota:** Esta desarrollado con node **_v20.18.2_**

## Explicación del proyecto

---

Se explicará de la estructura del aplicativo:

Se crea el proyecto con el siguiente orden:

![Project Structure](https://futbolwin.com/meli/estruct.png)

- **src/ :** Contiene todo el proyecto, la funcionalidad
  **src/client/ :** Estructura de las paginas y logica _React_
  **src/server/ :** Estructura del back realizado con _express_
  **src/sevices/ :** Folder para todos los sericios (llamados al back, ya sea local y para el api de mercado libre)
  **src/utils/ :** Folder para funciones utilitarias que comparten _client_ y _server_

### Archivos de configuración

- **src/webpack.config.client.js:** Archivo de configuración para el client.
- **src/webpack.config.server.js:** Archivo de configuración para el server.

---

## Rutas Components y Páginas

- El manejo de los routes se realizó con la libreria `react-router-dom`,
- Para los componentes transversales se crearon en `src/client/components`
  ![components](https://futbolwin.com/meli/componetns.png)

- Para las paginas este maneja su propia estructura `src/client/pages`

- **pages/Module/ :** Estructura de toda la pagina.
  **pages/Module/components/ :** Estos componentes es solo utilizados para el módulo en particular.
  **pages/Module/constants/ :** Constantes solo usados para el módulo.
  **pages/Module/context/ :** Configuración del contexto solo para el módulo.
  **pages/Module/hooks/ :** _customHook_ donde vamos a tener toda la lógica del modulo.
  **pages/Module/interfaces/ :** Todas las interfaces que se van a usar solo para el módulo.
  **pages/Module/utils/ :** Si existen funciones utilitarias que solo se usaran en el módulo.
  **pages/Module/index.tsx :** Archivo de entrada del módulo, aca se recibe todo los datos y se inizializa el contexto.

  - ![module](https://futbolwin.com/meli/module.png)

  - Todos los valores van a obtener del context de cada Módulo en que se inyectaran por medio del customHook.
    ![hook](https://futbolwin.com/meli/customHook.png)

---

## Estructura Backend

- Se realiza las rutas con controlador y los modelos,
- ![module](https://futbolwin.com/meli/server.png)
- Cuando se hace llamado a los servicios se realiza por los adaptadores dependiendo de donde se solicite la informacion
  ![service](https://futbolwin.com/meli/service.png)

---

## Codebase Map

- Estructura mapiada en el proyecto.
  keyShared: _share_b0ea76f8ae_
  [https://www.codeviz.ai/](https://www.codeviz.ai/)

![struct](https://futbolwin.com/meli/struct.drawio.png)

## Flow view

- LandingPage
  ![landing](https://futbolwin.com/meli/landing-page.png)

---

- LandingPage SSR
  ![landing](https://futbolwin.com/meli/landing-page-ssr.png)

---

- Search
  ![landing](https://futbolwin.com/meli/search.png)

---

- List Item
  ![landing](https://futbolwin.com/meli/list-item.png)

---

- Item Detail P.P
  ![landing](https://futbolwin.com/meli/grid-item.png)

---

- Item Detail
  ![landing](https://futbolwin.com/meli/detail.png)

---

- Item Detail P.P
  ![landing](https://futbolwin.com/meli/grid-detail.png)

---

- Data get
  ![landing](https://futbolwin.com/meli/data-ssr.png)

---
