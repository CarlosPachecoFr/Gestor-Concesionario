# 📊 Dashboard-Gestor-Concesionario

Panel visual complementario al proyecto [**Automatización del Gestor de Concesionario con N8N**](https://github.com/CarlosPachecoFr/Automatizacion-Gestor-Concesionario-N8N), desarrollado con **Angular**, **TailwindCSS**, **TypeScript** y **ApexCharts**.

Este dashboard permite al gestor del concesionario **visualizar y analizar en tiempo real** los datos de su negocio, inventario, ventas y stock mediante una interfaz moderna, clara y totalmente dinámica.  
A diferencia del sistema conversacional con IA, este panel actúa como un **complemento visual independiente**, conectado a una serie de **endpoints creados con n8n**.

Los endpoints se encuentran exportados en la carpeta `n8n_endpoints/` del proyecto.  
Cada uno de ellos está diseñado dentro de n8n como un **workflow HTTP independiente**, que expone la información necesaria (ventas, inventario, stock, etc.) para ser consumida por el dashboard.  
De este modo, el panel combina un frontend moderno con un **backend sin servidor basado en n8n**, manteniendo una arquitectura limpia, modular y fácilmente extensible.

---

## 🎯 Objetivo

Brindar al gestor una herramienta visual para:
- Consultar el inventario de vehículos con detalle.
- Analizar ventas y evolución de stock mediante gráficos interactivos.
- Apoyar la toma de decisiones sin depender únicamente del bot de Telegram.
- Centralizar la información del concesionario en un entorno visual y accesible.

---

## 🧩 Arquitectura del Proyecto

El sistema está compuesto por un **frontend dinámico** en Angular y un **backend sin servidor** implementado con n8n.  
Los datos se almacenan y consultan desde una base de datos PostgreSQL, expuestos mediante workflows HTTP.

```text
Angular (Dashboard)
   ├─ TailwindCSS → Estilos y diseño responsive
   ├─ ApexCharts → Gráficas dinámicas (ventas, stock, etc.)
   ↓
n8n (Workflows HTTP - Endpoints JSON)
   ↓
PostgreSQL (Base de datos del concesionario)

```

Cada gráfico o tabla del dashboard obtiene sus datos desde un **endpoint HTTP** creado en **n8n**, el cual ejecuta internamente una **consulta SQL** sobre **PostgreSQL** y devuelve el resultado en formato **JSON**.  

Esto permite que el panel se mantenga **sincronizado en tiempo real** con los datos del concesionario, ofreciendo una visión siempre actualizada del inventario y las ventas.

---

## ⚙️ Funcionalidades Principales

- 📦 **Visualización de inventario:** muestra todos los vehículos con sus detalles (marca, modelo, año, precio, estado...).  
- 💰 **Gráficas de ventas por mes:** generadas dinámicamente a partir de los datos en la base de datos.  
- 🚘 **Gráfica de stock por marca:** permite conocer la distribución de vehículos disponibles.  
- 🔄 **Datos actualizados en tiempo real:** el dashboard consulta directamente los endpoints de n8n.  
- 🎨 **Diseño responsive y moderno:** construido con **TailwindCSS** y **ApexCharts** para ofrecer una experiencia fluida y profesional.

---

## 🗂️ Estructura de Carpetas

```text
Dashboard-Gestor-Concesionario/
│
├── src/
│   ├── app/
│   │   ├── componentes/      # Componentes de Angular (gráficas, tablas, etc.)
│   │   ├── servicios/        # Servicios que consultan los endpoints de n8n
│   │   └── vistas/           # Páginas principales del dashboard
│   ├── assets/              # Recursos estáticos
│
├── n8n-endpoints/           # Workflows exportados (cada uno un endpoint JSON)
│   ├── Endpoint Añadir Coche.json
│   ├── Endpoint Datos Tarjetas.json
│   └── Endpoint Datos-Graficas Ventas_Mes.json
│
└── README.md
```

---

## 🧰 Tecnologías Utilizadas

| Tecnología | Uso |
|-------------|-----|
| **Angular** | Framework principal del frontend |
| **TailwindCSS** | Estilos y diseño responsive |
| **TypeScript** | Tipado y estructura del proyecto |
| **ApexCharts** | Visualización de datos mediante gráficas interactivas |
| **n8n** | Backend modular basado en workflows HTTP |
| **PostgreSQL** | Base de datos principal del concesionario |

---

## 🚀 Cómo Ejecutar el Proyecto

1. **Clonar el repositorio**:
  ```bash
  git clone https://github.com/CarlosPachecoFr/Dashboard-Gestor-Concesionario.git
  ```

2. **Accede al directorio del proyecto**:
   ```bash
   cd Dashboard-Gestor-Concesionario
   ```

3. **Instala las dependencias** (requiere Node.js y Angular CLI):
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo** (requiere Angular CLI):
   ```bash
   ng serve
   ```

5. Abre tu navegador en `http://localhost:4200` para ver la aplicación.

6. Configura tu instancia de n8n (local o en servidor).

7. Importa los archivos .json desde la carpeta n8n-endpoints/ en tu panel de n8n.

8. Crea las credenciales necesarias:
   - PostgreSQL → acceso a la base de datos del concesionario.

9. Activa los workflows para exponer los endpoints HTTP.

---

## 🛡️ Seguridad

Este repositorio **no incluye credenciales reales**.  
Antes de ejecutar los flujos de n8n, debes configurar los valores marcados como:

- `<TO_BE_DEFINED>`  
- `<TO_BE_CONFIGURED>`  
- `To configure (Postgres)`

---

## 🔗 Integración con el Proyecto Principal

Este proyecto forma parte de la solución completa de automatización del concesionario:  
👉 [**Automatización del Gestor de Concesionario con n8n**](https://github.com/CarlosPachecoFr/Automatizacion-Gestor-Concesionario-N8N)

Ambos sistemas están diseñados para trabajar juntos:

- 🤖 **El bot de Telegram + IA** gestiona el concesionario mediante lenguaje natural.  
- 📊 **El dashboard Angular** proporciona una vista visual y analítica de los mismos datos.

---

## 👨‍💻 Autor

**Desarrollado por Carlos Pacheco Frutos**  

🔗 Integración avanzada de **automatización y visualización** con  **n8n + Angular + PostgreSQL + IA**

